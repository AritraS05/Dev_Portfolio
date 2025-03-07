"use client";

import { cn } from "@/utils/cn";
import { motion } from "motion/react";
import Image from "next/image";

interface Props {
  className?: string;
}

const MyPhoto: React.FC<Props> = ({ className }) => {
  return (
    <motion.div
      layout
      layoutId="aritra-sarkar"
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.9 }}
      className={cn(
        "border border-white/10 transition duration-300 ease-out overflow-hidden rounded-3xl lg:w-96 aspect-square",
        className
      )}
    >
      <Image
        src="/profilePic.jpg"
        alt="Aritra Sarkar"
        height={2190}
        width={2190}
        sizes="30vw"
        priority
        className="object-cover object-top h-full w-full"
      />
    </motion.div>
  );
};
export default MyPhoto;