import { SectionTitle } from "../components/sectionTitle"
import { Skill } from "../components/skill"
export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experiência"/>
          <p>Com 3 anos de experiência, busco oportunidades para aprimorar meu trabalho como programador.</p>
          <div className="experience-time">
            <Skill image="/react.png" measure={2} years="2 anos"/>
            <Skill image="/ts.png" measure={1} years="1 ano"/>
            <Skill image="/js.png" measure={3} years="3 anos"/>
          </div>
        </div>
    )
}