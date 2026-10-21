"use client";

import Aurora from "@/components/ui/mesh-gradient-background";
import { Button, ButtonWhite } from "@/shared/ui/button";
import Image from "next/image";

export function MobileStub() {
  return (
    // Добавили relative, min-h-screen и overflow-hidden
    <div className="relative flex flex-col items-center justify-between min-h-screen py-14 px-4 text-center overflow-hidden">
      
      {/* Фон */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Aurora
          colorStops={["#afceff", "#edf4ff", "#cee0ff"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
          lightMode
        />
      </div>

      {/* Верхняя часть (добавили relative z-10 и flex-1, чтобы она растягивалась) */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 w-full">
        <div className="mb-6">
           <Image 
                src="/images/mobile/mobile.png" 
                alt="Better on desktop"
                width={280}
                height={186}
                priority // Добавили priority, чтобы картинка загружалась мгновенно
                className="object-contain" 
            />
        </div>
        
        {/* Вернул заголовок со скриншота */}
        <h1 className="text-[28px] font-bold leading-[1.2] text-[#131927] mb-4">
          Лучше смотреть<br />на большом экране
        </h1>

        <p className="text-[16px] leading-[24px] text-gray-500 max-w-[300px]">
          Мобильная версия сайта находится в разработке. Пожалуйста, откройте портфолио на компьютере, чтобы ознакомиться с проектами
        </p>
      </div>

      {/* Нижняя часть с кнопками (добавили relative z-10) */}
      <div className="relative z-10 w-full flex flex-col gap-3 pb-8 mt-10">
        <Button target="_blank" href="https://web.telegram.org/k/#@lzuxui" arrow="right">
            Написать в Telegram
        </Button>
        <ButtonWhite target="_blank" href="/pdf/Rezyume.pdf" arrowPrime="right">
            Открыть CV
        </ButtonWhite>
      </div>
    </div>
  );
}