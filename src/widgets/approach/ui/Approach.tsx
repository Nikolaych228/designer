import Image from "next/image";


export function Approach () {
    return (
        <section className="my-[100px] flex flex-col items-center lg:px-[120px] 
                [@media(min-height:850px)]:lg:px-[284px]">
            <div className="max-w-[725px] z-10 text-center">
                <p className="text-[40px] font-semibold  leading-[48px]">
                    Сложные интерфейсы раскладываю на понятную систему
                </p>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-x-6">
                <div className="p-8 bg-[#EDEFFE] rounded-2xl">
                    <Image
                        src="./icons/network.svg"
                        alt=""
                        width={32}
                        height={32}
                    />
                    <p className="text-[32px] font-semibold mt-10 leading-[38px]">Собираю модель продукта</p>
                    <p className="text-gray-500 text-[16px] mt-3">
                        Роли, сущности, вложенность и информационная архитектура
                    </p>
                </div>
                <div className="p-8 bg-[#EDEFFE]  rounded-2xl">
                    <Image
                        src="./icons/stackoverflow.svg"
                        alt=""
                        width={32}
                        height={32}
                    />
                    <p className="text-[32px] font-semibold mt-10 leading-[38px]">Прорабатываю сценарии</p>
                    <p className="text-gray-500 text-[16px] mt-3">
                        Основные сценарии, состояния, edge cases и приоритеты
                    </p>
                </div>
                <div className="p-8 bg-[#212967]  rounded-2xl">
                    <Image
                        src="./icons/corner-top-left.svg"
                        alt=""
                        width={32}
                        height={32}
                    />
                    <p className="text-[32px] text-white font-semibold mt-10 leading-[38px]">Готовлю<br/>к разработке</p>
                    <p className="text-gray-500 text-white opacity-50 text-[16px] mt-3">
                        Компоненты, визуальная иерархия, адаптивы и handoff
                    </p>
                </div>
            </div>
        </section>
    )
}