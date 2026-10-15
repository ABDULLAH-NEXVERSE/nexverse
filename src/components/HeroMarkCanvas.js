'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { SVGLoader } from 'three/addons/loaders/SVGLoader.js';

export default function HeroMarkCanvas() {
  const host = useRef(null);

  useEffect(() => {
    const element = host.current;
    if (!element) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 80);
    camera.position.set(0, 0, 8.5);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
    } catch {
      element.classList.add('hero-mark-no-webgl');
      return undefined;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.35));
    renderer.setSize(element.clientWidth, element.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    element.appendChild(renderer.domElement);

    const mark = new THREE.Group();
    scene.add(mark);
    const loader = new SVGLoader();
    let disposed = false;
    let markMeshes = [];

    loader.load('/assets/logos/nexverse-x-mark.svg', (svg) => {
      if (disposed) return;
      const shapes = svg.paths.flatMap((path) => SVGLoader.createShapes(path));
      const geometry = new THREE.ExtrudeGeometry(shapes, {
        depth: 0.28,
        bevelEnabled: true,
        bevelSegments: 4,
        steps: 1,
        bevelSize: 1.1,
        bevelThickness: 1.1,
        curveSegments: 12,
      });
      geometry.computeVertexNormals();
      geometry.center();
      const material = new THREE.MeshPhysicalMaterial({
        color: '#468EEF',
        metalness: 0.52,
        roughness: 0.24,
        clearcoat: 0.9,
        clearcoatRoughness: 0.18,
        emissive: '#1266d4',
        emissiveIntensity: 0.26,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.scale.setScalar(0.045);
      mesh.rotation.x = Math.PI;
      mark.add(mesh);
      const edges = new THREE.LineSegments(
        new THREE.EdgesGeometry(geometry, 26),
        new THREE.LineBasicMaterial({ color: '#b9d8ff', transparent: true, opacity: 0.55 }),
      );
      edges.scale.copy(mesh.scale);
      edges.rotation.copy(mesh.rotation);
      mark.add(edges);
      markMeshes = [mesh, edges];
    });

    const globe = new THREE.Group();
    scene.add(globe);
    const points = [];
    const radius = 2.35;
    const rows = 38;
    const columns = 76;
    for (let row = 1; row < rows; row += 1) {
      const phi = (row / rows) * Math.PI;
      for (let column = 0; column < columns; column += 1) {
        const theta = (column / columns) * Math.PI * 2;
        const jitter = (Math.random() - 0.5) * 0.016;
        points.push(
          (radius + jitter) * Math.sin(phi) * Math.cos(theta),
          (radius + jitter) * Math.cos(phi),
          (radius + jitter) * Math.sin(phi) * Math.sin(theta),
        );
      }
    }
    const globeGeometry = new THREE.BufferGeometry();
    globeGeometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
    const globePoints = new THREE.Points(
      globeGeometry,
      new THREE.PointsMaterial({ color: '#62aaff', size: 0.018, transparent: true, opacity: 0.48, sizeAttenuation: true }),
    );
    globe.add(globePoints);

    const orbit = new THREE.Mesh(
      new THREE.TorusGeometry(2.7, 0.006, 6, 180),
      new THREE.MeshBasicMaterial({ color: '#468EEF', transparent: true, opacity: 0.42 }),
    );
    orbit.rotation.set(1.02, 0.18, -0.38);
    globe.add(orbit);

    scene.add(new THREE.AmbientLight('#d9eaff', 1.65));
    const key = new THREE.PointLight('#468EEF', 28, 16);
    key.position.set(3.4, 2.2, 4.5);
    scene.add(key);
    const rim = new THREE.PointLight('#b8dcff', 15, 14);
    rim.position.set(-3.5, -1.8, -2.2);
    scene.add(rim);

    let pointerX = 0;
    let pointerY = 0;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const onMove = (event) => {
      pointerX = (event.clientX / window.innerWidth - 0.5) * 0.18;
      pointerY = (event.clientY / window.innerHeight - 0.5) * 0.14;
    };
    const resize = () => {
      if (!element.clientWidth || !element.clientHeight) return;
      camera.aspect = element.clientWidth / element.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(element.clientWidth, element.clientHeight);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('resize', resize);

    let frame;
    const render = () => {
      frame = requestAnimationFrame(render);
      const elapsed = performance.now() * 0.00012;
      const motion = reduced ? 0 : 1;
      mark.rotation.y = elapsed * motion + pointerX;
      mark.rotation.x = Math.PI + Math.sin(elapsed * 0.7) * 0.07 * motion + pointerY;
      mark.rotation.z = Math.sin(elapsed * 0.4) * 0.045 * motion;
      globe.rotation.y = -elapsed * 0.35 * motion;
      globe.rotation.x = 0.13 + Math.sin(elapsed * 0.45) * 0.035 * motion;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };
    render();

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('resize', resize);
      markMeshes.forEach((part) => {
        part.geometry.dispose();
        part.material.dispose();
        mark.remove(part);
      });
      globeGeometry.dispose();
      globePoints.material.dispose();
      orbit.geometry.dispose();
      orbit.material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === element) element.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="hero-mark-canvas" ref={host} aria-hidden="true">
      <div className="hero-mark-fallback"><img src="/assets/logos/nexverse-x-mark.svg" alt="" /></div>
    </div>
  );
}
