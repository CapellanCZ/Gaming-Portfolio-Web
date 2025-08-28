import React, { useState } from "react";
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
  FiX,
} from "react-icons/fi";
import { FaSteam } from "react-icons/fa6";
import { SiGamemaker } from "react-icons/si";
import { PiTrophyDuotone } from "react-icons/pi";
import YunaProfileProps from "../../prop/YunaProfileProps.jsx";

const Yuna = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGamesModalOpen, setIsGamesModalOpen] = useState(false);
  const {
    avatar,
    name,
    ign,
    headerDescription,
    games,
    steam,
    about,
    achievements,
    socials,
  } = YunaProfileProps;
  
  return (
    <>
      <div className="min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50">
        <Logo />
        <motion.div
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.05 }}
          className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
        >
          <HeaderBlock 
            avatar={avatar} 
            name={name} 
            ign={ign} 
            headerDescription={headerDescription}
            onSeeMore={() => setIsGamesModalOpen(true)}
          />
          <SocialsBlock socials={socials} />
          <AboutBlock name={name} about={about} />
          <LocationBlock ign={ign} steam={steam} />
          <EmailListBlock 
            achievements={achievements.slice(0, 3)} 
            onSeeMore={() => setIsModalOpen(true)}
          />
        </motion.div>
        <Footer />
      </div>
      
      {/* Achievements Modal */}
      <AchievementsModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        achievements={achievements}
      />
      
      {/* Games Modal */}
      <GamesModal 
        isOpen={isGamesModalOpen}
        onClose={() => setIsGamesModalOpen(false)}
        games={games}
      />
    </>
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

const HeaderBlock = ({ avatar, name, ign, headerDescription, onSeeMore }) => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <img src={avatar} alt="avatar" className="mb-4 size-14 rounded-full" />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Hi, I'm {ign}. <span className="text-zinc-400">{headerDescription}</span>
    </h1>
    <button
      onClick={onSeeMore}
      className="flex items-center gap-1 text-red-300 hover:underline transition-colors group"
    >
      <span>See more</span> <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
    </button>
  </Block>
);

const SocialsBlock = ({ socials }) => (
  <>
    {socials.map((social, idx) => (
      <Block
        key={idx}
        whileHover={{ rotate: idx % 2 === 0 ? "2.5deg" : "-2.5deg", scale: 1.1 }}
        className={`col-span-6 ${social.bg} md:col-span-3`}
      >
        <a
          href="#"
          className={`grid h-full place-content-center text-3xl ${social.color}`}
        >
          <img className="w-15" src={social.url} alt="" />
        </a>
      </Block>
    ))}
  </>
);

const AboutBlock = ({ name, about }) => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>
      My name is {name}. <span className="text-zinc-400">{about}</span>
    </p>
  </Block>
);

const LocationBlock = ({ ign, steam }) => (
  <Block className="col-span-12 flex flex-col justify-between md:col-span-3">
    <div className="flex flex-col items-center text-center">
      <FaSteam className="text-4xl text-white mb-3" />
      <div className="mb-4">
        <p className="text-lg font-semibold text-zinc-200">{ign}</p>
        <p className="text-sm text-zinc-400">{steam.profile}</p>
      </div>
    </div>
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm text-zinc-400">Status</span>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="text-sm text-green-400">{steam.status}</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-zinc-400">Level</span>
        <span className="text-sm text-zinc-200 font-medium">{steam.level}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-zinc-400">Games</span>
        <span className="text-sm text-zinc-200 font-medium">{steam.games}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm text-zinc-400">Hours</span>
        <span className="text-sm text-zinc-200 font-medium">{steam.hours}</span>
      </div>
    </div>
  </Block>
);

const EmailListBlock = ({ achievements, onSeeMore }) => (
  <Block className="col-span-12 md:col-span-9">
    <div className="mb-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <PiTrophyDuotone className="text-2xl" />
        <h3 className="text-xl font-medium font-figtree">Recent Achievements</h3>
      </div>
      <button 
        onClick={onSeeMore}
        className="flex items-center gap-2 text-sm text-zinc-400 hover:text-red-300 transition-colors group font-figtree"
      >
        <span>See more</span>
        <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
    <div className="space-y-4">
      {achievements.map((ach, idx) => (
        <div key={idx} className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`w-3 h-3 bg-${ach.color} rounded-full`}></div>
            <div>
              <p className="font-medium text-zinc-100 font-figtree">{ach.title}</p>
              <p className="text-sm text-zinc-400 font-figtree">{ach.description}</p>
            </div>
          </div>
          <span className="text-xs text-zinc-500 font-figtree">{ach.date}</span>
        </div>
      ))}
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

const AchievementsModal = ({ isOpen, onClose, achievements }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-zinc-900 border border-zinc-700 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-700">
          <div className="flex items-center gap-3">
            <PiTrophyDuotone className="text-2xl text-yellow-400" />
            <h2 className="text-2xl font-semibold text-zinc-100 font-figtree">
              All Achievements
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
          >
            <FiX className="w-5 h-5 text-zinc-400" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="grid gap-4">
            {achievements.map((ach, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center justify-between p-4 bg-zinc-800/50 rounded-xl border border-zinc-700 hover:border-zinc-600 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-4 h-4 bg-${ach.color} rounded-full`}></div>
                  <div>
                    <p className="font-medium text-zinc-100 font-figtree text-lg">
                      {ach.title}
                    </p>
                    <p className="text-sm text-zinc-400 font-figtree">
                      {ach.description}
                    </p>
                  </div>
                </div>
                <span className="text-sm text-zinc-500 font-figtree bg-zinc-800 px-3 py-1 rounded-md">
                  {ach.date}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-zinc-700 bg-zinc-800/30">
          <div className="flex items-center justify-between">
            <p className="text-sm text-zinc-400 font-figtree">
              Total achievements: {achievements.length}
            </p>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors font-figtree"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const GamesModal = ({ isOpen, onClose, games }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-zinc-900 border border-zinc-700 rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-700">
          <div className="flex items-center gap-3">
            <SiGamemaker className="text-2xl text-red-400" />
            <h2 className="text-2xl font-semibold text-zinc-100 font-figtree">
              My Game Library
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
          >
            <FiX className="w-5 h-5 text-zinc-400" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {games.map((game, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-zinc-800/50 rounded-xl border border-zinc-700 hover:border-zinc-600 transition-colors overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-zinc-100 font-figtree text-lg mb-1">
                        {game.title}
                      </h3>
                      <p className="text-sm text-zinc-400 font-figtree mb-2">
                        {game.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className={`inline-block w-2 h-2 bg-${game.color} rounded-full`}></span>
                        <span className="text-xs text-zinc-500 font-figtree">
                          {game.genre}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-700">
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <p className="text-xs text-zinc-500 font-figtree">Hours Played</p>
                        <p className="text-sm font-medium text-zinc-200 font-figtree">
                          {game.hours}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-zinc-500 font-figtree">Status</p>
                        <p className="text-sm font-medium text-zinc-200 font-figtree">
                          {game.status}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-zinc-700 bg-zinc-800/30">
          <div className="flex items-center justify-between">
            <p className="text-sm text-zinc-400 font-figtree">
              Total games: {games.length}
            </p>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors font-figtree"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Yuna;
