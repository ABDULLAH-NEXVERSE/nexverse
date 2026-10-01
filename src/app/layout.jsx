import './globals.css';

export const metadata = {
  title: 'Nexverse | Architects of the Digital Future',
  description: 'Nexverse is a premier software development and digital engineering firm delivering bespoke software, cloud-native platforms, and high-velocity digital solutions.',
  keywords: ['software development', 'web development', 'cloud architecture', 'react', 'node.js', 'bespoke digital solutions'],
  openGraph: {
    title: 'Nexverse | Architects of the Digital Future',
    description: 'We shape the future of digital engineering with bespoke software, cloud platforms, and innovative web apps.',
    images: ['/assets/logos/nexverse-logo.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/assets/logos/nexverse-mark.jpg" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
