import Aurora from "@/components/ui/mesh-gradient-background";
import { Button } from "@/shared/ui/button";
import Image from "next/image";
import { imgPath } from "@/lib/utils"; // 👈 Добавили импорт утилиты

export function FinalCta () {
    return (
        <section className="py-25 flex flex-col items-center relative ">
            <div className="pointer-events-none absolute rotate-180 inset-0 z-0">
                <Aurora
                    colorStops={["#afceff","#edf4ff","#cee0ff"]}
                    blend={0.5}
                    amplitude={1.0}
                    speed={1}
                    lightMode
                />
            </div>
            <div className="max-w-[720px] z-10 flex flex-col items-center">
                <p className="text-[48px] text-center leading-[58px] font-semibold text-gray-900">
                    Открыта к новым продуктовым задачам
                </p>
                <p className="text-[18px] my-6 text-center leading-[28px] text-gray-400">
                    Рассматриваю удалённые позиции UX/UI Designer 
                </p>
                <div className="flex">
                    <Button 
                        href="https://web.telegram.org/k/#@lzuxui" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        arrow="right"
                    >
                        Написать в Telegram
                    </Button>
                    <a 
                        href="https://e.mail.ru/compose/?to=kononova.1302@mail.ru"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Написать на почту"
                        className="
                            cursor-pointer
                            ml-6 h-[56px]
                            flex 
                            justify-center 
                            items-center 
                            w-[56px] 
                            rounded-full 
                            border-[2px] 
                            border-[#4E61F6]
                            hover:bg-[#EDEFFE]

                            focus-visible:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-[#AEB6FB]
                            focus-visible:ring-offset-2

                            active:scale-[0.98]
                            active:bg-[#C8CEFC]
                            transition-all
                            duration-200
                        "
                    >
                        <Image
                            src={imgPath("/icons/mail.svg")} // 👈 ИСПРАВЛЕНО
                            alt=""
                            width={24}
                            height={24}
                        />
                    </a>
                </div>
            </div>
        </section>
    )
}