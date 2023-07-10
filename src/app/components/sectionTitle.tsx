interface SectionTitleProps {
    text: string
}

export function SectionTitle({ text } : SectionTitleProps){
    return(
        <h3 className="items-center section-title font-[500] text-center text-lg text-base/[28px] md:text-2xl text-base/[36px] md:text-start">{text}</h3>
    )
}