import { SectionTitle } from "./sectionTitle"
import Image from "next/image";
export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Línguas"/>
        <div className="languages-info">
        <span className="flex items-center">
              <Image
                src="/🇺🇸.png"
                width={24}
                height={25}
                alt="en-flag"
                className="mr-2"
              />
              EN - Fluent
            </span>
            <span className="flex items-center">
              <Image
                src="/🇧🇷.png"
                width={24}
                height={25}
                alt="br-flag"
                className="mr-2"
              />
              PT - BR - Língua Nativa
            </span>
        </div>
        <SectionTitle text="Educação"/>
        <div className="educational-info">
          <span>🎓</span>
          <span>Superior de Tecnologia em Sistemas para Internet</span>
        </div>
      </div>
    )
}