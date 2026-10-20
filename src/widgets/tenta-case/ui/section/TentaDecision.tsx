import Image from "next/image";
import type {
  ComponentPropsWithoutRef,
} from "react";

type WorkWaveAboutProps =
  ComponentPropsWithoutRef<"section">;

export function TentaDecision({
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
        <p className="text-[12px] pl-3 leading-[16px] text-[#7181F8]">
            решение
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 px-3 lg:px-3 gap-x-10 gap-y-6">       
            <div>
                <p className="text-[32px] leading-[38px] [@media(min-height:850px)]:lg:text-[40px] [@media(min-height:850px)]:lg:leading-[48px] text-gray-900 font-semibold">
                    Состояние склада стало отправной точкой каждого экрана
                </p>
            </div>
            <div className="">
                <p className="text-[16px] leading-[24px] [@media(min-height:850px)]:lg:text-[18px] [@media(min-height:850px)]:lg:leading-[28px] text-gray-500">
                    Критичные состояния подняла наверх. Параметры оставила для диагностики, управление - рядом с конкретным оборудованием
                </p>
            </div>   
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-x-5 mt-8 [@media(min-height:850px)]:lg:mt-5 px-3 lg:px-0">
            <div>
                <Image
                    src="/images/tenta/tenta-decision1.png"
                    alt=""
                    height={700}
                    width={440}
                    className="w-full h-auto rounded-2xl"
                />
                <div className="p-6 [@media(min-height:850px)]:lg:p-8 mt-3 border-[1px] border-[#C8CEFC] rounded-3xl">
                    <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] font-semibold leading-[28px] text-[#212967]">
                        Ключевые параметры собраны вместе
                    </p>
                </div>
            </div>
            <div>
                <Image
                    src="/images/tenta/tenta-decision2.png"
                    alt=""
                    height={700}
                    width={440}
                    className="w-full h-auto rounded-2xl"
                />
                <div className="p-6 [@media(min-height:850px)]:lg:p-8 mt-3 border-[1px] border-[#C8CEFC] rounded-3xl">
                    <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] font-semibold leading-[28px] text-[#212967]">
                        Авария и состояния объектов видны сразу
                    </p>
                </div>
            </div>
            <div>
                <Image
                    src="/images/tenta/tenta-decision3.png"
                    alt=""
                    height={700}
                    width={440}
                    className="w-full h-auto rounded-2xl"
                />
                <div className="p-6 [@media(min-height:850px)]:lg:p-8 mt-3 border-[1px] border-[#C8CEFC] rounded-3xl">
                    <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] font-semibold leading-[28px] text-[#212967]">
                        Управление находится рядом с объектом
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}