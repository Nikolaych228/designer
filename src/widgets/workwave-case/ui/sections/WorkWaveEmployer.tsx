import Image from "next/image";
import type {
  ComponentPropsWithoutRef,
} from "react";

type WorkWaveAboutProps =
  ComponentPropsWithoutRef<"section">;

export function WorkWaveEmployer({
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
      <div className="flex flex-col lg:flex-row py-25 lg:pl-[300px] lg:pr-[100px] [@media(min-height:850px)]:lg:pl-[404px] [@media(min-height:850px)]:lg:pr-[160px] gap-y-10 lg:gap-y-0">
        <div className="flex flex-col justify-between w-full lg:w-auto">
            <div className="px-3">
                <p className="text-[12px] leading-[16px] text-[#7181F8]">
                    команда
                </p>
                <p className="text-[32px] leading-[38px] [@media(min-height:850px)]:lg:text-[40px] [@media(min-height:850px)]:lg:leading-[48px] text-gray-900 font-semibold">
                    Прошла отбор среди дизайнеров и присоединилась к команде разработки WorkWave 
                </p>
            </div>
            
            <div className="grid md:grid-cols-3 [@media(min-height:850px)]:lg:gap-4 [@media(min-height:850px)]:lg:mr-3 gap-3 mt-10">
                <div className="py-6 px-6 [@media(min-height:850px)]:lg:py-8 bg-[#fff] rounded-3xl">
                    <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] font-semibold leading-[28px] text-[#212967]">
                        Back-end разработчик
                    </p>
                    <p className="mt-3 [@media(min-height:850px)]:lg:mt-4 text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[24px] text-gray-500">
                        Серверная логика, база данных, API и взаимодействие ролей
                    </p>
                </div>
                <div className="py-6 px-6 [@media(min-height:850px)]:lg:py-8 bg-[#212967] rounded-3xl">
                    <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] font-semibold leading-[28px] text-[#fff]">
                        UX/UI дизайнер 
                    </p>
                    <p className="mt-3 [@media(min-height:850px)]:lg:mt-4 text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[24px] text-white">
                        Продуктовая логика, пользовательские сценарии, состояния и интерфейс
                    </p>
                </div>
                <div className="py-6 px-6 [@media(min-height:850px)]:lg:py-8 bg-[#fff] rounded-3xl">
                    <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] font-semibold leading-[28px] text-[#212967]">
                        Front-end разработчик
                    </p>
                    <p className="mt-3 [@media(min-height:850px)]:lg:mt-4 text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[24px] text-gray-500">
                        Реализация мобильного интерфейса, экранов и архитектуры
                    </p>
                </div>
            </div>
        </div>
        <div className="w-full flex justify-center items-center">
            <Image
                src="/images/workwave/workwave-team.png"
                alt=""
                width={528}
                height={528}
                className="w-full max-w-[400px] [@media(min-height:850px)]:lg:max-w-[528px] h-auto object-contain rounded-3xl"
            />
        </div>
      </div>
    </section>
  );
}