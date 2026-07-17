import {
  FaFileLines,
  FaBriefcase,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa6";

interface Props {
  variant?: "home" | "resume";
}

const LINKEDIN = "https://www.linkedin.com/in/aritrasarkar007";

// A compact "Let's talk" pill that expands on hover / focus to reveal a
// LinkedIn link and a mail shortcut, mirroring the reference site.
const LetsTalk = ({ emailHref }: { emailHref: string }) => {
  return (
    <div className="relative">
      {/* Invisible spacer keeps the collapsed footprint in the flex nav. */}
      <div
        aria-hidden
        className="pointer-events-none invisible whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium"
      >
        Let&apos;s talk
      </div>

      <div className="group absolute right-0 top-0 z-50 flex flex-col items-center overflow-hidden rounded-[1.4rem] bg-neutral-900 shadow-lg">
        <button
          type="button"
          aria-label="Let's talk — contact options"
          className="whitespace-nowrap px-5 py-2.5 text-sm font-medium text-white outline-none"
        >
          Let&apos;s talk
        </button>

        <div className="grid grid-rows-[0fr] transition-all duration-300 ease-out group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <div className="flex gap-2 px-2.5 pb-2.5 pt-0.5">
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/25 text-white transition-colors hover:bg-white hover:text-neutral-900"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>
              <a
                href={emailHref}
                aria-label="Email me"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/25 text-white transition-colors hover:bg-white hover:text-neutral-900"
              >
                <FaEnvelope className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TopNav = ({ variant = "home" }: Props) => {
  const onResume = variant === "resume";
  // From the home page the email section is a same-page anchor; elsewhere it
  // routes home and then scrolls to it.
  const emailHref = onResume ? "/#email" : "#email";

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/85 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-3.5 sm:px-10">
        <a
          href="/"
          className="text-[15px] font-medium tracking-tight text-neutral-800 hover:text-black"
        >
          Aritra.Sarkar
        </a>

        <div className="flex items-center gap-3">
          {onResume ? (
            <a href="/#projects" className="group flex items-center">
              <span className="z-10 grid h-10 w-10 -rotate-6 place-items-center rounded-xl bg-neutral-900 text-white shadow-[0.18rem_0.18rem_0_#0D8BFF] transition-transform duration-300 group-hover:rotate-0">
                <FaBriefcase className="h-4 w-4" />
              </span>
              <span className="-ml-2 hidden rounded-full border border-neutral-200 bg-white py-2 pl-4 pr-4 text-sm font-medium text-neutral-800 transition-colors group-hover:border-neutral-400 sm:block">
                My work
              </span>
            </a>
          ) : (
            <a
              href="resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center"
            >
              <span className="z-10 grid h-10 w-10 -rotate-6 place-items-center rounded-xl bg-neutral-900 text-white shadow-[0.18rem_0.18rem_0_#FA3C23] transition-transform duration-300 group-hover:rotate-0">
                <FaFileLines className="h-4 w-4" />
              </span>
              <span className="-ml-2 hidden rounded-full border border-neutral-200 bg-white py-2 pl-4 pr-4 text-sm font-medium text-neutral-800 transition-colors group-hover:border-neutral-400 sm:block">
                Resume
              </span>
            </a>
          )}

          <LetsTalk emailHref={emailHref} />
        </div>
      </nav>
    </header>
  );
};

export default TopNav;
