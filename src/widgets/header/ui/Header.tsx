"use client";

import Image from "next/image";
import Link from "next/link"; // 👈 Добавили импорт Link
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { imgPath } from "@/lib/utils"; // 👈 Добавили импорт утилиты для картинок

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    let startTime: number | null = null;
    const startY = window.scrollY;
    const duration = 800;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const ease = progress < 0.5 
        ? 4 * progress ** 3 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      
      const targetY = document.documentElement.scrollHeight - window.innerHeight;
      const currentY = startY + (targetY - startY) * ease;
      
      window.scrollTo(0, currentY);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        window.scrollTo(0, document.documentElement.scrollHeight);
      }
    };

    window.requestAnimationFrame(step);
  };

  const getLinkClass = (path: string) => {
    const baseClass = "text-[14px] leading-[20px] transition-colors duration-200";
    const activeClass = "text-[#4E61F6] font-semibold";
    const inactiveClass = "text-gray-600 hover:text-gray-800";
    
    // Проверяем совпадение путей
    return `${baseClass} ${pathname === path ? activeClass : inactiveClass}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[1920px] lg:px-[120px] [@media(min-height:850px)]:lg:px-[284px] pt-5">
        <div className="bg-[#fff]/70 backdrop-blur-md rounded-full pl-5 p-3 flex items-center justify-between">
          
          {/* Логотип (SVG) - заменили a на Link и применили imgPath */}
          <Link href="/" className="flex items-center cursor-pointer">
            <Image
                src={imgPath("/icons/logo.svg")} // 👈 ИСПРАВЛЕНО
                alt="Логотип"
                width={40}
                height={40}
            />
          </Link>

          {/* Навигация - заменили a на Link и добавили слеши в конце путей */}
          <nav className="hidden md:flex items-center gap-10">
            <Link href="/" className={getLinkClass("/")}>
              Обо мне
            </Link>
            <Link href="/projects/workwave/" className={getLinkClass("/projects/workwave/")}>
              Кейс №1
            </Link>
            <Link href="/projects/tenta/" className={getLinkClass("/projects/tenta/")}>
              Кейс №2
            </Link>
          </nav>

          {/* Кнопка (здесь оставляем обычный <a>, так как это якорь на этой же странице) */}
          <div>
            <a
              href="#contact"
              onClick={handleContactClick}
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#4E61F6] text-[#4E61F6] rounded-full text-[14px] leading-[16px] font-semibold hover:bg-[#4E61F6] hover:text-white transition-all duration-300"
            >
              Связаться
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}