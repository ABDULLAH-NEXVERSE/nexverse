'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, Layers, Zap, Orbit, ArrowDown } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function InteractiveCore3D({ onOpenInquiry }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      id: '01',
      title: 'Architectural Monolith',
      subtitle: 'The Unified Digital Core',
      description:
        'Engineered from the ground up for extreme performance, security, and continuous scalability.',
      icon: Cpu,
      tag: 'Bespoke Software',
    },
    {
      id: '02',
      title: 'Deconstructed Synergy',
      subtitle: 'Modular Cloud Microservices',
      description:
        'Independent data pipelines and API meshes decoupling frontends from enterprise backend logic.',
      icon: Layers,
      tag: 'Cloud & API Architecture',
    },
    {
      id: '03',
      title: 'Orbital Constellation',
      subtitle: 'Modern Engineering Ecosystem',
      description:
        'Native integration across Node.js, React, headless WordPress, and distributed cloud runtimes.',
      icon: Orbit,
      tag: 'Multi-Platform Delivery',
    },
    {
      id: '04',
      title: 'Convergence & Impact',
      subtitle: 'Precision Case Studies',
      description:
        'Transitioning architectural mastery into world-class digital products for industry pioneers.',
      icon: Zap,
      tag: 'Proven Results',
    },
  ];

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    // Detect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // SCENE SETUP
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07090e, 0.045);

    const width = containerRef.current.clientWidth || window.innerWidth;
    const height = containerRef.current.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    // LIGHTS
    const ambientLight = new THREE.AmbientLight(0x0c1322, 1.5);
    scene.add(ambientLight);

    const blueLight = new THREE.PointLight(0x468eef, 4, 20);
    blueLight.position.set(4, 3, 4);
    scene.add(blueLight);

    const cyanLight = new THREE.PointLight(0x00f0ff, 3.5, 18);
    cyanLight.position.set(-4, -3, 3);
    scene.add(cyanLight);

    // MONOLITH ARTIFACT GROUP
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Central Refractive Crystal Monolith (Icosahedron)
    const crystalGeo = new THREE.IcosahedronGeometry(1.8, 0);
    const crystalMat = new THREE.MeshPhysicalMaterial({
      color: 0x0a1428,
      emissive: 0x050e24,
      metalness: 0.85,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transmission: 0.45,
      thickness: 1.2,
      wireframe: false,
    });
    const crystalMesh = new THREE.Mesh(crystalGeo, crystalMat);
    coreGroup.add(crystalMesh);

    // 2. Inner Cyber Lattice (Wireframe Octahedron)
    const innerGeo = new THREE.OctahedronGeometry(1.2, 2);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const innerLattice = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerLattice);

    // 3. Central Energy Core (Glowing Pulsing Sphere)
    const sphereGeo = new THREE.SphereGeometry(0.55, 32, 32);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x468eef,
      transparent: true,
      opacity: 0.85,
    });
    const energyCore = new THREE.Mesh(sphereGeo, sphereMat);
    coreGroup.add(energyCore);

    // 4. Detachable Outer Floating Shards
    const shardsGroup = new THREE.Group();
    coreGroup.add(shardsGroup);

    const shardGeometry = new THREE.TetrahedronGeometry(0.35, 0);
    const shardMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x00f0ff,
      emissiveIntensity: 0.2,
    });

    const shardCount = 12;
    const shards = [];
    const shardInitialPositions = [];
    const shardExplodedPositions = [];

    for (let i = 0; i < shardCount; i++) {
      const shard = new THREE.Mesh(shardGeometry, shardMaterial);
      const phi = Math.acos(-1 + (2 * i) / shardCount);
      const theta = Math.sqrt(shardCount * Math.PI) * phi;

      const rBase = 2.1;
      const x = rBase * Math.cos(theta) * Math.sin(phi);
      const y = rBase * Math.sin(theta) * Math.sin(phi);
      const z = rBase * Math.cos(phi);

      shard.position.set(x, y, z);
      shard.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);

      shardInitialPositions.push(new THREE.Vector3(x, y, z));
      shardExplodedPositions.push(new THREE.Vector3(x * 1.7, y * 1.7, z * 1.7));

      shardsGroup.add(shard);
      shards.push(shard);
    }

    // 5. Planetary Orbital Rings
    const ring1Geo = new THREE.TorusGeometry(3.0, 0.015, 16, 120);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x468eef,
      transparent: true,
      opacity: 0.35,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(3.8, 0.01, 16, 120);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.25,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 6;
    coreGroup.add(ring2);

    // 6. Volumetric Particles
    const particleCount = 1000;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 30;
      particlePositions[i + 1] = (Math.random() - 0.5) * 30;
      particlePositions[i + 2] = (Math.random() - 0.5) * 30;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      color: 0x7dd3fc,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // MOUSE PARALLAX
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onMouseMove = (e) => {
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 0.6;
      mouse.targetY = (e.clientY / window.innerHeight - 0.5) * 0.6;
    };
    window.addEventListener('mousemove', onMouseMove);

    // RESIZE LISTENER
    const handleResize = () => {
      if (!containerRef.current || !renderer) return;
      const w = containerRef.current.clientWidth || window.innerWidth;
      const h = containerRef.current.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // GSAP SCROLLTRIGGER TIMELINE
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=300%',
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress < 0.25) setActiveStage(0);
          else if (progress < 0.5) setActiveStage(1);
          else if (progress < 0.75) setActiveStage(2);
          else setActiveStage(3);

          const explosionFactor = Math.min(Math.max((progress - 0.15) * 2.2, 0), 1);
          for (let i = 0; i < shards.length; i++) {
            shards[i].position.lerpVectors(
              shardInitialPositions[i],
              shardExplodedPositions[i],
              explosionFactor
            );
          }
        },
      },
    });

    scrollTimeline
      .to(
        camera.position,
        {
          z: 7.2,
          y: 0.4,
          ease: 'power2.inOut',
        },
        0
      )
      .to(
        coreGroup.rotation,
        {
          y: Math.PI * 0.7,
          x: 0.2,
          ease: 'power2.inOut',
        },
        0
      )
      .to(
        camera.position,
        {
          x: 1.8,
          y: -0.5,
          z: 6.2,
          ease: 'power2.inOut',
        },
        0.4
      )
      .to(
        coreGroup.rotation,
        {
          y: Math.PI * 1.5,
          x: -0.3,
          ease: 'power2.inOut',
        },
        0.4
      )
      .to(
        camera.position,
        {
          x: 0,
          y: 0,
          z: 5.2,
          ease: 'power3.inOut',
        },
        0.75
      )
      .to(
        coreGroup.rotation,
        {
          y: Math.PI * 2.2,
          x: 0,
          ease: 'power2.inOut',
        },
        0.75
      );

    // ANIMATION RENDER LOOP
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      if (!prefersReducedMotion) {
        crystalMesh.rotation.y += 0.002;
        innerLattice.rotation.x -= 0.003;
        innerLattice.rotation.y += 0.002;

        ring1.rotation.z += 0.0015;
        ring2.rotation.z -= 0.0015;

        const pulse = 1 + Math.sin(elapsedTime * 2.5) * 0.06;
        energyCore.scale.set(pulse, pulse, pulse);

        particles.rotation.y = elapsedTime * 0.01;
      }

      scene.rotation.y = mouse.x * 0.25;
      scene.rotation.x = -mouse.y * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach((t) => t.kill());

      crystalGeo.dispose();
      crystalMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      shardGeometry.dispose();
      shardMaterial.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      particleGeo.dispose();
      particleMat.dispose();

      renderer.dispose();
    };
  }, []);

  return (
    <section id="architecture" ref={containerRef} className="core-3d-wrapper">
      <canvas ref={canvasRef} className="core-canvas-el" />

      {/* Ambient Glows */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          filter: 'blur(120px)',
          background: '#468eef',
          opacity: 0.15,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          filter: 'blur(120px)',
          background: '#00f0ff',
          opacity: 0.15,
          pointerEvents: 'none',
        }}
      />

      {/* Pinned Editorial HUD Overlay */}
      <div className="core-hud-overlay">
        {/* Top Header Information */}
        <div className="core-hud-top">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00f0ff', display: 'inline-block' }} />
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-display)', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Operational State // Chapter {stages[activeStage].id}
            </span>
          </div>

          <div className="glass-pill" style={{ padding: '0.35rem 0.85rem', fontSize: '0.75rem', color: '#94a3b8' }}>
            <span style={{ color: '#00f0ff', fontWeight: 600, fontFamily: 'monospace' }}>60 FPS</span>
            <span style={{ margin: '0 0.5rem' }}>•</span>
            <span>Interactive WebGL 3D</span>
          </div>
        </div>

        {/* Dynamic Chapter Info Card */}
        <div className="core-hud-bottom">
          <div className="core-info-card glass-panel">
            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-display)', color: '#00f0ff', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '0.4rem' }}>
              {stages[activeStage].tag}
            </div>

            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
              {stages[activeStage].title}
            </h3>

            <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              {stages[activeStage].description}
            </p>

            {/* Progress Bars */}
            <div style={{ display: 'flex', gap: '0.5rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              {stages.map((st, idx) => (
                <div
                  key={st.id}
                  style={{
                    flex: 1,
                    height: '4px',
                    borderRadius: '2px',
                    backgroundColor: idx === activeStage ? '#00f0ff' : idx < activeStage ? '#468eef' : 'rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Scroll Prompt */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#94a3b8', gap: '0.25rem' }}>
            <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              Scroll to explore
            </span>
            <ArrowDown size={14} style={{ color: '#00f0ff' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
