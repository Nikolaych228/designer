import Image from "next/image";
import type {
  ComponentPropsWithoutRef,
} from "react";
import { imgPath } from "@/lib/utils"; // 👈 Добавили импорт утилиты

type WorkWaveAboutProps =
  ComponentPropsWithoutRef<"section">;

export function WorkWaveProblem({
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
        <div className="[@media(min-height:850px)]:max-w-[646px] max-w-[520px] px-3 lg:px-3">
            <p className="text-[12px] leading-[16px] text-[#7181F8]">
                проблема
            </p>
            <p className="text-[32px] leading-[38px] [@media(min-height:850px)]:lg:text-[40px] [@media(min-height:850px)]:lg:leading-[48px] text-gray-900 font-semibold">
                Основные экраны показывали идею, но не описывали продукт между ними 
            </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-5 lg:mt-10 gap-y-10 lg:gap-y-0 gap-x-10">
            <div className="">
                <div className="px-3 lg:px-0">
                    <p className="text-[16px] leading-[24px] [@media(min-height:850px)]:lg:text-[18px] [@media(min-height:850px)]:lg:leading-[28px] text-[#6D717F]">
                        На старте было около десяти ключевых экранов. Их хватало, чтобы показать концепцию. Для реального сценария — нет.
                    </p>
                    <p className="text-[16px] leading-[24px] [@media(min-height:850px)]:lg:text-[18px] [@media(min-height:850px)]:lg:leading-[28px] mt-4 text-[#6D717F]">
                        Когда я начала связывать экраны, появились вопросы:
                    </p>
                    <ul className="list-disc space-y-2 lg:space-y-4 pl-7 mt-4 text-[16px] leading-[24px] [@media(min-height:850px)]:lg:text-[18px] [@media(min-height:850px)]:lg:leading-[28px] text-[#6D717F]">
                        <li>Что пользователь видит до действия?</li>
                        <li>Что происходит после него?</li>
                        <li>Что происходит у второй роли?</li>
                        <li>Что делать при отмене, неявке или отсутствии данных?</li>
                    </ul>
                </div>
                <div className="p-6 [@media(min-height:850px)]:lg:p-8 mt-8 [@media(min-height:850px)]:lg:mt-10 bg-[#EDEFFE] rounded-3xl">
                    <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] font-semibold leading-[28px] text-[#212967]">
                        Happy path оказался слишком коротким для реального продукта
                    </p>
                </div>
            </div>
            <div className="bg-[#F9FAFB] rounded-2xl flex flex-col gap-3 lg:gap-5 p-3 lg:p-5">
                <div className="p-4 [@media(min-height:850px)]:lg:p-5 rounded-2xl bg-[#fff]">
                    <p className="text-[16px] [@media(min-height:850px)]:lg:text-[18px] mb-3 lg:mb-4 leading-[28px] text-[#9EA2AE]">
                        Ключевая цепочка
                    </p>
                    <div className="flex flex-wrap items-center gap-2 lg:gap-x-[8px]">
                        <div className="py-2.5 px-3.5 [@media(min-height:850px)]:lg:py-3 lg:px-4 border-[1px] border-[#C8CEFC] rounded-full">
                            <p className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] font-semibold leading-[24px] text-[#212967]">
                                Регистрация / Авторизация
                            </p>
                        </div>
                        <Image
                            src={imgPath("/icons/arrow-right.svg")} // 👈 ИСПРАВЛЕНО
                            alt=""
                            width={24}
                            height={24}
                            className="hidden sm:block"
                        />
                        <div className="py-2.5 px-3.5 [@media(min-height:850px)]:lg:py-3 lg:px-4 border-[1px] border-[#C8CEFC] rounded-full">
                            <p className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] font-semibold leading-[24px] text-[#212967]">
                                Поиск
                            </p>
                        </div>
                        <Image
                            src={imgPath("/icons/arrow-right.svg")} // 👈 ИСПРАВЛЕНО
                            alt=""
                            width={24}
                            height={24}
                            className="hidden sm:block"
                        />
                        <div className="py-2.5 px-3.5 [@media(min-height:850px)]:lg:py-3 lg:px-4 border-[1px] border-[#C8CEFC] rounded-full">
                            <p className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] font-semibold leading-[24px] text-[#212967]">
                                Вакансия
                            </p>
                        </div>
                        <Image
                            src={imgPath("/icons/arrow-right.svg")} // 👈 ИСПРАВЛЕНО
                            alt=""
                            width={24}
                            height={24}
                            className="hidden sm:block"
                        />
                        <div className="py-2.5 px-3.5 [@media(min-height:850px)]:lg:py-3 lg:px-4 border-[1px] border-[#C8CEFC] rounded-full">
                            <p className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] font-semibold leading-[24px] text-[#212967]">
                                Cмена
                            </p>
                        </div>
                    </div>
                </div>
                <div className="rounded-2xl p-4 [@media(min-height:850px)]:lg:p-5 bg-[#fff]">
                    <p className="text-[16px] [@media(min-height:850px)]:lg:text-[18px] mb-3 lg:mb-4 leading-[28px] text-[#9EA2AE]">
                        Состояния вокруг
                    </p>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-wrap items-center gap-2 lg:gap-x-[12px]">
                            <div className="py-2.5 px-3.5 [@media(min-height:850px)]:lg:py-3 lg:px-4 bg-[#EDEFFE] rounded-full">
                                <p className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] font-semibold leading-[24px] text-[#212967]">
                                    Выбор роли
                                </p>
                            </div>
                            <div className="py-2.5 px-3.5 [@media(min-height:850px)]:lg:py-3 lg:px-4 bg-[#EDEFFE] rounded-full">
                                <p className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] font-semibold leading-[24px] text-[#212967]">
                                    Стажировка
                                </p>
                            </div>
                            <div className="py-2.5 px-3.5 [@media(min-height:850px)]:lg:py-3 lg:px-4 bg-[#EDEFFE] rounded-full">
                                <p className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] font-semibold leading-[24px] text-[#212967]">
                                    Нет смен
                                </p>
                            </div>
                            <div className="py-2.5 px-3.5 [@media(min-height:850px)]:lg:py-3 lg:px-4 bg-[#EDEFFE] rounded-full">
                                <p className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] font-semibold leading-[24px] text-[#212967]">
                                    Отмена
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-nowrap items-center gap-2 lg:gap-x-[12px]">
                            <div className="py-2.5 px-3.5 [@media(min-height:850px)]:lg:py-3 lg:px-4 bg-[#EDEFFE] rounded-full">
                                <p className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] font-semibold leading-[24px] text-[#212967]">
                                    Неявка
                                </p>
                            </div>
                            <div className="py-2.5 px-3.5 [@media(min-height:850px)]:lg:py-3 lg:px-4 bg-[#EDEFFE] rounded-full">
                                <p className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] font-semibold leading-[24px] text-[#212967]">
                                    Выплата
                                </p>
                            </div>
                            <div className="py-2.5 px-3.5 [@media(min-height:850px)]:lg:py-3 lg:px-4 bg-[#EDEFFE] rounded-full">
                                <p className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] font-semibold leading-[24px] text-[#212967]">
                                    Отзыв
                                </p>
                            </div>
                            <div className="py-2.5 px-3.5 [@media(min-height:850px)]:lg:py-3 lg:px-4 bg-[#EDEFFE] rounded-full">
                                <p className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] font-semibold leading-[24px] min-w-[180px] text-[#212967]">
                                    Состояние работодателя
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}