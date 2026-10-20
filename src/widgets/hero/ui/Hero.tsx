"use client";
import Aurora from "@/components/ui/mesh-gradient-background";
import { Button, ButtonWhite } from "@/shared/ui/button";
import Image from "next/image";



export function Hero() {
  return (
      <section className="[@media(min-height:850px)]:lg:h-[1000px] h-[800px] flex flex-col justify-center items-center relative overflow-hidden"> 
        <div className="pointer-events-none absolute inset-0 z-0">
            <Aurora
                colorStops={["#afceff","#edf4ff","#cee0ff"]}
                blend={0.5}
                amplitude={1.0}
                speed={1}
                lightMode
            />
        </div>
      <div className="flex gap-x-3 z-10 mb-6">
        <Image
            src="/icons/star.svg"
            alt=""
            width={8}
            height={8}
        />
        <p className="text-gray-400 text-[12px] leading-[16px]">5 лет коммерческого опыта</p>
        <Image
            src="/icons/star.svg"
            alt=""
            width={8}
            height={8}
        />
        <p className="text-gray-400 text-[12px] leading-[16px]">B2B / B2C</p>
        <Image
            src="/icons/star.svg"
            alt=""
            width={8}
            height={8}
        />
        <p className="text-gray-400 text-[12px] leading-[16px]">Web & Mobile</p>
        <Image
            src="/icons/star.svg"
            alt=""
            width={8}
            height={8}
        />
      </div>
      <p className="text-[48px] font-semibold z-10 leading-[58px]">
        UX/UI-DESIGNER PORTFOLIO
      </p>
      <div className="max-w-[720px] z-10 text-center mt-4">
        <p className="text-[18px] leading-[28px] text-gray-400">
           Работаю с ролями, данными, состояниями и ограничениями.<br/>Проектирую сценарии, UI-систему и готовлю решение к разработке
        </p>
      </div>
      <div className="mt-6 z-10 flex gap-x-3">
          <Button onClick={() => window.dispatchEvent(new Event("scrollToProjects"))}>
              Перейти к кейсам
          </Button>
          <ButtonWhite target="_blank" href="/pdf/Rezyume.pdf" arrowPrime="right">
              Открыть CV
          </ButtonWhite>
      </div>
    </section>
  );
}