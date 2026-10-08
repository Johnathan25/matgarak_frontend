// src/context/WebsiteThemeContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const WebsiteThemeContext = createContext();

export function WebsiteThemeProvider({ theme, children }) {
  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(() => {
    if (!theme) return;
    setCurrentTheme(theme);

    // طبّق الـ CSS variables على الـ root
    const root = document.documentElement;
    root.style.setProperty("--primary", theme.primaryColor || "#0A2947");
    root.style.setProperty("--secondary", theme.secondaryColor || "#8B5E3C");
    root.style.setProperty("--accent", theme.accentColor || "#FF9B51");
    root.style.setProperty("--bg", theme.backgroundColor || "#ffffff");
    root.style.setProperty("--surface", theme.surfaceColor || "#F8F9FB");
    root.style.setProperty("--text-primary", theme.textPrimaryColor || "#0A2947");
    root.style.setProperty("--text-secondary", theme.textSecondaryColor || "#6B7280");
    root.style.setProperty("--font-family", theme.fontFamily || "'Cairo', sans-serif");
    root.style.setProperty("--radius", theme.radius || "16px");

    // طبق على body
    document.body.style.fontFamily = theme.fontFamily || "'Cairo', sans-serif";
    document.body.style.backgroundColor = theme.backgroundColor || "#ffffff";
    document.body.style.color = theme.textPrimaryColor || "#0A2947";
  }, [theme]);

  return (
    <WebsiteThemeContext.Provider value={currentTheme}>
      {children}
    </WebsiteThemeContext.Provider>
  );
}

export const useWebsiteTheme = () => useContext(WebsiteThemeContext);