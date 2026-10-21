import Image from "next/image";
import type {
  ComponentPropsWithoutRef,
} from "react";
import { imgPath } from "@/lib/utils"; // 👈 Добавили импорт утилиты

type WorkWaveAboutProps =
  ComponentPropsWithoutRef<"section">;

export function WorkWaveResult({
  id,
  className,
  ...props
}: WorkWaveAboutProps) {
  return (
    <section
      id={id}
      className={className}
      {...props}
    >
      <div className="py-25 lg:pl-[300px] lg:pr-[100px] [@media(min-height:850px)]:lg:pl-[404px] [@media(min-height:850px)]:lg:pr-[160px]">
        <div className="px-3 lg:px-3 [@media(min-height:850px)]:lg:max-w-[720px] max-w-[530px]">
            <p className="text-[12px] leading-[16px] text-[#7181F8]">
                результат
            </p>
            <p className="text-[32px] leading-[38px] [@media(min-height:850px)]:lg:text-[40px] [@media(min-height:850px)]:lg:leading-[48px] text-gray-900 font-semibold">
                Недостающая логика стала интерфейсом, который дошёл до релиза
            </p>
        </div>
        
        <div className="px-3 lg:px-3">
            <p className="mt-6 [@media(min-height:850px)]:lg:mt-10 text-[16px] leading-[24px] [@media(min-height:850px)]:lg:text-[18px] [@media(min-height:850px)]:lg:leading-[28px] text-[#6D717F]">
                На входе были идея продукта, команда и около десяти ключевых экранов. На выходе:
            </p>
        </div>
        
        {/* Всегда 4 колонки на ноутбуках и десктопе, 1 колонка на мобилках */}
        <div className="grid lg:grid-cols-3 gap-4 lg:gap-x-3 mt-5">
            
            <div className="p-4 [@media(min-height:850px)]:lg:p-8 border-[1px] border-[#8895F9] rounded-3xl flex flex-col justify-between">
                <p className="text-[18px] [@media(min-height:850px)]:lg:text-[24px] text-[#212967] leading-[24px] [@media(min-height:850px)]:lg:leading-[28px] font-semibold">
                    Экраны и состояния
                </p>
                <p className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[20px] [@media(min-height:850px)]:lg:leading-[24px] text-gray-500 mt-3 [@media(min-height:850px)]:lg:mt-4">
                    Основные сценарии, промежуточные шаги и edge cases
                </p>
            </div>
            
            <div className="p-4 [@media(min-height:850px)]:lg:p-8 border-[1px] border-[#8895F9] rounded-3xl flex flex-col justify-start">
                <p className="text-[18px] [@media(min-height:850px)]:lg:text-[24px] text-[#212967] leading-[24px] [@media(min-height:850px)]:lg:leading-[28px] font-semibold">
                    6 месяцев
                </p>
                <p className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[20px] [@media(min-height:850px)]:lg:leading-[24px] text-gray-500 mt-3 [@media(min-height:850px)]:lg:mt-4">
                    Проектирование шло вместе с разработкой
                </p>
            </div>
            
            <div className="p-4 [@media(min-height:850px)]:lg:p-8 bg-[#fff] rounded-3xl border border-gray-100 lg:border-transparent flex flex-col justify-between">
                <p className="text-[18px] [@media(min-height:850px)]:lg:text-[24px] text-[#212967] leading-[24px] [@media(min-height:850px)]:lg:leading-[28px] font-semibold">
                    MVP вышел в RuStore
                </p>
                <div className="flex items-center cursor-pointer mr-1">
                    <a target="_blank" href="https://www.rustore.ru/catalog/app/com.workwave" className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[20px] [@media(min-height:850px)]:lg:leading-[24px] text-[#4E61F6] ">
                        Перейти
                    </a>
                    <Image
                        src={imgPath("/icons/arrowPrime.svg")} // 👈 ИСПРАВЛЕНО
                        alt=""
                        width={16}
                        height={16}
                    />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}