import React, { useState } from "react";
import { Trophy, Calendar, MapPin } from "lucide-react";
import Valorant from "../assets/Valorant.jpg";
import League from "../assets/League.png";
import WildRift from "../assets/WildRift.png";
import HOK from "../assets/HOK.png";
import CS2 from "../assets/CS2.png";
import Achas from "../assets/Achas.jpg"; // 

const TwitchProfile = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const games = [
    { title: "Valorant", img: Valorant },
    { title: "League of Legends", img: League },
    { title: "Wild Rift", img: WildRift },
    { title: "Honor of Kings", img: HOK },
    { title: "CS2", img: CS2 },
  ];

  const milestones = [
    { title: "Valorant", description: "Ascendant 3 Highest Peak Rank" },
    { title: "Wild Rift", description: "Was able to be part of Team Dasma for the E-Palarong Pambansa and Reached Grandmaster Highest Peak Rank" },
    { title: "Wild Rift", description: "Top 30 out of 100+ teams in Wild Rift Underground Tournament" },
    { title: "Honor of Kings", description: "Represent NUD Sigma in Honor of Kings PKL Tournament" },
  ];

  return (
    <div className="min-h-screen bg-[#0e0e10] text-white font-sans flex flex-col">
      {/* Header Banner */}
      <div className="relative h-64 bg-gradient-to-r from-purple-800 via-purple-600 to-indigo-700 flex items-center justify-center shadow-lg">
        <h1 className="text-5xl font-extrabold text-white tracking-wide drop-shadow-[0_0_15px_#9146FF]">
          Anjobhel Achas Gaming Profile
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 container mx-auto -mt-16 relative z-10 flex flex-col gap-10">
        {/* Profile Section */}
        <div className="bg-[#18181b]/80 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-purple-600/40 flex flex-col lg:flex-row items-center gap-8">
          {/* Avatar */}
          <div className="w-36 h-36 rounded-full border-4 border-purple-400 overflow-hidden shadow-[0_0_25px_#9146FF]">
            <img
              src={Achas}
              alt="Anjobhel Achas"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Info */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-purple-400">Mitsu</h2>
            <p className="text-gray-400">
              Real Name: <span className="text-purple-300">Anjobhel Achas</span>
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-3 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-400" /> Philippines
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-purple-400" /> Joined 2020
              </span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div>
          <div className="flex gap-6 justify-center border-b border-gray-800 pb-3 mb-6">
            {["overview", "games", "milestones"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 font-semibold rounded-full transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-purple-600 text-white shadow-[0_0_10px_#9146FF]"
                    : "text-gray-400 hover:text-white hover:bg-purple-500/30"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "overview" && (
            <div className="bg-[#18181b]/80 backdrop-blur-md p-6 rounded-2xl border border-purple-500/40 shadow-lg">
              <h3 className="text-2xl font-bold text-purple-400 mb-3">About</h3>
              <p className="text-gray-300 leading-relaxed">
                Welcome to my corner of the gaming world! I’m Anjobhel Achas, a 3rd-year IT student who balances code with epic gameplay. Join me as I stream, level up, and share the milestones that fuel both my studies and my passion for gaming.
              </p>
            </div>
          )}

          {activeTab === "games" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {games.map((game, i) => (
                <div
                  key={i}
                  className="relative group cursor-pointer rounded-2xl overflow-hidden bg-[#18181b]/70 backdrop-blur-md border border-purple-500/30 hover:border-purple-400/60 shadow-md hover:shadow-[0_0_20px_#9146FF] transition"
                >
                  <img
                    src={game.img}
                    alt={game.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-purple-300">
                      {game.title}
                    </h4>
                    <p className="text-gray-400 text-sm">Click to view more</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "milestones" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {milestones.map((ms, i) => (
                <div
                  key={i}
                  className="bg-[#18181b]/70 backdrop-blur-md rounded-2xl p-6 border border-purple-500/40 shadow-md hover:shadow-[0_0_15px_#9146FF] transition"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="w-5 h-5 text-purple-400" />
                    <h4 className="font-semibold text-white">{ms.title}</h4>
                  </div>
                  <p className="text-gray-400 text-sm">{ms.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#18181b] py-8 text-center text-gray-500 text-sm border-t border-purple-500/20">
        © 2025 Twitch Profile. All rights reserved.
      </footer>
    </div>
  );
};

export default TwitchProfile;
