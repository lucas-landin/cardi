
import { Header } from "./components/header";
import { Experience } from "./components/experience";
import { Info } from "./components/info";
import { EmailIcon } from "./components/icons/email-icon"
import { SocialBtns } from "./components/socialbtns";




export default function Home() {
  return (
    <main
      className="container px-[32px] py-[40px] min-h-screen grid  gap-6 grid-areas-header-btns-experience-info  justify-items-center md:py-[70px] px-[60px]  h-screen grid content-strech md:items-center md:justify-items-start md:justify-between grid-areas-header-info grid-areas-experience-btns"
    >
      <Header />
      <Experience />
      <Info />

      <div className="buttons flex items-center justify-center flex-col gap-6 grid-area-btns w-full ">
      <SocialBtns />
        <a
          className="btn-primary bg-gradient-to-r from-[#002147] from-2.62% to-[#0074D9] to-93.38% rounded-3xl w-[325px] p-3 text-center text-xl uppercase border-none flex items-center  justify-center font-[500] gap-2  "
          href="https://github.com/lucas-landin"
        >
          Entre em Contato
          <EmailIcon />
        </a>
      </div>
    </main>
  );
}
