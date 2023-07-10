import Image from "next/image";
export function Header() {
  return (
    <div className="header flex flex-col md:flex-row-reverse gap-6 ">
      <div>
        <h1 className="font-bold text-3xl md:text-4xl whitespace-nowrap ">Olá eu sou Lucas </h1>
        <h2 className=" font-normal text-base italic  md:not-italic text-3xl[45] ">
          Software developer
        </h2>
      </div>
      
        <Image
          src="/fotoperf.jpg"
          width={200}
          height={200}
          alt="Picture of the author"
          className="rounded-lg md:rounded-full border-2 border-white"
          priority
        />
      
    </div>
  );
}
