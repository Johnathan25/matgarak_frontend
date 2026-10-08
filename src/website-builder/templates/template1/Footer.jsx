
export default function Footer({ section, theme, isBuilder }) {
  const c = section.content || {};
  const social = c.social || {};

//   const socials = [
//     { key: "facebook", Icon: Facebook, url: social.facebook },
//     { key: "instagram", Icon: Instagram, url: social.instagram },
//     { key: "twitter", Icon: Twitter, url: social.twitter },
//   ].filter((s) => s.url);

  return (
    <footer className="py-16 px-8 text-center" style={{ backgroundColor: theme?.backgroundColor }}>
      <div className="max-w-5xl mx-auto">
        <h3
          className="text-3xl font-black mb-4 tracking-[0.5em] uppercase"
          style={{ color: theme?.accentColor }}
        >
          {c.title || "LUXE"}
        </h3>
        {c.description && (
          <p className="text-xs mb-10 tracking-[0.3em] uppercase" style={{ color: theme?.textSecondaryColor }}>
            {c.description}
          </p>
        )}
{/* 
        {socials.length > 0 && (
          <div className="flex justify-center gap-4 mb-10">
            {socials.map(({ key, Icon, url }) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => isBuilder && e.preventDefault()}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ border: `1px solid ${theme?.accentColor}50`, color: theme?.accentColor }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        )} */}

        <div
          className="pt-6 text-[10px] tracking-[0.3em] uppercase"
          style={{ borderTop: `1px solid ${theme?.accentColor}20`, color: theme?.textSecondaryColor }}
        >
          {c.copyright}
        </div>
      </div>
    </footer>
  );
}