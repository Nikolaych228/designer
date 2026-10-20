import Image from "next/image";
import type {
  ComponentPropsWithoutRef,
} from "react";

type WorkWaveAboutProps =
  ComponentPropsWithoutRef<"section">;

export function WorkWaveTask({
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
      <div className="py-25 lg:pl-[300px] lg:pr-[100px] [@media(min-height:850px)]:lg:pl-[404px] [@media(min-height:850px)]:lg:pr-[160px] grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10">
        <div>
            <div className="px-3">
                <p className="text-[12px] leading-[16px] text-[#7181F8]">
                    задача
                </p>
                <p className="text-[32px] leading-[38px] [@media(min-height:850px)]:lg:text-[40px] [@media(min-height:850px)]:lg:leading-[48px] text-gray-900 font-semibold">
                    Запустить MVP, который можно показать спонсорам и развивать дальше
                </p>
                <p className="text-[16px] leading-[24px] [@media(min-height:850px)]:lg:text-[18px] [@media(min-height:850px)]:lg:leading-[28px] mt-6 [@media(min-height:850px)]:lg:mt-10 text-gray-500">
                    Нужно было собрать работающий первый продукт для двух сторон сервиса, передать его разработчикам и довести до релиза.<br/>
                    <br/>
                    <span className="font-bold">Для пользователя</span> продукт должен был сокращать путь от «хочу найти подработку» до подходящей смены рядом.<br/>
                    <span className="font-bold">Для работодателя</span> — давать возможность размещать вакансии, управлять рабочими точками, сменами и откликами в том же продукте.<br/>
                </p>
            </div>
            <div className="p-6 [@media(min-height:850px)]:lg:p-8 mt-8 [@media(min-height:850px)]:lg:mt-10 bg-[#EDEFFE] rounded-3xl">
                <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] font-semibold leading-[28px] text-[#212967]">
                    Главный вызов
                </p>
                <p className="mt-3 [@media(min-height:850px)]:lg:mt-4 text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[24px] text-gray-500">
                    Превратить короткое описание основных экранов в связанную систему, которой могут одновременно пользоваться две стороны продукта
                </p>
            </div>
        </div>
        <div className="flex items-center justify-center">
            <Image
                src="/images/workwave/workwave-task.png"
                alt=""
                width={658}
                height={624}
                className="w-full h-full  rounded-3xl"
            />
        </div>
      </div>
    </section>
  );
}