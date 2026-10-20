import { WorkWaveHandoffVideo } from "@/widgets/workwave-case/ui/sections/WorkWaveHandoffVideo";
import type {
  ComponentPropsWithoutRef,
} from "react";

type WorkWaveHandoffProps =
  ComponentPropsWithoutRef<"section">;

export function TentaUnpleasant({
  id,
  className,
  ...props
}: WorkWaveHandoffProps) {
  return (
    <section
      id={id}
      className={className}
      {...props}
    >
    <div className="relative bg-[url('/icons/tenta-unpleasant.svg')] bg-center bg-no-repeat bg-[length:100%_auto] w-full">
      <div className="py-[100px] lg:pl-[300px] lg:pr-[100px] [@media(min-height:850px)]:lg:pl-[404px] [@media(min-height:850px)]:lg:pr-[250px]">
        <div className="flex flex-col lg:flex-row justify-between gap-y-10 lg:gap-y-0 lg:gap-x-10">
          {/* LEFT */}

          <div className="max-w-[646px] px-3 lg:px-3">
            <p className="text-[12px] leading-[16px] text-[#7181F8]">
              непринятая концепция
            </p>

            <h2 className="mt-3 text-[32px] leading-[38px] [@media(min-height:850px)]:lg:text-[40px] [@media(min-height:850px)]:lg:leading-[48px] font-semibold text-gray-900">
              Знакомство с системой через персонажа
            </h2>

            <div className="mt-6 [@media(min-height:850px)]:lg:mt-10">
              <p className="text-[16px] leading-[24px] [@media(min-height:850px)]:lg:text-[18px] [@media(min-height:850px)]:lg:leading-[28px] text-[#6D717F]">
                Разработала концепт онбординга с персонажем-роботом. Он знакомит пользователя с системой хранения урожая и помогает последовательно пройти первые шаги.<br/>
                <span className="font-bold">Персонаж мог стать основой для дальнейшего развития ИИ-ассистента и автоматизированной техподдержки</span>
              </p>
            </div>

            
          </div>

          {/* RIGHT / VIDEO */}
            <div 
              className="rounded-[58px] w-full max-w-[300px] [@media(min-height:850px)]:lg:max-w-[350px] mx-auto lg:mx-0"
              style={{
                boxShadow: `
                  -155px 0px 43px 0px rgba(0, 0, 0, 0),
                  -99px 0px 40px 0px rgba(0, 0, 0, 0.03),
                  -56px 0px 33px 0px rgba(0, 0, 0, 0.11),
                  -25px 0px 25px 0px rgba(0, 0, 0, 0.19),
                  -6px 0px 14px 0px rgba(0, 0, 0, 0.22)
                `
              }}
            >
                <WorkWaveHandoffVideo
                    src="/video/tenta-robot3.mp4"
                    className="rounded-[58px] w-full"
                />
            </div>
        </div>
      </div>
    </div>
    </section>
  );
}