export default function LogoMarquee({ logos, label = 'Organizations in the Nexverse network' }) {
  const duration = `${Math.max(36, logos.length * 4.4)}s`;

  const group = (hidden = false) => (
    <div className="logo-marquee-group" aria-hidden={hidden || undefined}>
      {logos.map(([logo, name]) => (
        <div className="client-logo" key={logo}>
          <img src={`/assets/clients/${logo}`} alt={hidden ? '' : name} loading="eager" decoding="async" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="logo-marquee" role="group" aria-label={label}>
      <div className="logo-marquee-track" style={{ '--ticker-duration': duration }}>
        {group()}
        {group(true)}
      </div>
    </div>
  );
}
