"use client";
import { Button, ButtonWhite } from "@/shared/ui/button";
import Image from "next/image";
import { imgPath } from "@/lib/utils"; // 👈 Добавили импорт утилиты

export function About () {
    return (
        <section className="my-25 flex flex-col items-center lg:px-[120px] 
                [@media(min-height:850px)]:lg:px-[284px]">
            <div className="flex p-3 z-10 bg-[#EDEFFE] rounded-4xl">
                <Image
                    src={imgPath("/images/about/Krasotulka1.png")} // 👈 ИСПРАВЛЕНО
                    alt="Красатулька)))"
                    width={624}
                    height={528}
                    className="mr-8"
                />
                <div className="flex flex-col justify-between px-6 pt-6 pb-3">
                    <div className="max-w-[624px]">
                        <p className="text-[32px] leading-[38px] text-gray-900 font-semibold">
                            Обо мне
                        </p>
                        <p className="text-[16px] leading-[24px] text-gray-500 mt-6">
                            UX/UI-дизайнер с техническим образованием и опытом около пяти лет.
                        </p>
                        <p className="text-[16px] leading-[24px] text-gray-500 mt-3">
                            Работала с B2B и B2C-продуктами, mobile и web. Часто была единственным дизайнером и отвечала за весь UX/UI-контур.
                        </p>
                        <p className="text-[16px] leading-[24px] text-gray-500 mt-3">
                            Сильнее всего работаю с продуктами, где много ролей, состояний, данных и зависимостей.                   
                        </p>
                        <p className="text-[16px] leading-[24px] text-gray-500 mt-3">
                            Рассматриваю удалённые позиции UX/UI Designer.                    
                        </p>
                    </div>
                    <div className="flex gap-x-3">
                        <Button onClick={() => window.dispatchEvent(new Event("scrollToProjects"))}>
                            Перейти к кейсам
                        </Button>
                        <ButtonWhite 
                            target="_blank" 
                            href="/pdf/Rezyume.pdf" 
                            arrowPrime="right"
                        >
                            Открыть CV
                        </ButtonWhite>
                    </div>
                </div>
            </div>
            <div className="py-6 border-[1px] w-full mt-4 rounded-3xl border-[#E6E6E6] lg:px-[60px] 
                [@media(min-height:850px)]:lg:px-[102px]">
                <p className="text-[16px] leading-[24px] text-gray-500">
                    Сейчас веду дизайн в команде инициаторов нового продукта: участвую в принятии решений и отвечаю за дизайн-направление перед запуском
                </p>
            </div>
        </section>
    )
}