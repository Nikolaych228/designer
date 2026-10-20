import Image from "next/image";
import type {
  ComponentPropsWithoutRef,
} from "react";

type WorkWaveAboutProps =
  ComponentPropsWithoutRef<"section">;

export function TentaOutsideInterface({
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
            вне интерфейса
        </p>
        
        <div className="grid lg:grid-cols-2 px-3 lg:px-3 gap-x-10 gap-y-6 mt-3">       
            <div>
                <p className="text-[32px] leading-[38px] [@media(min-height:850px)]:lg:text-[40px] [@media(min-height:850px)]:lg:leading-[48px] text-gray-900 font-semibold">
                    Поддержала продукт и за пределами цифровых интерфейсов
                </p>
            </div>
            <div className="">
                <p className="text-[16px] leading-[24px] [@media(min-height:850px)]:lg:text-[18px] [@media(min-height:850px)]:lg:leading-[28px] text-gray-500">
                    Помимо мобильного приложения и терминала, работала с полиграфией Tenta. Переносила визуальный язык продукта в материалы для офлайн-коммуникации
                </p>
            </div>   
        </div>
        
        <div className="grid md:grid-cols-2 mt-8 [@media(min-height:850px)]:lg:mt-10 gap-4 lg:gap-x-10 px-3 lg:px-0">
            <div className="p-3 border-[1px] border-[#E6E6E6] rounded-[32px] flex flex-col justify-between">
                <Image
                    src="/images/tenta/tenta-outsideInterface1.png"
                    alt=""
                    width={640}
                    height={0}
                    className="w-full h-auto rounded-2xl"
                />
                <div className="p-3 mt-2">
                    <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] leading-[28px] font-semibold text-gray-900">
                        Памятка по управлению системой
                    </p>
                    <p className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[24px] text-gray-400 mt-2 lg:mt-3">
                        Краткая инструкция по основным сценариям работы с оборудованием
                    </p>
                </div>
            </div>
            
            <div className="p-3 border-[1px] border-[#E6E6E6] rounded-[32px] flex flex-col justify-between">
                <Image
                    src="/images/tenta/tenta-outsideInterface2.png"
                    alt=""
                    width={640}
                    height={0}
                    className="w-full h-auto rounded-2xl"
                />
                <div className="p-3 mt-2">
                    <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] leading-[28px] font-semibold text-gray-900">
                        Роллапы для выставки
                    </p>
                    <p className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[24px] text-gray-400 mt-2 lg:mt-3">
                        Материалы для выставок и презентаций продукта
                    </p>
                </div>
            </div>
        </div>
            
        <div className="p-3 mt-6 [@media(min-height:850px)]:lg:mt-10 border-[1px] border-[#E6E6E6] rounded-[32px] mx-3 lg:mx-0">
            <Image
                src="/images/tenta/tenta-outsideInterface3.png"
                alt=""
                width={1330}
                height={0}
                className="w-full h-auto rounded-2xl"
            />
            <div className="p-3 mt-2">
                <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] leading-[28px] font-semibold text-gray-900">
                    Продуктовый каталог
                </p>
                <p className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[24px] text-gray-400 mt-2 lg:mt-3">
                    Структурировала продукты, характеристики и сценарии применения в едином печатном материале
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}