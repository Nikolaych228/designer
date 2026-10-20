import type {
  ComponentPropsWithoutRef,
} from "react";

type WorkWaveAboutProps =
  ComponentPropsWithoutRef<"section">;

export function TentaTask({
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
                    задача
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-x-10 gap-y-6 mt-3">
                    <p className="text-[32px] leading-[38px] [@media(min-height:850px)]:lg:text-[40px] [@media(min-height:850px)]:lg:leading-[48px] text-[#131927] font-semibold">
                        Задача начиналась как редизайн существующего приложения
                    </p>
                    <p className="text-[16px] leading-[24px] [@media(min-height:850px)]:lg:text-[18px] [@media(min-height:850px)]:lg:leading-[28px] text-gray-500">
                        Нужно было обновить мобильный интерфейс и сохранить существующий функционал
                    </p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 mt-8 [@media(min-height:850px)]:lg:mt-10 items-stretch gap-4 lg:gap-x-6 px-3 lg:px-0">
                <div className="p-6 [@media(min-height:850px)]:lg:p-8 border-[1px] h-full border-[#C8CEFC] rounded-3xl flex flex-col justify-start">
                    <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] font-semibold leading-[28px] text-[#212967]">
                        Задача
                    </p>
                    <p className="mt-3 [@media(min-height:850px)]:lg:mt-4 text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[24px] text-gray-500">
                        Пересобрать мобильный интерфейс
                    </p>
                </div>
                <div className="p-6 [@media(min-height:850px)]:lg:p-8 border-[1px] h-full border-[#C8CEFC] rounded-3xl flex flex-col justify-start">
                    <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] font-semibold leading-[28px] text-[#212967]">
                        Ограничение
                    </p>
                    <p className="mt-3 [@media(min-height:850px)]:lg:mt-4 text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[24px] text-gray-500">
                        Не менять существующую логику
                    </p>
                </div>
                <div className="p-6 [@media(min-height:850px)]:lg:p-8 border-[1px] h-full border-[#C8CEFC] rounded-3xl flex flex-col justify-between">
                    <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] font-semibold leading-[28px] text-[#212967]">
                        Среда
                    </p>
                    <p className="mt-3 [@media(min-height:850px)]:lg:mt-4 text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[24px] text-gray-500">
                        Работа с промышленным оборудованием и датчиками
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
}