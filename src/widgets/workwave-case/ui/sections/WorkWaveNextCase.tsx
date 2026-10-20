import Image from "next/image";


export function WorkWaveNextCase() {
    return(
        <section className="pl-[404px] pr-[160px] py-25">
            <div className="grid grid-cols-2 gap-x-6">
                <div className="p-3 cursor-pointer border-[1px] border-[#E6E6E6] rounded-[32]">
                    <Image
                        src="/images/workwave/workwave-nextCase1.png"
                        alt=""
                        width={640}
                        height={0}
                    />
                    <div className="p-3 flex mt-3 justify-between items-center">
                        <p className="text-[24px] leading-[28px] text-gray-900 font-semibold ">
                            Критические события перестали теряться внутри оборудования
                        </p>
                        <Image
                            src="/icons/Button.svg"
                            alt=""
                            width={56}
                            height={56}
                        />
                    </div>
                </div>
                <div className="p-3 cursor-pointer border-[1px] border-[#E6E6E6] rounded-[32]">
                    <Image
                        src="/images/workwave/workwave-nextCase2.png"
                        alt=""
                        width={640}
                        height={0}
                    />
                    <div className="p-3 flex mt-3 justify-between items-center">
                        <p className="text-[24px] leading-[28px] text-gray-900 font-semibold ">
                            Собрала поиск мест и построение<br/>маршрута в один сценарий
                        </p>
                        <Image
                            src="/icons/Button.svg"
                            alt=""
                            width={56}
                            height={56}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
} 