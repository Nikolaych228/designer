import Image from "next/image";
import type {
  ComponentPropsWithoutRef,
} from "react";
import { imgPath } from "@/lib/utils"; // 👈 Добавили импорт утилиты

type WorkWaveAboutProps =
  ComponentPropsWithoutRef<"section">;

export function TentaContext({
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
                контекст
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6 items-start mt-3">
                <p className="text-[32px] leading-[38px] [@media(min-height:850px)]:lg:text-[40px] [@media(min-height:850px)]:lg:leading-[48px] text-gray-900 font-semibold">
                    Управление оборудованием уже работало. Интерфейс - нет
                </p>
                <p className="text-[16px] leading-[24px] [@media(min-height:850px)]:lg:text-[18px] [@media(min-height:850px)]:lg:leading-[28px] text-gray-500">
                    Мобильное приложение управляло вентиляцией, охлаждением и датчиками на складах. Интерфейс развивался вместе с оборудованием и постепенно стал сложным для пользователей
                </p>
            </div>  
        </div>
        <Image
            src={imgPath("/images/tenta/tenta-context.png")} // 👈 ИСПРАВЛЕНО
            alt=""
            width={1356}
            height={0}
            className="mt-10 w-full h-auto px-3 lg:px-0"
        />
      </div>
    </section>
  );
}