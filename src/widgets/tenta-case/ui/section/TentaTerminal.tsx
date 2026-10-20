import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import type {
  ComponentPropsWithoutRef,
} from "react";

type WorkWaveAboutProps =
  ComponentPropsWithoutRef<"section">;

// Вспомогательный компонент для слайдера "До / После"
function BeforeAfterSlider({
  imageBefore,
  imageAfter,
  className = "",
}: {
  imageBefore: string;
  imageAfter: string;
  className?: string;
}) {
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
        startTime = time;
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
    <div className={`relative w-full rounded-2xl overflow-hidden shadow-sm select-none ${className}`}>
      {/* Фото "До" (находится на заднем плане) */}
      <Image
        src={imageBefore}
        alt="До"
        width={1920}
        height={1080}
        className="w-full h-auto object-cover"
      />

      {/* Фото "После" (накладывается сверху и обрезается по ширине) */}
      <Image
        src={imageAfter}
        alt="После"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover z-10"
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
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
        aria-label="Сравнение до и после"
      />
    </div>
  );
}

export function TentaTerminal({
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
        <p className="text-[12px] pl-3 leading-[16px] text-[#7181F8]">
            терминал
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10 px-3 lg:px-0">       
            <div className="">
                <div className="pl-0 lg:pl-3 mb-6 [@media(min-height:850px)]:lg:mb-10">
                    <p className="text-[32px] leading-[38px] [@media(min-height:850px)]:lg:text-[40px] [@media(min-height:850px)]:lg:leading-[48px] text-gray-900 font-semibold">
                        Терминал - действия рядом с оборудованием
                    </p>
                </div>
                <div className="px-6 py-5 [@media(min-height:850px)]:lg:px-8 lg:py-6 border-[1px] border-[#C8CEFC] rounded-3xl">
                    <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] font-semibold leading-[28px] text-[#212967]">
                        Сенсорный экран
                    </p>
                    <p className="mt-3 [@media(min-height:850px)]:lg:mt-4 text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[24px] text-gray-500">
                        Крупные зоны взаимодействия для работы руками и в перчатках
                    </p>
                </div>
                <div className="px-6 py-5 [@media(min-height:850px)]:lg:px-8 lg:py-6 border-[1px] my-3 border-[#C8CEFC] rounded-3xl">
                    <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] font-semibold leading-[28px] text-[#212967]">
                        Без скролла
                    </p>
                    <p className="mt-3 [@media(min-height:850px)]:lg:mt-4 text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[24px] text-gray-500">
                        Основное состояние и доступные действия помещаются в рабочую область
                    </p>
                </div>
                <div className="px-6 py-5 [@media(min-height:850px)]:lg:px-8 lg:py-6 border-[1px] border-[#C8CEFC] rounded-3xl">
                    <p className="text-[20px] [@media(min-height:850px)]:lg:text-[24px] font-semibold leading-[28px] text-[#212967]">
                        Высокая плотность данных
                    </p>
                    <p className="mt-3 [@media(min-height:850px)]:lg:mt-4 text-[14px] [@media(min-height:850px)]:lg:text-[16px] leading-[24px] text-gray-500">
                        Параметры сгруппированы по задаче и приоритету
                    </p>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="pr-0 lg:pr-3 mb-6 lg:mb-12">
                    <p className="text-[16px] leading-[24px] [@media(min-height:850px)]:lg:text-[18px] [@media(min-height:850px)]:lg:leading-[28px] text-gray-500">
                        Терминал используется непосредственно на объекте, поэтому сценарии сокращаются до мониторинга, диагностики и управления конкретным объектом
                    </p>
                </div>
                
                  <Image
                      src="/images/tenta/tenta-terminal.png"
                      alt=""
                      width={658}
                      height={0}
                      className="w-full h-full"
                  />
                
            </div>   
        </div>
        <div className="px-3 lg:px-0">
            {/* Вызов слайдера */}
            <BeforeAfterSlider
              imageBefore="/images/tenta/tenta-terminal1.png"
              imageAfter="/images/tenta/tenta-terminal2.png"
              className="mt-10"
            />
        </div>
      </div>
    </section>
  );
}