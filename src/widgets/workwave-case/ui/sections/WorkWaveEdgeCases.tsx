"use client";

import Image from "next/image";
import { useState } from "react";
import type { ComponentPropsWithoutRef } from "react";

type WorkWaveEdgeCasesProps =
  ComponentPropsWithoutRef<"section">;

const edgeCases = [
  {
    title: "01. Нет забронированных смен",
    description:
      "Пустой календарь объясняет, что делать дальше",
    image:
      "/images/workwave/workwave-edgeCases1.png",
  },
  {
    title: "02. Нет подходящей работы",
    description:
      "Поиск остаётся рабочим даже без результата.",
    image:
      "/images/workwave/workwave-edgeCases2.png",
  },
  {
    title: "03. Соискатель не пришёл",
    description:
      "Работодатель может зафиксировать неявку.",
    image:
      "/images/workwave/workwave-edgeCases3.png",
  },
  {
    title: "04. Выплата ещё не завершена",
    description:
      "Отзыв пока недоступен.",
    image:
      "/images/workwave/workwave-edgeCases4.png",
  },
  {
    title: "05. Закончился доступный лимит",
    description:
      "Работодатель получает следующий доступный шаг.",
    image:
      "/images/workwave/workwave-edgeCases5.png",
  },
];

export function WorkEdgeCases({
  id,
  className,
  ...props
}: WorkWaveEdgeCasesProps) {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const activeCase =
    edgeCases[activeIndex];

  return (
    <section
      id={id}
      className={className}
      {...props}
    >
      <div className="py-[100px] lg:pl-[300px] lg:pr-[100px] [@media(min-height:850px)]:lg:pl-[404px] [@media(min-height:850px)]:lg:pr-[160px]">
        {/* HEADER */}

        <div className="flex items-start justify-between gap-12 px-3 lg:px-3">
          <div>
            <p className="mb-3 text-[12px] leading-[16px] text-[#7181F8]">
              edge cases
            </p>

            <h2 className="text-[32px] leading-[38px] [@media(min-height:850px)]:lg:text-[40px] [@media(min-height:850px)]:lg:leading-[48px] font-semibold text-[#161A2B]">
              Около 60 экранов появились
              <br />
              не из-за роста UI
            </h2>
          </div>
        </div>

        {/* CONTENT */}

        {/* Адаптивная сетка: на мобильных/ноутбуках в столбик, на больших — оригинальные пропорции */}
        <div className="mt-8 [@media(min-height:850px)]:lg:mt-10 grid lg:grid-cols-[350px_minmax(0,1fr)] xl:grid-cols-[420px_minmax(0,1fr)] [@media(min-height:850px)]:xl:grid-cols-[472px_minmax(0,1fr)] gap-5 lg:gap-5">
          
          {/* LEFT */}

          <div className="flex flex-col gap-3 px-3 lg:px-0">
            {edgeCases.map(
              (item, index) => {
                const isActive =
                  activeIndex === index;

                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() =>
                      setActiveIndex(index)
                    }
                    aria-pressed={isActive}
                    className={`
                      min-h-[90px] lg:min-h-[100px] [@media(min-height:850px)]:lg:min-h-[114px]
                      w-full
                      rounded-[20px]
                      cursor-pointer
                      px-5 py-4 lg:px-6 lg:py-5 [@media(min-height:850px)]:lg:px-7 lg:py-6
                      text-left
                      transition-colors
                      duration-300
                      ease-out

                      ${
                        isActive
                          ? "bg-[#35439B] text-white"
                          : "bg-white text-[#212967] hover:bg-[#F7F7FC]"
                      }
                    `}
                  >
                    <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] font-semibold leading-[28px]">
                      {item.title}
                    </p>

                    <p
                      className={`
                        mt-2 lg:mt-4
                        text-[14px] [@media(min-height:850px)]:lg:text-[16px]
                        leading-[24px]
                        transition-colors
                        duration-300

                        ${
                          isActive
                            ? "text-[#E5E7F8]"
                            : "text-[#858A9A]"
                        }
                      `}
                    >
                      {item.description}
                    </p>
                  </button>
                );
              },
            )}
          </div>

          {/* RIGHT IMAGE */}

          <div
            className="
              relative
              min-h-[300px] md:min-h-[400px] lg:min-h-[500px] [@media(min-height:850px)]:lg:min-h-[614px]
              overflow-hidden
              rounded-[24px]
              mx-3 lg:mx-0
            "
          >
            <Image
              key={activeCase.image}
              src={activeCase.image}
              alt={activeCase.title}
              fill
              sizes="(max-width: 1440px) 55vw, 800px"
              className="object-center lg:object-right"
            />
          </div>
        </div>
      </div>
      
      <Image
        src="/images/workwave/workwave-edgeCasesBg.png"
        alt=""
        width={1920}
        height={0}
        className="w-full h-auto"
      />
    </section>
  );
}