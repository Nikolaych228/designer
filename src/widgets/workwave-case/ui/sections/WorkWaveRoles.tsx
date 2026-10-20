import Image from "next/image";
import type {
  ComponentPropsWithoutRef,
} from "react";

type WorkWaveAboutProps =
  ComponentPropsWithoutRef<"section">;

export function WorkWaveRoles({
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
        <div className="[@media(min-height:850px)]:lg:max-w-[740px] max-w-[600px] px-3 lg:px-3">
            <p className="text-[12px] leading-[16px] text-[#7181F8]">
                две роли
            </p>
            <p className="text-[32px] leading-[38px] [@media(min-height:850px)]:lg:text-[40px] [@media(min-height:850px)]:lg:leading-[48px] text-gray-900 font-semibold">
                Экран нельзя проектировать отдельно от состояния второй роли
            </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10 lg:gap-y-0 mt-6 lg:mt-10">
            <div>
                <div className="p-3 mb-2 lg:mt-0">
                    <p className="text-[16px] leading-[24px] [@media(min-height:850px)]:lg:text-[18px] [@media(min-height:850px)]:lg:leading-[28px] text-gray-500">
                        <span className="font-bold">Соискатель</span> ищет работу, фильтрует предложения, изучает условия и записывается на смену
                    </p>
                </div>
                <Image
                    src="/images/workwave/workwave-roles1.png"
                    alt=""
                    width={658}
                    height={668}
                    className="w-full h-auto object-contain rounded-2xl"
                />
            </div>
            <div>
                <div className="p-3 mb-2 lg:mt-0">
                    <p className="text-[16px] leading-[24px] [@media(min-height:850px)]:lg:text-[18px] [@media(min-height:850px)]:lg:leading-[28px] text-gray-500">
                        <span className="font-bold">Работодатель</span> создаёт точки и вакансии, управляет откликами, сотрудниками и сменами
                    </p>
                </div>
                <Image
                    src="/images/workwave/workwave-roles2.png"
                    alt=""
                    width={658}
                    height={668}
                    className="w-full h-auto object-contain rounded-2xl"
                />
            </div>
        </div>
        
        <div className="p-6 [@media(min-height:850px)]:lg:p-8 mt-8 [@media(min-height:850px)]:lg:mt-10 bg-[#EDEFFE] rounded-3xl mx-3 lg:mx-0">
            <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] font-semibold leading-[28px] text-[#212967]">
                Одно действие должно корректно менять состояние продукта для другой стороны
            </p>
        </div>
      </div>
    </section>
  );
}