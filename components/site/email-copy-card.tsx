"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { IoCopyOutline } from "react-icons/io5";
import animationData from "@/data/confetti.json";

// lottie-web touches `document` at import time, so it must never load during SSR
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

const EMAIL = "aritrasarkar00007@gmail.com";

const EmailCopyCard = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
  };

  return (
    <div
      id="email"
      className="relative mt-16 flex w-full scroll-mt-28 flex-col items-center overflow-hidden rounded-3xl border border-neutral-200 bg-white px-6 py-14 text-center"
    >
      {/* playful corner accents, echoing the hero */}
      <span aria-hidden className="absolute left-8 top-8 h-4 w-4 rounded-[35%_35%_35%_8%] bg-[#FA3C23]" />
      <span aria-hidden className="absolute bottom-10 right-9 h-3.5 w-3.5 rounded-md bg-[#0D8BFF]" />
      <span aria-hidden className="absolute right-16 top-10 h-2.5 w-2.5 rounded-full bg-[#00C060]" />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {copied && (
          <Lottie
            eventListeners={[]}
            options={{
              loop: copied,
              autoplay: copied,
              animationData,
              rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
            }}
          />
        )}
      </div>

      <h3 className="max-w-md text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
        Do you want to start a project together?
      </h3>

      <button
        onClick={handleCopy}
        className="z-10 mt-7 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
      >
        <IoCopyOutline className="h-4 w-4" />
        {copied ? "Email copied!" : "Copy my email"}
      </button>

      <p className="mt-3 text-sm text-neutral-500">{EMAIL}</p>
    </div>
  );
};

export default EmailCopyCard;
