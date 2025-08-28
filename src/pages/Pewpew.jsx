import React from "react";
import MeAvatar from "../assets/pewpew.jpg"; 
import heroCover from "../assets/pwpw_cover.jpg";
import GameAvatar1 from "../assets/letitdie.png";
import GameAvatar2 from "../assets/dc.png";
import GameAvatar3 from "../assets/mk.png";
import GameAvatar4 from "../assets/nba.png";
import GameAvatar5 from "../assets/rl.png";

export default function Pewpew({
  name = "Rocielle Ogad",
  tagline = "Pewpew | The SpeedRunner",
  heroBg,
  avatar = MeAvatar,
  gamesAvatar = [
    GameAvatar1,
    GameAvatar2,
    GameAvatar3,
    GameAvatar4,
    GameAvatar5,
  ],
  about = "Casual gamer with a competitive streak — whether it’s clutching in Rocket League, combo-ing in Mortal Kombat, or grinding through Dead Cells, I’m all about the challenge and the fun.",
  skills = [
    { icon: "🎮", label: "Adaptable Playstyle" },
    { icon: "🎨", label: "Strategy & Map Awareness" },
    { icon: "💻", label: "Problem Solving" },
  ],
  games = [
    {
      title: "Let It Die",
      image: "",
      description:"Fast-paced hack-and-slash roguelike where I’ve mastered survival runs and boss strategies.",
      tech: ["Roguelike", "Survival", "Strategy"],
      link: "#",
      year: 2024,
      rating: 8.7,
      genre: "Action RPG",
    },
    {
      title: "Dead Cells",
      image: "",
      description:"Brutal but rewarding combat with fluid platforming. Focused on speedruns and weapon synergies.",
		tech: ["Speedrun", "Roguelike", "Platformer"],
      link: "#",
      year: 2023,
      rating: 9.1,
      genre: "Roguelike",
    },
    {
      title: "Mortal Kombat",
      image: "",
      description:"Iconic fighting game known for its brutal combat and diverse characters.",
      tech: ["Fighting", "Competitive", "Combos"],
      link: "#",
      year: 2022,
      rating: 8.5,
      genre: "Fighting",
    },
    {
      title: "NBA 2K20",
      image: "",
      description:
        "Realistic basketball simulation with deep mechanics and player customization.",
      tech: ["Teamplay", "Sports Sim", "Competitive"],
      link: "#",
      year: 2021,
      rating: 8.2,
      genre: "Sports",
    },
    {
      title: "Rocket League",
      image: "",
      description:
        "Vehicular soccer game where players control rocket-powered cars to hit a ball into the opposing goal.",
      tech: ["Teamplay", "Aerial", "Competitive"],
      link: "#",
      year: 2020,
      rating: 8.9,
      genre: "Arcade Sports",
    },
  ],
  email = "lych0721@gmail.com",
  github = "https://github.com/lych0721",
  itch = "https://lych0721.itch.io",
  linkedin = "https://linkedin.com/in/lych0721",
  year = 2025,
}) {
  return (
    <div className="min-h-screen bg-[#181A20] text-white font-sans">
      {/* Top Nav */}
      <nav className="flex items-center justify-between px-10 py-6 bg-[#23243a] border-b border-[#23243a]">
        <div /> 
        <div className="flex gap-8 text-[#bdbaf7] font-semibold">
          <a href="#games" className="hover:text-white transition">
            Games
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section with Cover */}
      <section className="relative max-w-7xl mx-auto px-4 py-10">
        <div
          className="absolute inset-0 w-full h-full overflow-hidden z-0"
          style={{
            background: `url(${heroCover}) center/cover no-repeat`,
            opacity: 0.85,
            filter: "brightness(0.7)",
          }}
        ></div>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#23243a]/80 via-[#23243a]/60 to-transparent z-0"></div>
        
		{/* Content */}
        <div className="relative flex flex-col md:flex-row gap-8 items-center z-10 px-5">
          <div className="flex-1 flex flex-col items-start">
            {/* Avatar and Name */}
            <div className="mb-4 self-start">
              <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-[#1e2240] to-[#2d285e] border-4 border-[#AE75DA] flex items-center justify-center shadow-lg">
                <img
                  src={avatar}
                  alt="Profile Avatar"
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-white leading-tight">
              {name}
              <span className="block text-lg md:text-2xl font-medium text-[#E5D9F2] mt-1">
                {tagline}
              </span>
            </h1>
            <a
              href="#games"
              className="inline-block bg-[#6c63ff] hover:bg-[#7f7fff] transition px-8 py-3 rounded-lg font-bold shadow text-white text-lg mt-4"
            >
              What I Play
            </a>
          </div>
          <div className="flex-1 flex justify-center">
            {heroBg && (
              <img
                src={heroBg}
                alt="Hero"
                className="w-80 h-80 object-cover rounded-2xl border-4 border-[#6c63ff] shadow-2xl"
              />
            )}
          </div>
        </div>
      </section>

      {/* Games Showcase - Card Carousel */}
      <section id="games" className="max-w-7xl mx-auto px-8 py-6">
        <h2 className="text-2xl font-bold mb-6">Check these out</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center bg-[#23243a] rounded-2xl shadow-lg p-8 mb-8 px-3">
          <div className="flex-1 ml-0 md:ml-8">
            {/* About section added here */}
            <div className="text-[#bdbaf7] mb-4 text-base">{about}</div>
            <div className="flex flex-wrap gap-3 mb-4">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1 px-4 py-2 bg-[#181631] text-[#6c63ff] rounded-full text-base font-semibold shadow"
                >
                  <span>{skill.icon}</span>
                  {skill.label}
                </span>
              ))}
            </div>
            <div className="text-[#bdbaf7] mb-2">
              <span className="font-semibold">Top Favorite Games:</span> {games.length}
            </div>
            <div className="text-[#bdbaf7] mb-2">
              <span className="font-semibold">Favorite Genre:</span>{" "}
              {games[0]?.genre || "N/A"}
            </div>
          </div>
        </div>
		
        {/* Games List */}
        <h3 className="text-xl font-bold mb-4 text-white">These are the games I play</h3>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {games.map((game, idx) => (
            <div
              key={idx}
              className={`min-w-[220px] bg-[#181A20] rounded-xl shadow-lg p-4 flex flex-col items-center border-2 ${
                idx === 0
                  ? "border-[#FF9A00] shadow-[0_0_24px_#6c63ff44]"
                  : "border-transparent"
              } transition-transform duration-300 hover:scale-90 hover:border-[#6c63ff]`}
            >
              {/* Square Game Avatar/Profile */}
              <div className="w-16 h-16 rounded-lg bg-gradient-to-tr from-[#1e2240] to-[#2d285e] border-2 border-[#AE75DA] flex items-center justify-center shadow mb-3 overflow-hidden">
                <img
                  src={gamesAvatar[idx] || avatar}
                  alt="Game Avatar"
                  className="w-full h-full object-cover"
                  style={{ borderRadius: "0.5rem" }}
                />
              </div>
              <div className="font-bold text-lg text-white mb-1">
                {game.title}
              </div>
              <div className="flex items-center gap-2 text-xs text-[#bdbaf7] mb-1">
                <span className="font-semibold text-yellow-400">
                  ★ {game.rating}
                </span>
                <span>•</span>
                <span>{game.year}</span>
                <span>•</span>
                <span className="capitalize">{game.genre}</span>
              </div>
              <div className="text-xs text-[#bdbaf7] mb-2 text-center">
                {game.description}
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                {game.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-[#6c63ff]/20 text-[#6c63ff] px-2 py-0.5 rounded-full text-xs font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={game.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto px-4 py-1.5 rounded-full bg-[#6c63ff] text-white font-semibold shadow hover:bg-[#23214a] transition"
              >
                View
              </a>
            </div>
          ))}
        </div>
      </section>
              

      {/* Contact */}
      <section id="contact" className="max-w-2xl mx-auto px-4 py-3">
        <div className="bg-[#23243a] rounded-2xl shadow-lg p-8">
          <h2 className="text-xl font-bold text-[#FF9A00] mb-4 text-center">
            Reach Out to Me
          </h2>
          <div className="mb-4 text-center text-[#bdbaf7]">
            Email:{" "}
            <a
              href={`mailto:${email}`}
              className="text-[#6c63ff] underline font-semibold"
            >
              {email}
            </a>
          </div>
          <div className="flex justify-center gap-8 mb-6">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white hover:text-[#6c63ff] transition"
            >
              GitHub
            </a>
            <a
              href={itch}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white hover:text-[#f9d923] transition"
            >
              Itch.io
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white hover:text-[#6c63ff] transition"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex justify-center">
            <a
              href={`mailto:${email}`}
              className="bg-[#6c63ff] hover:bg-[#3a8fff] transition px-8 py-3 rounded-full font-bold shadow text-white text-lg"
            >
              Let’s Collaborate
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-[#23243a] text-[#bdbaf7] rounded-t-3xl mt-12 shadow-lg w-full">
        <span className="font-bold text-lg">
          © {year} Pewpew | The SpeedRunner
        </span>
      </footer>
    </div>
  );
}