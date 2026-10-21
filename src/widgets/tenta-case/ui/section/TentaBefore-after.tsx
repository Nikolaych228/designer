import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import type {
  ComponentPropsWithoutRef,
} from "react";
import { imgPath } from "@/lib/utils"; // 👈 Добавили импорт утилиты

type WorkWaveAboutProps =
  ComponentPropsWithoutRef<"section">;

// Вспомогательный компонент для слайдера "До / После"
function ImageSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  
  // Рефы для управления анимацией без лишних ререндеров
  const positionRef = useRef(50);
  const isDraggingRef = useRef(false);
  const lastInteractionRef = useRef(0);

  // Синхронизируем реф позиции с состоянием
  useEffect(() => {
    positionRef.current = sliderPosition;
  }, [sliderPosition]);

  // Основной цикл анимации
  useEffect(() => {
    let animationFrameId: number;
    let startTime = performance.now();
    let pauseEndTime = 0;
    let phase: "moving" | "pausing" = "moving";
    let direction: "right" | "left" = "right";
    let startPos = 50; // Начальная позиция для текущего движения

    const MIN_POS = 20; // 50% - 30%
    const MAX_POS = 80; // 50% + 30%
    const DURATION = 2000; // 2 секунды на одно движение
    const PAUSE_DURATION = 1000; // 1 секунда паузы на краю
    const IDLE_TIMEOUT = 5000; // 5 секунд после действия пользователя

    // Функция плавности (ускорение и замедление)
    const easeInOutCubic = (x: number): number => {
      return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    };

    const animate = (time: number) => {
      animationFrameId = requestAnimationFrame(animate);

      // Если пользователь тащит ползунок — не мешаем
      if (isDraggingRef.current) {
        startTime = time; // Сбрасываем таймер, чтобы не было скачка при отпускании
        return;
      }

      // Если прошло меньше 5 секунд с момента последнего взаимодействия — ждем
      if (time - lastInteractionRef.current < IDLE_TIMEOUT) {
        startTime = time;
        return;
      }

      if (phase === "pausing") {
        if (time >= pauseEndTime) {
          phase = "moving";
          direction = direction === "right" ? "left" : "right";
          startTime = time;
        } else {
          return;
        }
      }

      if (phase === "moving") {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / DURATION, 1);
        
        // Фиксируем начальную позицию в начале нового движения
        if (progress < 0.01) {
          startPos = positionRef.current;
          // Корректируем направление, если пользователь оставил ползунок за пределами
          if (startPos >= MAX_POS) direction = "left";
          else if (startPos <= MIN_POS) direction = "right";
        }

        const eased = easeInOutCubic(progress);
        const target = direction === "right" ? MAX_POS : MIN_POS;
        const newPos = startPos + (target - startPos) * eased;
        
        setSliderPosition(newPos);
        positionRef.current = newPos;

        if (progress >= 1) {
          phase = "pausing";
          pauseEndTime = time + PAUSE_DURATION;
        }
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Обработчики взаимодействия пользователя
  const handlePointerDown = () => {
    isDraggingRef.current = true;
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
    lastInteractionRef.current = performance.now();
  };

  return (
    <div className="relative [@media(min-height:850px)]:lg:w-[626px] w-[520px] [@media(min-height:850px)]:lg:h-[700px] h-[580px] rounded-2xl overflow-hidden shadow-sm select-none">
      {/* Фото "До" (находится на заднем плане) */}
      <div className="h-9 px-4 absolute rounded-full top-3 left-3 z-30 bg-[#DBDCDE] flex items-center">
        <p className="text-[#9A9A9C] [@media(min-height:850px)]:lg:text-[18px] text-[14px] leading-[28px] ">
          до
        </p>
      </div>
      <div className="h-9 px-4 absolute rounded-full top-3 right-3 z-30 bg-[#DBDCDE] flex items-center">
        <p className="text-[#9A9A9C] [@media(min-height:850px)]:lg:text-[18px] text-[14px] leading-[28px] ">
          после
        </p>
      </div>
      <Image
        src={imgPath("/images/tenta/tenta-beforeAfter1.png")} // 👈 ИСПРАВЛЕНО
        alt="До"
        width={626}
        height={0}
        className="absolute inset-0 object-cover"
      />
      
      {/* Фото "После" (накладывается сверху и обрезается по ширине) */}
      <Image
        src={imgPath("/images/tenta/tenta-beforeAfter2.png")} // 👈 ИСПРАВЛЕНО
        alt="После"
        width={626}
        height={0}
        className="absolute inset-0 object-cover z-10"
        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
      />

      {/* Линия разделителя и ползунок */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
          {/* Иконки стрелок < > */}
          <div className="flex items-center text-[#131927]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Невидимый input range для обработки перетаскивания (мышкой и пальцем) */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={(e) => {
          const val = Number(e.target.value);
          setSliderPosition(val);
          positionRef.current = val;
        }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="absolute inset-0 w-full opacity-0 cursor-ew-resize z-30"
        aria-label="Сравнение до и после"
      />
    </div>
  );
}

export function TentaBeforeAfter({
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
            <div className="p-3 bg-[#fff] rounded-3xl mx-3 lg:mx-0">
                
                  {/* Заменяем flex-row на flex-col для ноутбуков и flex-row для больших экранов */}
                  <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-6 p-3 lg:p-6">
                      <div className="max-w-[674px] min-w-[430px]">
                          <p className="text-[12px] leading-[16px] text-[#7181F8]">
                            до / после
                          </p>
                          {/* Адаптивные размеры шрифта заголовка */}
                          <p className="text-[32px] leading-[38px] [@media(min-height:850px)]:lg:text-[40px] [@media(min-height:850px)]:lg:leading-[48px] text-[#131927] font-semibold mt-3 lg:mt-0">
                              Состояние стало видно до перехода в оборудование
                          </p>
                          {/* Адаптивные размеры шрифта описания */}
                          <p className="text-[16px] leading-[24px] [@media(min-height:850px)]:lg:text-[18px] [@media(min-height:850px)]:lg:leading-[28px] mt-4 lg:mt-6 text-gray-500">
                              В старом интерфейсе авария была одним из параметров. Чтобы понять причину, пользователю приходилось переходить к оборудованию и сопоставлять значения.
                              <br/>
                              <br/>
                              В новой структуре сначала видно состояние. Затем - причина, параметры для диагностики и доступное действие.
                          </p>
                      </div>
                      
                      {/* Контейнер для слайдера: центрируем на мобильных, прижимаем вправо на десктопе */}
                      <div className="w-full flex justify-center lg:justify-end items-center">
                        <ImageSlider />
                      </div>
                  </div> 
          
            </div>
        </div>
        
        {/* Нижняя картинка: обязательно добавляем w-full h-auto, чтобы она не вылезала */}
        <Image
          src={imgPath("/images/tenta/tenta-decision.png")} // 👈 ИСПРАВЛЕНО
          alt=""
          width={1920}
          height={0}
          className="w-full h-full"
        />
    </section>
  );
}