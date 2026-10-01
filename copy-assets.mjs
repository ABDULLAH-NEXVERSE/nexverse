import fs from 'fs';
import path from 'path';

const baseSrc = 'nexverse.co.uk/wp-content/uploads';
const publicDir = 'public/assets';

const mappings = [
  // Logos
  {
    src: `${baseSrc}/2024/01/Black-And-White-Aesthetic-Minimalist-Modern-Simple-Typography-Coconut-Cosmetics-Logo-2-e1704575130352.png`,
    dest: `${publicDir}/logos/nexverse-logo.png`
  },
  {
    src: `${baseSrc}/2024/02/nexverse_solutions_logo.jpeg`,
    dest: `${publicDir}/logos/nexverse-mark.jpg`
  },
  // Tech icons
  {
    src: `${baseSrc}/2024/01/apps-figma-icon-2048x2048-ctjj5ab7.png`,
    dest: `${publicDir}/tech/figma.png`
  },
  {
    src: `${baseSrc}/2024/01/node-js-icon-227x256-913nazt0.png`,
    dest: `${publicDir}/tech/nodejs.png`
  },
  {
    src: `${baseSrc}/2024/01/wordpress-icon.png`,
    dest: `${publicDir}/tech/wordpress.png`
  },
  // Works
  {
    src: `${baseSrc}/2024/01/Creative-Studio-Works-1.webp`,
    dest: `${publicDir}/work/cloud.webp`
  },
  {
    src: `${baseSrc}/2024/01/Creative-Studio-Works-2.webp`,
    dest: `${publicDir}/work/chain.webp`
  },
  {
    src: `${baseSrc}/2024/01/Creative-Studio-Works-3.webp`,
    dest: `${publicDir}/work/flash.webp`
  },
  // Solutions
  {
    src: `${baseSrc}/2024/01/Lead-Capture-Automation-1.png`,
    dest: `${publicDir}/solutions/automation-1.png`
  },
  {
    src: `${baseSrc}/2024/01/Lead-Capture-Invoicing-1.png`,
    dest: `${publicDir}/solutions/invoicing-1.png`
  },
  {
    src: `${baseSrc}/2024/01/Lead-Capture-Forms-1.png`,
    dest: `${publicDir}/solutions/forms-1.png`
  },
  // Testimonials
  {
    src: `${baseSrc}/2024/01/Lead-Capture-testimonial-1.webp`,
    dest: `${publicDir}/testimonials/user-1.webp`
  },
  {
    src: `${baseSrc}/2024/01/Lead-Capture-testimonial-2.webp`,
    dest: `${publicDir}/testimonials/user-2.webp`
  },
  {
    src: `${baseSrc}/2024/01/Lead-Capture-testimonial-3.webp`,
    dest: `${publicDir}/testimonials/user-3.webp`
  },
  {
    src: `${baseSrc}/2024/01/Lead-Capture-testimonial-4.webp`,
    dest: `${publicDir}/testimonials/user-4.webp`
  }
];

for (const m of mappings) {
  const fullSrc = path.resolve(m.src);
  const fullDest = path.resolve(m.dest);
  const dir = path.dirname(fullDest);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (fs.existsSync(fullSrc)) {
    fs.copyFileSync(fullSrc, fullDest);
    console.log(`Copied: ${m.src} -> ${m.dest}`);
  } else {
    console.warn(`File not found: ${fullSrc}`);
  }
}
console.log('Asset copy complete!');
