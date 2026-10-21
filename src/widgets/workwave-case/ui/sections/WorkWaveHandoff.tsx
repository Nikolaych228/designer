import type {
  ComponentPropsWithoutRef,
} from "react";
import { imgPath } from "@/lib/utils"; // 👈 Добавили импорт утилиты

import { WorkWaveHandoffVideo } from "./WorkWaveHandoffVideo";

type WorkWaveHandoffProps =
  ComponentPropsWithoutRef<"section">;

export function WorkWaveHandoff({
  id,
  className,
  ...props
}: WorkWaveHandoffProps) {
  return (
    <section
      id={id}
      className={className}
      {...props}
    >
      <div className="py-[100px] lg:pl-[300px] lg:pr-[100px] [@media(min-height:850px)]:lg:pl-[404px] [@media(min-height:850px)]:lg:pr-[160px]">
        <div className="flex flex-col lg:flex-row justify-between gap-y-10 lg:gap-y-0 lg:gap-x-10">
          {/* LEFT */}

          <div className="[@media(min-height:850px)]:lg:max-w-[646px] max-w-[550px] px-3 lg:px-3">
            <p className="text-[12px] leading-[16px] text-[#7181F8]">
              handoff
            </p>

            <h2 className="mt-3 text-[32px] leading-[38px] [@media(min-height:850px)]:lg:text-[40px] [@media(min-height:850px)]:lg:leading-[48px] font-semibold text-gray-900">
              Проектирование шло
              одновременно с
              разработкой
            </h2>

            <div className="mt-6 [@media(min-height:850px)]:lg:mt-10 lg:pl-3">
              <p className="text-[16px] leading-[24px] [@media(min-height:850px)]:lg:text-[18px] [@media(min-height:850px)]:lg:leading-[28px] text-[#6D717F]">
                Не было этапа, где
                сначала полностью
                заканчивается дизайн,
                а потом начинается
                разработка. Основные
                сценарии и повторяемые
                компоненты приходилось
                фиксировать раньше
                второстепенных
                состояний
              </p>

              <p className="mt-4 text-[16px] leading-[24px] [@media(min-height:850px)]:lg:text-[18px] [@media(min-height:850px)]:lg:leading-[28px] text-[#6D717F]">
                Я передавала:
              </p>
            </div>

            {/* TAGS */}

            <div className="mt-6 [@media(min-height:850px)]:lg:mt-10 flex flex-wrap gap-2 lg:gap-3">
              <div className="rounded-full border border-[#C8CEFC] px-3 py-2 [@media(min-height:850px)]:lg:px-4 lg:py-3">
                <p className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] font-semibold leading-[24px] text-[#212967]">
                  готовые экраны
                </p>
              </div>

              <div className="rounded-full border border-[#C8CEFC] px-3 py-2 [@media(min-height:850px)]:lg:px-4 lg:py-3">
                <p className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] font-semibold leading-[24px] text-[#212967]">
                  состояния
                </p>
              </div>

              <div className="rounded-full border border-[#C8CEFC] px-3 py-2 [@media(min-height:850px)]:lg:px-4 lg:py-3">
                <p className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] font-semibold leading-[24px] text-[#212967]">
                  компоненты
                </p>
              </div>

              <div className="rounded-full border border-[#C8CEFC] px-3 py-2 [@media(min-height:850px)]:lg:px-4 lg:py-3">
                <p className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] font-semibold leading-[24px] text-[#212967]">
                  поведение
                </p>
              </div>

              <div className="rounded-full border border-[#C8CEFC] px-3 py-2 [@media(min-height:850px)]:lg:px-4 lg:py-3">
                <p className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] font-semibold leading-[24px] text-[#212967]">
                  связи между сценариями
                </p>
              </div>
            </div>

            <div className="mt-6 [@media(min-height:850px)]:lg:mt-10 lg:pl-3">
              <p className="text-[16px] leading-[24px] [@media(min-height:850px)]:lg:text-[18px] [@media(min-height:850px)]:lg:leading-[28px] text-[#6D717F]">
                После handoff отвечала
                на вопросы реализации
                и уточняла спорные
                состояния
              </p>
            </div>
          </div>

          {/* RIGHT / VIDEO */}

          
            <WorkWaveHandoffVideo
              src={imgPath("/video/workwave-handoffVideo.mp4")} // 👈 ИСПРАВЛЕНО
              className="h-full w-full  mx-auto lg:mx-0"
            />
          
        </div>
      </div>
    </section>
  );
}