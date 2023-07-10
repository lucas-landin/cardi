import Image from "next/image"


interface SkillProps {
    image: string,
    years: string,
    measure: number,
}

export function Skill(props: SkillProps) {
    return (
        <div className="experience-language flex flex-row py-[6px] items-center">
            <Image
                src={props.image}
                alt="Skill Logo"
                width={40}
                height={40}
                priority
            />
            <div className="experience-unit w-[300px] h-[30px] rounded-[24px] border flex justify-start items-center">
                <div className={`experience-measure z-[999px] rounded-[24px] h-[24px] border  bg-gradient-to-r from-[#002147] from-2.62% to-[#0074D9] to-93.38% font-light text-center text-xs ${getMeasureClass(props.measure)}`}>
                    <span>{props.years}</span>
                </div>
            </div>
        </div>
    )
}

function getMeasureClass(measure: number): string {
    if (measure === 1) {
        return 'w-1/3';
    } else if (measure === 2) {
        return 'w-2/3';
    } else {
        return 'w-full';
    }
}
