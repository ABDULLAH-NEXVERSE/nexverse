import './globals.css';
import SiteMotion from '../components/SiteMotion';

export const metadata = {
  title: 'Nexverse — Architects of the Digital Future',
  description: 'Nexverse builds bespoke software, web and app experiences, custom WordPress solutions, and e-commerce platforms.',
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}<SiteMotion/></body></html>;
}
