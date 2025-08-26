import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import {
  FiArrowRight,
  FiMail,
  FiMapPin,
  FiGithub,
  FiTwitter,
  FiAward,
  FiTarget,
  FiStar,
} from "react-icons/fi";
import { FaSteam } from "react-icons/fa6";
import { SiGamemaker } from "react-icons/si";
import { PiTrophyDuotone } from "react-icons/pi";

const Yuna = () => {
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50">
      <Logo />
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <LocationBlock />
        <EmailListBlock />
      </motion.div>
      <Footer />
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Hi, I'm Yuna.{" "}
      <span className="text-zinc-400">
        I play videos games that challanges my skills & creativity.
      </span>
    </h1>
    <a
      href="#"
      className="flex items-center gap-1 text-red-300 hover:underline"
    >
      Let's Play <FiArrowRight />
    </a>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-red-500 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <img
          className="w-15"
          src="https://cdn2.steamgriddb.com/icon/fb7f07c358989bdf148e4a0c5a87e088/32/256x256.png"
          alt=""
        />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-green-600 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <img
          className="w-15"
          src="https://cdn2.steamgriddb.com/icon/2119b8d43eafcf353e07d7cb5554170b/32/256x256.png"
          alt=""
        />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-zinc-50 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-black"
      >
        <img
          className="w-15"
          src="https://cdn2.steamgriddb.com/icon_thumb/11e162eaa8ae8c204128cb0377fff7ea.png"
          alt=""
        />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-blue-500 md:col-span-3"
    >
      <a
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <img
          className="w-15"
          src="https://cdn2.steamgriddb.com/icon/9b8e3691c7140875b5fcc94cfc354c60/32/256x256.png"
          alt=""
        />
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>
      My name is Catherine Capellan.{" "}
      <span className="text-zinc-400">
        I love immersive story-driven adventures, complex simulation games, and
        cozy farming experiences. From exploring the Wild West to managing space
        colonies.
      </span>
    </p>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col justify-between md:col-span-3">
    <div className="flex flex-col items-center text-center">
      <FaSteam className="text-4xl text-white mb-3" />
      <div className="mb-4">
        <p className="text-lg font-semibold text-zinc-200">11kyupi</p>
        <p className="text-sm text-zinc-400">Steam Profile</p>
      </div>
    </div>

    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm text-zinc-400">Status</span>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="text-sm text-green-400">Online</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-zinc-400">Level</span>
        <span className="text-sm text-zinc-200 font-medium">47</span>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-zinc-400">Games</span>
        <span className="text-sm text-zinc-200 font-medium">12</span>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-zinc-400">Hours</span>
        <span className="text-sm text-zinc-200 font-medium">2.1k</span>
      </div>
    </div>
  </Block>
);

const EmailListBlock = () => (
  <Block className="col-span-12 md:col-span-9">
    <div className="mb-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <PiTrophyDuotone className="text-2xl" />
        <h3 className="text-xl font-medium font-figtree">
          Recent Achievements
        </h3>
      </div>
      <button className="flex items-center gap-2 text-sm text-zinc-400 hover:text-red-300 transition-colors group font-figtree">
        <span>See more</span>
        <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>

    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div>
            <p className="font-medium text-zinc-100 font-figtree">
              Red Dead Redemption 2
            </p>
            <p className="text-sm text-zinc-400 font-figtree">
              100% Story Completion
            </p>
          </div>
        </div>
        <span className="text-xs text-zinc-500 font-figtree">3 days ago</span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <div>
            <p className="font-medium text-zinc-100 font-figtree">
              Oxygen Not Included
            </p>
            <p className="text-sm text-zinc-400 font-figtree">
              Cycle 1000 Achievement
            </p>
          </div>
        </div>
        <span className="text-xs text-zinc-500 font-figtree">1 week ago</span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <div>
            <p className="font-medium text-zinc-100 font-figtree">
              Stardew Valley
            </p>
            <p className="text-sm text-zinc-400 font-figtree">
              Perfection Achievement
            </p>
          </div>
        </div>
        <span className="text-xs text-zinc-500 font-figtree">2 weeks ago</span>
      </div>
    </div>
  </Block>
);

const Logo = () => {
  return (
    <div className="mx-auto mb-12 text-center">
      <SiGamemaker size={35} className="mx-auto mb-4 fill-zinc-50" />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="mt-12">
      <p className="text-center text-zinc-400">
        Made with ❤️ by{" "}
        <a href="#" className="text-red-300 hover:underline">
          @yuna
        </a>
      </p>
    </footer>
  );
};

export default Yuna;
