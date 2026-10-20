import Image from "next/image";

export function TentaHero() {
    return (
        <section>
            <Image
                src="/images/tenta/tenta-hero1.png"
                alt=""
                width={1920}
                height={840}
                className="w-full h-auto"
            />
            <div className="mt-10 lg:pl-[300px] lg:pr-[100px] [@media(min-height:850px)]:lg:pl-[404px] [@media(min-height:850px)]:lg:pr-[160px]">
                <div className="flex flex-wrap pl-3 gap-x-2 gap-y-2">
                    <p className="text-[12px] text-[#7181F8]">
                        B2B
                    </p>
                    <Image
                        src="/icons/starPrimary.svg"
                        alt=""
                        width={8}
                        height={8}
                        className="self-center"
                    />
                    <p className="text-[12px] text-[#7181F8]">
                        Legacy redesign
                    </p>
                    <Image
                        src="/icons/starPrimary.svg"
                        alt=""
                        width={8}
                        height={8}
                        className="self-center"
                    />
                    <p className="text-[12px] text-[#7181F8]">
                        Mobile
                    </p>
                    <Image
                        src="/icons/starPrimary.svg"
                        alt=""
                        width={8}
                        height={8}
                        className="self-center"
                    />
                    <p className="text-[12px] text-[#7181F8]">
                        Industrial software
                    </p>
                </div>
                
                <div className="grid lg:grid-cols-2 items-start my-6 lg:my-10 gap-y-4 lg:gap-y-0 gap-x-10 px-3">
                    <p className="text-[32px] leading-[38px] [@media(min-height:850px)]:lg:text-[40px] [@media(min-height:850px)]:lg:leading-[48px] text-[#131927] font-semibold">
                        Критические состояния перестали прятаться внутри оборудования
                    </p>
                    <p className="text-[16px] leading-[24px] [@media(min-height:850px)]:lg:text-[18px] [@media(min-height:850px)]:lg:leading-[28px] text-gray-500">
                        Перестроила структуру мониторинга так, чтобы состояние было видно до перехода в конкретный датчик
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 items-stretch gap-4 lg:gap-x-6 px-3 lg:px-0">
                    <div className="p-6 [@media(min-height:850px)]:lg:p-8 border-[1px] h-full border-[#C8CEFC] rounded-3xl flex flex-col justify-start">
                        <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] font-semibold leading-[28px] text-[#212967]">
                            Моя роль
                        </p>
                        <p className="mt-3 [@media(min-height:850px)]:lg:mt-6 text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[24px] text-gray-500">
                            UX/UI-дизайнер
                        </p>
                    </div>
                    <div className="p-6 [@media(min-height:850px)]:lg:p-8 border-[1px] border-[#C8CEFC] rounded-3xl flex flex-col justify-start">
                        <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] font-semibold leading-[28px] text-[#212967]">
                            Ограничение
                        </p>
                        <p className="mt-3 [@media(min-height:850px)]:lg:mt-4 text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[24px] text-gray-500">
                            Параллельная разработка без прямого контакта с разработчиками
                        </p>
                    </div>
                    <div className="p-6 [@media(min-height:850px)]:lg:p-8 border-[1px] border-[#C8CEFC] rounded-3xl flex flex-col justify-start">
                        <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] font-semibold leading-[28px] text-[#212967]">
                            Статус
                        </p>
                        <p className="mt-3 [@media(min-height:850px)]:lg:mt-4 text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[24px] text-gray-500">
                            Передала переработанный интерфейс через посредника. Ушла из проекта до релиза
                        </p>
                    </div>
                </div>
                
                <Image
                    src="/images/tenta/tenta-hero2.png"
                    alt=""
                    width={1356}
                    height={0}
                    className="py-25 [@media(min-height:850px)]:lg:py-25 w-full h-auto px-3 lg:px-0"
                />
            </div>
        </section>
    )
}