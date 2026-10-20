import Image from "next/image";


export function MoreProjects () {
    return (
        <section className="mb-25 flex justify-center flex-col items-center 
                px-6 md:px-12 lg:px-[120px] 
                [@media(min-height:850px)]:lg:px-[284px]">
            <p className="text-[48px] font-semibold">
                Еще кейсы
            </p>
            <p className="text-[18px] mt-4 text-gray-400">
                Проекты разного масштаба
            </p>
            <div className="mt-6 grid grid-cols-2 gap-x-6">
                <div className="border-[1px] rounded-4xl border-[#E6E6E6] p-3">
                    <Image
                        src="/images/more-projects1.png"
                        alt=""
                        width={638}
                        height={358}
                        className="w-full"
                    />
                    <div className="mt-3 p-3">
                        <div className="flex gap-x-2 ">
                            <p className="text-[12px] text-gray-400">
                                Сайт IT-лаборатории
                            </p>
                            <Image
                                src="/icons/star.svg"
                                alt=""
                                width={8}
                                height={8}
                            />
                            <p className="text-[12px] text-gray-400">
                                2021
                            </p>
                        </div>
                        <p className="text-[24px] my-3 leading-[28px] text-gray-900 font-semibold">
                            Cайт лаборатории для привлечения студентов
                        </p>
                        <p className="text-[16px] text-gray-400">
                            Спроектировала структуру и контент. Перед дизайном опросила участников лаборатории и использовала ответы в подаче проекта
                        </p>
                    </div>
                </div>
                
                <div className="border-[1px] rounded-4xl border-[#E6E6E6] p-3">
                    <Image
                        src="/images/more-projects3.png"
                        alt=""
                        width={638}
                        height={358}
                        className="w-full"
                    />
                    <div className="mt-3 p-3">
                        <div className="flex gap-x-2 ">
                            <p className="text-[12px] text-gray-400">
                                Фирменный стиль
                            </p>
                            <Image
                                src="/icons/star.svg"
                                alt=""
                                width={8}
                                height={8}
                            />
                            <p className="text-[12px] text-gray-400">
                                2026
                            </p>
                        </div>
                        <p className="text-[24px] my-3 leading-[28px] text-gray-900 font-semibold">
                            Визуальная система после затянувшегося тупика
                        </p>
                        <p className="text-[16px] text-gray-400">
                            Собрала новую визуальную концепцию и систему носителей. Направление утвердили примерно за месяц
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}