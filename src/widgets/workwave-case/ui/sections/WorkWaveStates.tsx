import Image from "next/image";
import type {
  ComponentPropsWithoutRef,
} from "react";

type WorkWaveAboutProps =
  ComponentPropsWithoutRef<"section">;

export function WorkWaveStates({
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
            состояния
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 px-3 gap-x-10 gap-y-6">    
            <div className="">
                <p className="text-[32px] leading-[38px] [@media(min-height:850px)]:lg:text-[40px] [@media(min-height:850px)]:lg:leading-[48px] text-gray-900 font-semibold">
                    Сценарий не заканчивается экраном success
                </p>
            </div>
            <div className="">
                <p className="text-[16px] leading-[24px] [@media(min-height:850px)]:lg:text-[18px] [@media(min-height:850px)]:lg:leading-[28px] text-gray-500">
                    Первая версия flow заканчивалась слишком рано. После бронирования у продукта остаются новые состояния.
                </p>
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 lg:mt-10 gap-5">
            <div className="flex flex-col gap-5">
                <div className="p-3 border-[1px] border-[#E6E6E6] rounded-[32px]">
                    <Image
                        src="/images/workwave/workwave-states1.png"
                        alt=""
                        width={640}
                        height={0}
                        className="w-full h-auto rounded-2xl"
                    />
                    <div className="p-3 [@media(min-height:850px)]:lg:p-4">
                        <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] leading-[28px] font-semibold text-gray-900">
                            Отмена
                        </p>
                        <p className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[24px] text-gray-400 mt-2 lg:mt-3">
                            Пользователь отказывается от смены
                        </p>
                    </div>
                </div>
                <div className="p-3 border-[1px] border-[#E6E6E6] rounded-[32px]">
                    <Image
                        src="/images/workwave/workwave-states2.png"
                        alt=""
                        width={640}
                        height={0}
                        className="w-full h-auto rounded-2xl"
                    />
                    <div className="p-3 [@media(min-height:850px)]:lg:p-4">
                        <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] leading-[28px] font-semibold text-gray-900">
                            Выплата
                        </p>
                        <p className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[24px] text-gray-400 mt-2 lg:mt-3">
                            После завершения смены появляется начисление и история вывода
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="p-3 border-[1px] border-[#E6E6E6] rounded-[32px]">
                    <Image
                        src="/images/workwave/workwave-states3.png"
                        alt=""
                        width={640}
                        height={0}
                        className="w-full h-auto rounded-2xl"
                    />
                    <div className="p-3 [@media(min-height:850px)]:lg:p-4">
                        <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] leading-[28px] font-semibold text-gray-900">
                            Неявка
                        </p>
                        <p className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[24px] text-gray-400 mt-2 lg:mt-3">
                            Работодатель фиксирует, что сотрудник не пришёл
                        </p>
                    </div>
                </div>
                <div className="p-3 border-[1px] border-[#E6E6E6] rounded-[32px]">
                    <Image
                        src="/images/workwave/workwave-states4.png"
                        alt=""
                        width={640}
                        height={0}
                        className="w-full h-auto rounded-2xl"
                    />
                    <div className="p-3 [@media(min-height:850px)]:lg:p-4">
                        <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] leading-[28px] font-semibold text-gray-900">
                            Отзыв
                        </p>
                        <p className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[24px] text-gray-400 mt-2 lg:mt-3">
                            После завершения смены работодатель может оценить сотрудника
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="p-6 [@media(min-height:850px)]:lg:p-8 mt-8 [@media(min-height:850px)]:lg:mt-10 bg-[#EDEFFE] rounded-3xl mx-3 lg:mx-0">
            <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] font-semibold leading-[28px] text-[#212967]">
                Эти состояния влияют сразу на соискателя, работодателя и историю взаимодействия
            </p>
        </div>
      </div>
    </section>
  );
}