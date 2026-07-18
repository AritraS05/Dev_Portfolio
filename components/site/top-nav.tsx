import {
  FaFileLines,
  FaBriefcase,
  FaLinkedinIn,
  FaEnvelope,
  FaGithub,
  FaCode,
} from "react-icons/fa6";
import { SiCodeforces, SiLeetcode, SiCodechef } from "react-icons/si";

interface Props {
  variant?: "home" | "resume";
}

const LINKEDIN = "https://www.linkedin.com/in/aritrasarkar007";
const GITHUB = "https://github.com/AritraS05";

const CODING_PROFILES = [
  {
    label: "Codeforces",
    href: "https://codeforces.com/profile/aritra_sarkar_42",
    Icon: SiCodeforces,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/aritra_sarkar",
    Icon: SiLeetcode,
  },
  {
    label: "CodeChef",
    href: "https://www.codechef.com/users/aritra_s_007",
    Icon: SiCodechef,
  },
];

// Small square icon button that reveals the competitive-programming profiles
// on hover / focus, without disturbing the nav layout.
const CodingProfiles = () => (
  <div className="relative">
    {/* Invisible spacer keeps the collapsed footprint in the flex nav. */}
    <div aria-hidden className="pointer-events-none invisible h-10 w-10" />

    <div className="group absolute right-0 top-0 z-50 flex flex-col items-center overflow-hidden rounded-xl border border-neutral-200 bg-white transition-colors hover:border-neutral-400">
      <button
        type="button"
        aria-label="Coding profiles"
        className="grid h-10 w-10 place-items-center text-neutral-800 outline-none"
      >
        <FaCode className="h-4 w-4" />
      </button>

      <div className="grid grid-rows-[0fr] transition-all duration-300 ease-out group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]">
        <div className="overflow-hidden">
          <div className="flex flex-col items-center gap-1 px-1 pb-1.5 pt-0.5">
            {CODING_PROFILES.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="grid h-8 w-8 place-items-center rounded-lg text-neutral-700 transition-colors hover:bg-neutral-900 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Mobile-only dock: the nav gets crowded on small screens, so GitHub and the
// competitive-programming profiles move to a floating bar at the bottom, laid
// out flat (no hover-to-expand, which doesn't translate to touch).
const MobileDock = () => (
  <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center sm:hidden">
    <div className="flex items-center gap-1 rounded-full border border-neutral-200 bg-white/90 px-2 py-1.5 shadow-lg backdrop-blur-md">
      <a
        href={GITHUB}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="grid h-10 w-10 place-items-center rounded-full text-neutral-800 transition-colors active:bg-neutral-900 active:text-white"
      >
        <FaGithub className="h-[1.15rem] w-[1.15rem]" />
      </a>

      <span aria-hidden className="h-5 w-px bg-neutral-200" />

      {CODING_PROFILES.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="grid h-10 w-10 place-items-center rounded-full text-neutral-700 transition-colors active:bg-neutral-900 active:text-white"
        >
          <Icon className="h-[1.05rem] w-[1.05rem]" />
        </a>
      ))}
    </div>
  </div>
);

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
    <>
      <MobileDock />
      <header className="fixed inset-x-0 top-0 z-50 bg-white/85 backdrop-blur-md">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-3.5 sm:px-10">
          <a
            href="/"
            className="text-[15px] font-medium tracking-tight text-neutral-800 hover:text-black"
          >
            Aritra.Sarkar
          </a>

          <div className="flex items-center gap-3">
            {/* On mobile these live in the bottom dock instead — see MobileDock. */}
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="hidden h-10 w-10 place-items-center rounded-xl border border-neutral-200 bg-white text-neutral-800 transition-colors hover:border-neutral-400 hover:bg-neutral-900 hover:text-white sm:grid"
            >
              <FaGithub className="h-[1.15rem] w-[1.15rem]" />
            </a>

            <div className="hidden sm:block">
              <CodingProfiles />
            </div>

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
    </>
  );
};

export default TopNav;
