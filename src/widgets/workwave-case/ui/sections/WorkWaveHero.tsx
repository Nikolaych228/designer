import Image from "next/image";
import { imgPath } from "@/lib/utils"; // 👈 Добавили импорт утилиты

export function WorkWaveHero () {
    return (
        <section>
            <Image
                src={imgPath("/images/workwave/workwave-hero.png")} // 👈 ИСПРАВЛЕНО
                alt=""
                width={1920}
                height={840}
            />
            <div className="mt-10 lg:pl-[300px] lg:pr-[100px] [@media(min-height:850px)]:lg:pl-[404px] [@media(min-height:850px)]:lg:pr-[160px]">
                <div className="flex pl-3 gap-x-2">
                    <p className="text-[12px] text-[#7181F8]">
                        B2C + B2B
                    </p>
                    <Image
                        src={imgPath("/icons/starPrimary.svg")} // 👈 ИСПРАВЛЕНО
                        alt=""
                        width={8}
                        height={8}
                    />
                    <p className="text-[12px] text-[#7181F8]">
                        Marketplace
                    </p>
                    <Image
                        src={imgPath("/icons/starPrimary.svg")} // 👈 ИСПРАВЛЕНО
                        alt=""
                        width={8}
                        height={8}
                    />
                    <p className="text-[12px] text-[#7181F8]">
                        Released MVP
                    </p>
                </div>
                <div className="grid grid-cols-2 items-center my-10 gap-x-10 px-3">
                    <p className="[@media(min-height:850px)]:lg:text-[40px] text-[32px] text-[#131927] font-semibold leading-[48px]">
                       Из десяти ключевых экранов собрала MVP для двух ролей 
                    </p>
                    <p className="[@media(min-height:850px)]:lg:text-[18px] text-[16px] text-gray-500 leading-[28px]">
                        В исходных требованиях не хватало состояний и промежуточных сценариев. Достроила UX соискателя и работодателя примерно до 60 экранов и состояний. MVP дошёл до RuStore.
                    </p>
                </div>
                <div className="grid grid-cols-3 items-center gap-x-6">
                    <div className="p-8 border-[1px] border-[#C8CEFC] rounded-3xl">
                        <p className="[@media(min-height:850px)]:lg:text-[24px] text-[20px] font-semibold leading-[28px] text-[#212967]">
                            Ограничения
                        </p>
                        <p className="mt-4 [@media(min-height:850px)]:lg:text-[16px] text-[14px] leading-[24px] text-gray-500">
                            Параллельная разработка
                        </p>
                    </div>
                    <div className="p-8 border-[1px] border-[#C8CEFC] rounded-3xl">
                        <p className="[@media(min-height:850px)]:lg:text-[24px] text-[20px] font-semibold leading-[28px] text-[#212967]">
                            Сроки
                        </p>
                        <p className="mt-4 [@media(min-height:850px)]:lg:text-[16px] text-[14px] leading-[24px] text-gray-500">
                            6 месяцев
                        </p>
                    </div>
                    <div className="p-8 border-[1px] border-[#C8CEFC] rounded-3xl">
                        <p className="text-[18px] [@media(min-height:850px)]:lg:text-[24px] text-[#212967] leading-[24px] [@media(min-height:850px)]:lg:leading-[28px] font-semibold">
                            MVP вышел в RuStore
                        </p>
                        <div className="flex items-center cursor-pointer mr-1">
                            <a target="_blank" href="https://www.rustore.ru/catalog/app/com.workwave" className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[20px] [@media(min-height:850px)]:lg:leading-[24px] text-[#4E61F6] ">
                                Перейти
                            </a>
                            <Image
                                src={imgPath("/icons/arrowPrime.svg")} // 👈 ИСПРАВЛЕНО
                                alt=""
                                width={16}
                                height={16}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}