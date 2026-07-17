import { FaGithub, FaLinkedinIn, FaEarthAsia } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full pb-8 pt-24" id="contact">
      <div className="flex flex-col items-center">
        <h2 className="max-w-3xl text-center text-3xl font-bold tracking-tight text-neutral-900 md:text-5xl">
          Ready to take <span className="text-[#FA3C23]">your</span> digital
          presence to the next level?
        </h2>
        <p className="mt-6 text-center text-lg text-neutral-500">
          Reach out today — I&apos;d love to build something together.
        </p>
        <a
          href="mailto:aritrasarkar00007@gmail.com"
          className="mt-8 rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
        >
          Let&apos;s get in touch
        </a>
      </div>

      <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-6 md:flex-row">
        <p className="text-sm text-neutral-500">Aritra Sarkar © 2026</p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/AritraS05"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-neutral-500 transition-colors hover:text-neutral-900"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/aritrasarkar007"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-neutral-500 transition-colors hover:text-neutral-900"
          >
            <FaLinkedinIn className="h-5 w-5" />
          </a>
          <span className="flex items-center gap-1.5 text-sm text-neutral-500">
            <FaEarthAsia className="h-4 w-4" /> India
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
