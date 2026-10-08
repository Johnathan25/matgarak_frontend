// src/hooks/useWebsiteSettings.js
import { useState, useEffect } from "react";
import api from "../services/api";

export default function useWebsiteSettings(slug) {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      if (!slug) {
        setLoading(false);
        setError("مفيش slug");
        return;
      }

      try {
        setLoading(true);
        setError(null);

        console.log("📡 Fetching settings for slug:", slug);

        const res = await api.get(`/websiteSettings/${slug}`);
        const data = res.data?.data || res.data;

        console.log("✅ Data:", data);
        setSettings(data);
      } catch (err) {
        console.error("❌ Fetch failed:", err);
        setError(err.response?.data?.message || "فشل تحميل بيانات المتجر");
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [slug]);

  return { settings, loading, error };
}