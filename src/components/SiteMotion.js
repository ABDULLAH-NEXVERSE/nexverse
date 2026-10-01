'use client';

import { useEffect } from 'react';
import { animate } from 'framer-motion';

const revealSelector = [
  '.hero-copy .eyebrow', '.hero h1', '.hero-bottom',
  '.intro-layout', '.intro-meta', '.featured-product-layout', '.service-card',
  '.project-card', '.tech-layout', '.solution-card', '.team-preview-layout',
  '.estimate-layout', '.testimonial-body',
  '.inner-page .inner-hero h1', '.inner-page .inner-hero p', '.product-display',
  '.product-intro-grid', '.product-capability', '.product-screen-copy', '.product-screen-card',
  '.work-gallery-heading', '.gallery-image-frame', '.capability-card', '.industry-heading',
  '.industry-card', '.about-image-frame', '.people-heading', '.person-card',
  '.about-studio-image', '.about-studio-copy', '.product-cta', '.work-cta',
  '.services-cta', '.about-cta',
].join(',');

export default function SiteMotion() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const animated = new WeakSet();
    const controls = new Set();
    let index = 0;

    const observeElement = (element) => {
      if (animated.has(element) || element.hasAttribute('data-reveal') || element.closest('.logo-marquee,.nav,.footer')) return;
      animated.add(element);
      element.classList.add('fm-pending');
      observer.observe(element);
    };

    const scan = (root) => {
      if (root instanceof Element && root.matches(revealSelector)) observeElement(root);
      root.querySelectorAll?.(revealSelector).forEach(observeElement);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        entry.target.classList.remove('fm-pending');
        const control = animate(entry.target, { opacity: [0, 1], y: [12, 0] }, {
          duration: 0.58,
          delay: (index++ % 4) * 0.055,
          ease: [0.22, 0.68, 0, 1],
        });
        controls.add(control);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });

    scan(document);
    const mutations = new MutationObserver((records) => {
      records.forEach((record) => record.addedNodes.forEach((node) => {
        if (node instanceof Element) scan(node);
      }));
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
      controls.forEach((control) => control.stop());
    };
  }, []);

  return null;
}
