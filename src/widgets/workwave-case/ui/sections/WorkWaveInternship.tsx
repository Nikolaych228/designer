import Image from "next/image";
import type {
  ComponentPropsWithoutRef,
} from "react";

type WorkWaveAboutProps =
  ComponentPropsWithoutRef<"section">;

export function WorkWaveIneternship({
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6 items-center">
            <div className="px-3 lg:px-3">
                <p className="text-[12px] leading-[16px] text-[#7181F8]">
                    стажировка
                </p>
                <p className="text-[32px] leading-[38px] [@media(min-height:850px)]:lg:text-[40px] [@media(min-height:850px)]:lg:leading-[48px] text-gray-900 font-semibold">
                    Первое бронирование оказалось отдельным состоянием пользователя
                </p>
            </div>
            <div className="px-3 lg:px-3">
                <p className="text-[16px] leading-[24px] [@media(min-height:850px)]:lg:text-[18px] [@media(min-height:850px)]:lg:leading-[28px] text-gray-500">
                    Обычный сценарий бронирования нельзя было открывать всем сразу. Новый пользователь сначала записывается на стажировочную смену. После её прохождения становится доступно самостоятельное бронирование.
                </p>
            </div>
        </div>
        
        {/* Сетка: 1 колонка на телефонах, 3 колонки на планшетах/десктопе */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-x-5 mt-6 lg:mt-10">
            <div>
                <Image
                    src="/images/workwave/workwave-internshipPhone1.png"
                    alt=""
                    height={700}
                    width={440}
                    className="w-full h-auto"
                />
                <div className="p-6 [@media(min-height:850px)]:lg:p-8 mt-4 border-[1px] border-[#C8CEFC] rounded-3xl">
                    <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] font-semibold leading-[28px] text-[#212967]">
                        01. Новичок
                    </p>
                    <p className="mt-3 [@media(min-height:850px)]:lg:mt-4 text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[24px] text-gray-500">
                        Только зарегистрировался
                    </p>
                </div>
            </div>
            <div>
                <Image
                    src="/images/workwave/workwave-internshipPhone2.png"
                    alt=""
                    height={700}
                    width={440}
                    className="w-full h-auto"
                />
                <div className="p-6 [@media(min-height:850px)]:lg:p-8 mt-4 border-[1px] border-[#C8CEFC] rounded-3xl">
                    <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] font-semibold leading-[28px] text-[#212967]">
                        02. Стажировочная смена
                    </p>
                    <p className="mt-3 [@media(min-height:850px)]:lg:mt-4 text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[24px] text-gray-500">
                        Первый выход на работу
                    </p>
                </div>
            </div>
            <div>
                <Image
                    src="/images/workwave/workwave-internshipPhone3.png"
                    alt=""
                    height={700}
                    width={440}
                    className="w-full h-auto"
                />
                <div className="p-6 [@media(min-height:850px)]:lg:p-8 mt-4 border-[1px] border-[#C8CEFC] rounded-3xl">
                    <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] font-semibold leading-[28px] text-[#212967]">
                        03. Бронирование
                    </p>
                    <p className="mt-3 [@media(min-height:850px)]:lg:mt-4 text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[24px] text-gray-500">
                        Доступны обычные смены
                    </p>
                </div>
            </div>
        </div>
      </div>
      
      <Image
        src="/images/workwave/workwave-internshipBg.png"
        alt=""
        width={1920}
        height={0}
        className="w-full h-auto mt-10 lg:mt-0"
      />
    </section>
  );
}