import { GitHubIcon } from "./icons/github-icon";
import { LinkedInIcon } from "./icons/linkedin-icon";
export function SocialBtns() {
  return (
    <div className="social flex items-center gap-6">
      <a
        className=" rounded-full h-[50px] w-[50px] border border-solid border-white cursor-pointer flex items-center justify-center"
        href="https://www.linkedin.com/in/lucas-neder-c-landin-60099923a/"
      >
        <LinkedInIcon />
      </a>
      <a
        className="rounded-full h-[50px] w-[50px] border border-solid border-white cursor-pointer flex items-center justify-center"
        href="https://github.com/lucas-landin"
      >
        <GitHubIcon />
      </a>
    </div>
  );
}
