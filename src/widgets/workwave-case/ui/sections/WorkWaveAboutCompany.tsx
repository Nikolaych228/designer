import Image from "next/image";
import type {
  ComponentPropsWithoutRef,
} from "react";

type WorkWaveAboutProps =
  ComponentPropsWithoutRef<"section">;

export function WorkWaveAboutCompany({
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
            <p className="text-[12px] pl-3 text-[#7181F8]">
                о компании
            </p>
            
            <div className="grid px-3 mb-16 [@media(min-height:850px)]:lg:mb-25 grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6">
              <div>
                <p className="text-[32px] leading-[38px] [@media(min-height:850px)]:lg:text-[40px] [@media(min-height:850px)]:lg:leading-[48px] text-gray-900 font-semibold">
                    WorkWave – сервис для поиска временной работы
                </p>
              </div>
                <p className="text-[16px] leading-[24px] [@media(min-height:850px)]:lg:text-[18px] [@media(min-height:850px)]:lg:leading-[28px] text-gray-500">
                    Предприниматели из Самары запускали мобильный сервис для временной занятости.<br/>
                    Соискатель должен был находить подходящую смену рядом.<br/>
                    Работодатель – размещать вакансии, управлять рабочими точками, сотрудниками и откликами.<br/>
                    Первая версия нужна была для запуска продукта и демонстрации потенциальным спонсорам.<br/>
                </p>
            </div>
        </div>
        
        <Image
            src="/images/workwave/workwave-about.svg"
            alt=""
            width={1920}
            height={840}
            className="w-full h-auto"
        />
    </section>
  );
}