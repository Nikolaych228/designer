import Image from "next/image";
import type {
  ComponentPropsWithoutRef,
} from "react";

type WorkWaveAboutProps =
  ComponentPropsWithoutRef<"section">;

export function WorkWaveGeosearch({
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
        <div className="grid lg:grid-cols-2 gap-x-10 gap-y-6 items-center">
            <div className="px-3 lg:px-3">
                <p className="text-[12px] leading-[16px] text-[#7181F8]">
                    геопоиск
                </p>
                <p className="text-[32px] leading-[38px] [@media(min-height:850px)]:lg:text-[40px] [@media(min-height:850px)]:lg:leading-[48px] text-gray-900 font-semibold">
                    Поиск работы построил вокруг местоположения
                </p>
            </div>
            <div className="px-3 lg:px-0">
                <p className="text-[16px] leading-[24px] [@media(min-height:850px)]:lg:text-[18px] [@media(min-height:850px)]:lg:leading-[28px] text-gray-500">
                    Для временной работы расстояние влияет на решение вместе с оплатой и графиком. Поэтому вакансии можно смотреть на карте и в списке.
                </p>
            </div>
        </div>
        
        {/* Сетка для процесса: на мобильных и ноутбуках в столбик, на больших в строку */}
        <div className="grid  lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-4 lg:gap-x-4 mt-10 items-center">
            <div className="flex justify-center w-full max-w-[280px] lg:max-w-none lg:w-full mx-auto p-6 [@media(min-height:850px)]:lg:p-8 border-[1px] border-[#C8CEFC] rounded-3xl">
                <p className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[24px] text-[#212967] font-semibold text-center">
                    Где работать?
                </p>
            </div>
            <Image
                src="/icons/arrow-right.svg"
                alt=""
                width={24}
                height={24}
                className="mx-auto rotate-90 lg:rotate-0 opacity-40 lg:opacity-100 shrink-0"
            />
            <div className="flex justify-center w-full max-w-[280px] lg:max-w-none lg:w-full mx-auto p-6 [@media(min-height:850px)]:lg:p-8 border-[1px] border-[#C8CEFC] rounded-3xl">
                <p className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[24px] text-[#212967] font-semibold text-center">
                    Сколько платят?
                </p>
            </div>
            <Image
                src="/icons/arrow-right.svg"
                alt=""
                width={24}
                height={24}
                className="mx-auto rotate-90 lg:rotate-0 opacity-40 lg:opacity-100 shrink-0"
            />
            <div className="flex justify-center w-full max-w-[280px] lg:max-w-none lg:w-full mx-auto p-6 [@media(min-height:850px)]:lg:p-8 border-[1px] border-[#C8CEFC] rounded-3xl">
                <p className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[24px] text-[#212967] font-semibold text-center">
                    Подходит ли смена?
                </p>
            </div>
            <Image
                src="/icons/arrow-right.svg"
                alt=""
                width={24}
                height={24}
                className="mx-auto rotate-90 lg:rotate-0 opacity-40 lg:opacity-100 shrink-0"
            />
            <div className="flex justify-center w-full max-w-[280px] lg:max-w-none lg:w-full mx-auto p-6 [@media(min-height:850px)]:lg:p-8 bg-[#EDEFFE] rounded-3xl">
                <p className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[24px] text-[#212967] font-semibold text-center">
                    Где работать?
                </p>
            </div>
        </div>
      </div>
      
      <Image
        src="/images/workwave/workwave-geosearch1.png"
        width={1920}
        height={800}
        alt=""
        className="w-full h-auto mt-10"
      />
    </section>
  );
}