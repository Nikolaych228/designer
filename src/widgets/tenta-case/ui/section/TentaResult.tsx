import type {
  ComponentPropsWithoutRef,
} from "react";

type WorkWaveAboutProps =
  ComponentPropsWithoutRef<"section">;

export function TentaResult({
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
        <div className="px-3 lg:px-3 max-w-[720px]">
            <p className="text-[12px] leading-[16px] text-[#7181F8]">
                результат
            </p>
            <p className="text-[32px] leading-[38px] [@media(min-height:850px)]:lg:text-[40px] [@media(min-height:850px)]:lg:leading-[48px] text-gray-900 font-semibold">
                Сложную систему управления собрала в понятную структуру состояний
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-x-3 mt-8 [@media(min-height:850px)]:lg:mt-5 px-3 lg:px-0">
            <div className="p-6 [@media(min-height:850px)]:lg:p-8 border-[1px] border-[#8895F9] rounded-3xl flex flex-col justify-between">
                <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] text-[#212967] leading-[28px] font-semibold">
                    Структура
                </p>
                <p className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[24px] text-gray-500 mt-3 [@media(min-height:850px)]:lg:mt-4">
                    Разделила мониторинг, диагностику и управление
                </p>
            </div>
            <div className="p-6 [@media(min-height:850px)]:lg:p-8 border-[1px] border-[#8895F9] rounded-3xl flex flex-col justify-between">
                <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] text-[#212967] leading-[28px] font-semibold">
                    Состояния
                </p>
                <p className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[24px] text-gray-500 mt-3 [@media(min-height:850px)]:lg:mt-4">
                    Собрала общую логику normal, warning, alarm, fault и no data
                </p>
            </div>
            <div className="p-6 [@media(min-height:850px)]:lg:p-8 border-[1px] border-[#8895F9] rounded-3xl flex flex-col justify-between">
                <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] text-[#212967] leading-[28px] font-semibold">
                    Масштабирование
                </p>
                <p className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[24px] text-gray-500 mt-3 [@media(min-height:850px)]:lg:mt-4">
                    Одинаковые правила работают для разных типов складов и оборудования
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}