// import { FaLocationArrow } from "react-icons/fa6";

// import { socialMedia } from "@/data";
// import MagicButton from "@/components/ui/MagicButton";
// import Link from "next/link";
// import AnimationContainer from "./animated/animated-container";
// import MyPhoto from "./my-photo";

// const Footer = () => {
//   return (
//     <footer className="w-full pt-20 pb-10" id="contact">
//       {/* background grid */}
//       <div className="flex flex-col md:mt-20 items-center justify-center md:flex-row gap-8 mg:gap-6">
//       <div className="space-y-4 text-center md:text-left">
//         <MyPhoto className="w-32 lg:w-52 mx-auto md:mx-0" />

//         <div className="max-w-2xl mx-auto md:py-3 space-y-2 md:space-y-4">
//           <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
//             Say Hello 👋
//           </h1>
//         </div>
//         //todo: may or maynot keep this
//         {/* <a href="mailto:aritrasarkar00007@gmail.com">
//           <MagicButton
//             title="Let's get in touch"
//             icon={<FaLocationArrow />}
//             position="right"
//           />
//         </a> */}
//       </div>
      
//     </div>
//       <div className="w-full absolute left-0 -bottom-72 min-h-96">
//         <img
//           src="/footer-grid.svg"
//           alt="grid"
//           className="w-full h-full opacity-50 "
//         />
//       </div>

      
//       <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
//         <p className="md:text-base text-sm md:font-normal font-light">
//           Copyright © 2025 Aritra Sarkar
//         </p>

//         <div className="flex items-center md:gap-3 gap-6">
//           {socialMedia.map((info) => (
//             <div
//               key={info.id}
//               className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
//             >
//               <a href="https://www.linkedin.com/in/aritrasarkar007" target="_blank" rel="noopener noreferrer">
//                 <img src={info.img} alt="icons" width={20} height={20} />
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "@/components/ui/MagicButton";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today :)
        </p>
        <a href="mailto:aritrasarkar00007@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Aritra Sarkar
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href="https://www.linkedin.com/in/aritrasarkar007" target="_blank" rel="noopener noreferrer">
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;