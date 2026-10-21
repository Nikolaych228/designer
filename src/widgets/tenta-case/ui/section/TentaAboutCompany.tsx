import Image from "next/image";
import type {
  ComponentPropsWithoutRef,
} from "react";
import { imgPath } from "@/lib/utils"; // 👈 Добавили импорт утилиты

type WorkWaveAboutProps =
  ComponentPropsWithoutRef<"section">;

export function TentaAboutCompany({
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
        <div className="pt-25 lg:pl-[300px] lg:pr-[100px] [@media(min-height:850px)]:lg:pl-[404px] [@media(min-height:850px)]:lg:pr-[160px] grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10 mb-16 [@media(min-height:850px)]:lg:mb-25">
            <div>
                <div className="px-3 lg:px-3">
                    <p className="text-[12px] leading-[16px] text-[#7181F8]">
                        о компании
                    </p>
                    <p className="text-[32px] leading-[38px] [@media(min-height:850px)]:lg:text-[40px] [@media(min-height:850px)]:lg:leading-[48px] text-gray-900 font-semibold">
                        Тента - автоматизация микроклимата для хранения урожая
                    </p>
                    <p className="text-[16px] leading-[24px] [@media(min-height:850px)]:lg:text-[18px] [@media(min-height:850px)]:lg:leading-[28px] mt-6 [@media(min-height:850px)]:lg:mt-10 text-gray-500">
                        Компания проектирует и производит оборудование для овощехранилищ. Система помогает управлять вентиляцией, влажностью и охлаждением.
                        <br/>
                        <br/>
                        Мобильное приложение переносит управление оборудованием в интерфейс. Пользователь следит за состоянием складов и меняет режимы удалённо
                    </p>
                </div>
            </div>
            <div className="px-3 lg:px-0 flex items-center">
                <Image
                    src={imgPath("/images/tenta/tenta-aboutCompany.png")} // 👈 ИСПРАВЛЕНО
                    alt=""
                    width={646}
                    height={624}
                    className="w-full h-auto object-contain rounded-3xl"
                />
            </div>
        </div>
    </section>
  );
}