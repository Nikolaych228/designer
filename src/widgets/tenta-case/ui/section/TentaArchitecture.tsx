import Image from "next/image";
import { useState } from "react";
import { imgPath } from "@/lib/utils"; // 👈 Добавили импорт утилиты

// Компонент картинки с эффектом лупы
function MagnifierImage({ src, alt }: { src: string; alt: string }) {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    bgX: 0,
    bgY: 0,
    width: 0,
    height: 0,
  });

  // 👇 ИСПРАВЛЕНО: получаем правильный путь один раз
  const imageSrc = imgPath(src);

  const ZOOM = 2.0; // Коэффициент увеличения
  const LENS_SIZE = 300; // Размер круга лупы в пикселях

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Рассчитываем позицию фона внутри лупы
    const bgX = -(x * ZOOM - LENS_SIZE / 2);
    const bgY = -(y * ZOOM - LENS_SIZE / 2);

    setPosition({ x, y, bgX, bgY, width, height });
  };

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-gray-100 bg-white">
      <Image
        src={imageSrc} // 👈 ИСПРАВЛЕНО
        alt={alt}
        width={1920}
        height={1080}
        className="w-full h-auto object-contain cursor-crosshair"
        onMouseEnter={(e) => {
          const { width, height } = e.currentTarget.getBoundingClientRect();
          setPosition((prev) => ({ ...prev, width, height }));
          setShowMagnifier(true);
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setShowMagnifier(false)}
      />

      {showMagnifier && (
        <div
          style={{
            position: "absolute",
            pointerEvents: "none",
            height: `${LENS_SIZE}px`,
            width: `${LENS_SIZE}px`,
            top: `${position.y - LENS_SIZE / 2}px`,
            left: `${position.x - LENS_SIZE / 2}px`,
            backgroundImage: `url(${imageSrc})`, // 👈 ИСПРАВЛЕНО
            backgroundRepeat: "no-repeat",
            backgroundSize: `${position.width * ZOOM}px ${position.height * ZOOM}px`,
            backgroundPosition: `${position.bgX}px ${position.bgY}px`,
            borderRadius: "50%",
            border: "4px solid white",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
            zIndex: 10,
          }}
        />
      )}
    </div>
  );
}

// Основной компонент блока
export function TentaArchitecture({
  id,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"section">) {
  return (
    <section id={id} className={className} {...props}>
      <div className="py-25 lg:pl-[300px] lg:pr-[100px] [@media(min-height:850px)]:lg:pl-[404px] [@media(min-height:850px)]:lg:pr-[160px]">
        <div className="px-3 lg:px-3">
              <p className="text-[12px] leading-[16px] text-[#7181F8]">
                  архитекстура
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-x-10 gap-y-6 mt-3">
                  <p className="text-[32px] leading-[38px] [@media(min-height:850px)]:lg:text-[40px] [@media(min-height:850px)]:lg:leading-[48px] text-[#131927] font-semibold">
                      Разделила сценарии мобильного приложения и терминала по задачам
                  </p>
                  <p className="text-[16px] leading-[24px] [@media(min-height:850px)]:lg:text-[18px] [@media(min-height:850px)]:lg:leading-[28px] text-gray-500">
                      Сначала разложила существующие разделы и переходы для двух интерфейсов. Мобильное приложение покрывало удалённый мониторинг и сервисные сценарии, терминал - работу непосредственно со складом и оборудованием
                  </p>
              </div> 
          </div>

            {/* Схемы */}
            <div className="flex flex-col mt-8 [@media(min-height:850px)]:lg:mt-10 gap-6 lg:gap-8 px-3 lg:px-0">
              <MagnifierImage
                src="/images/tenta/tenta-architecture1.png"
                alt="Архитектура мобильного приложения"
              />
              <MagnifierImage
                src="/images/tenta/tenta-architecture2.png"
                alt="Архитектура терминала"
              />
            </div>

            {/* Карточки внизу */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-3 mt-8 [@media(min-height:850px)]:lg:mt-10 px-3 lg:px-0">
              <div className="bg-[#fff] border-[1px] border-[#C8CEFC] rounded-3xl p-6 [@media(min-height:850px)]:lg:p-8">
                <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] text-[#212967] leading-[28px] font-semibold mb-3 [@media(min-height:850px)]:lg:mb-4">
                  Что видно из схем
                </p>
                <p className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] text-gray-500 leading-[24px]">
                  Одна и та же структура не подходит двум интерфейсам. Мобилка требует мониторинг и удаленное управление, терминал - быстрый переход к конкретному складу и оборудованию
                </p>
              </div>
              <div className="bg-[#EDEFFE] rounded-3xl p-6 [@media(min-height:850px)]:lg:p-8">
                <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] text-[#212967] leading-[28px] font-semibold mb-3 [@media(min-height:850px)]:lg:mb-4">
                  Решение
                </p>
                <p className="text-[14px] [@media(min-height:850px)]:lg:text-[16px] text-gray-500 leading-[24px]">
                  Сохранить общие сущности и логику продукта, но развести навигацию по контексту использования
                </p>
              </div>
            </div>
          </div>
    </section>
  );
}