import Image from "next/image";
import type {
  ComponentPropsWithoutRef,
} from "react";

type WorkWaveAboutProps =
  ComponentPropsWithoutRef<"section">;

export function TentaFeedBack({
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
            <div className="px-3 lg:px-3">
                <p className="text-[12px] leading-[16px] text-[#7181F8]">
                    фидбэк
                </p>
                <div className="grid lg:grid-cols-2 items-start gap-x-10 gap-y-6 mt-3">
                    <p className="text-[32px] leading-[38px] [@media(min-height:850px)]:lg:text-[40px] [@media(min-height:850px)]:lg:leading-[48px] text-[#131927] font-semibold">
                        Пользователи не понимали, что происходит с оборудованием
                    </p>
                    <p className="text-[16px] leading-[24px] [@media(min-height:850px)]:lg:text-[18px] [@media(min-height:850px)]:lg:leading-[28px] text-gray-500">
                        Команда получала обратную связь от пользователей: приложение было сложно читать без глубокого знания оборудования.<br/>Самыми проблемными оказались экраны холодильной централи. В них было трудно понять состояние системы и следующий шаг
                    </p>
                </div> 
            </div>
            
            <div className="grid lg:grid-cols-2 mt-8 [@media(min-height:850px)]:lg:mt-10 items-start gap-5 lg:gap-x-5 px-3 lg:px-0">
                <div className="flex flex-col gap-4 lg:gap-5">
                    <div className="p-6 [@media(min-height:850px)]:lg:p-8 bg-[#fff] rounded-3xl">
                        <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] font-semibold leading-[28px] text-[#212967]">
                            Состояние терялось среди параметров
                        </p>
                        <p className="mt-3 [@media(min-height:850px)]:lg:mt-4 text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[24px] text-gray-500">
                            Пользователь видел значения, но не понимал, требуют ли они реакции
                        </p>
                    </div>
                    <div className="p-6 [@media(min-height:850px)]:lg:p-8 bg-[#fff] rounded-3xl">
                        <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] font-semibold leading-[28px] text-[#212967]">
                            Сложно было найти причину проблемы
                        </p>
                        <p className="mt-3 [@media(min-height:850px)]:lg:mt-4 text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[24px] text-gray-500">
                            Чтобы разобраться в аварии, приходилось переходить между несколькими экранами
                        </p>
                    </div>
                    <div className="p-6 [@media(min-height:850px)]:lg:p-8 bg-[#fff] rounded-3xl">
                        <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] font-semibold leading-[28px] text-[#212967]">
                            Централь требовала знания устройства системы
                        </p>
                        <p className="mt-3 [@media(min-height:850px)]:lg:mt-4 text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[24px] text-gray-500">
                            Интерфейс повторял устройство оборудования, а не задачу пользователя
                        </p>
                    </div>
                </div>
                
                
                    <Image
                        src="/images/tenta/tenta-feedback.png"
                        alt=""
                        width={668}
                        height={0}
                        className="w-full h-full rounded-3xl"
                    />
                
            </div>
        </div>
    </section>
  );
}