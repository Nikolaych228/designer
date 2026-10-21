"use client";
import { useState, useEffect } from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Проверяем ширину экрана
    const checkMobile = () => setIsMobile(window.innerWidth < 1024); // 1024px - это lg в Tailwind
    
    checkMobile(); // Проверяем сразу при загрузке
    window.addEventListener("resize", checkMobile); // Слушаем изменения
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}