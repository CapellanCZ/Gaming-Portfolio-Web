import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Sword, Shield, Target, Trophy, Users, Calendar, MapPin, Star } from 'lucide-react';

// Smooth Cursor Component
const SmoothCursor = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    const cursorInner = document.createElement('div');
    
    cursor.className = 'fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100 ease-out';
    cursorInner.className = 'w-full h-full bg-white rounded-full opacity-50';
    
    cursor.appendChild(cursorInner);
    document.body.appendChild(cursor);
    
    const updateCursor = (e) => {
      cursor.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
    };
    
    document.addEventListener('mousemove', updateCursor);
    
    return () => {
      document.removeEventListener('mousemove', updateCursor);
      cursor.remove();
    };
  }, []);
  
  return null;
};

// Dark Veil Background Component (simplified for this example)
const NinjaBackground = () => {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Animated ninja stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            <div className="w-1 h-1 bg-red-500 rounded-full opacity-30" />
          </div>
        ))}
      </div>
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};

// Stats Component
const StatCard = ({ icon: Icon, label, value, color = "text-red-400" }) => (
  <div className="bg-black/40 backdrop-blur-sm border border-red-900/30 rounded-lg p-4 hover:border-red-500/50 transition-all duration-300">
    <div className="flex items-center gap-3">
      <div className={`p-2 rounded-lg bg-gradient-to-r from-red-900/50 to-red-800/50`}>
        <Icon className={`w-5 h-5 ${color}`} />
      </div>
      <div>
        <p className="text-gray-400 text-sm">{label}</p>
        <p className={`font-bold text-lg ${color}`}>{value}</p>
      </div>
    </div>
  </div>
);

// Achievement Badge
const AchievementBadge = ({ title, description, rarity = "common", unlocked = true }) => {
  const rarityColors = {
    common: "border-gray-500 bg-gray-900/50",
    rare: "border-blue-500 bg-blue-900/20",
    epic: "border-purple-500 bg-purple-900/20",
    legendary: "border-yellow-500 bg-yellow-900/20"
  };

  return (
    <div className={`p-3 rounded-lg border ${rarityColors[rarity]} ${!unlocked && 'opacity-50 grayscale'} transition-all duration-300 hover:scale-105`}>
      <div className="flex items-center gap-2 mb-1">
        <Trophy className={`w-4 h-4 ${unlocked ? 'text-yellow-400' : 'text-gray-600'}`} />
        <h4 className="font-semibold text-sm text-white">{title}</h4>
      </div>
      <p className="text-xs text-gray-400">{description}</p>
    </div>
  );
};

// Recent Match Component
const RecentMatch = ({ game, result, score, date, map }) => (
  <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg border border-gray-800/50 hover:border-red-900/50 transition-colors">
    <div className="flex items-center gap-3">
      <div className={`w-3 h-3 rounded-full ${result === 'Victory' ? 'bg-green-500' : 'bg-red-500'}`} />
      <div>
        <p className="font-medium text-white text-sm">{game}</p>
        <p className="text-xs text-gray-400">{map} • {date}</p>
      </div>
    </div>
    <div className="text-right">
      <p className={`font-bold text-sm ${result === 'Victory' ? 'text-green-400' : 'text-red-400'}`}>
        {result}
      </p>
      <p className="text-xs text-gray-400">{score}</p>
    </div>
  </div>
);

const NinjaGamingProfile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Target, label: "Headshot %", value: "73.2%", color: "text-red-400" },
    { icon: Trophy, label: "Wins", value: "1,247", color: "text-yellow-400" },
    { icon: Shield, label: "K/D Ratio", value: "2.84", color: "text-green-400" },
    { icon: Sword, label: "Melee Kills", value: "892", color: "text-purple-400" },
  ];

  const achievements = [
    { title: "Shadow Master", description: "Complete 100 stealth kills", rarity: "legendary", unlocked: true },
    { title: "Silent Assassin", description: "Win 5 rounds without being detected", rarity: "epic", unlocked: true },
    { title: "Blade Dancer", description: "Get 50 consecutive melee kills", rarity: "rare", unlocked: true },
    { title: "Ghost Walker", description: "Play 1000 hours in stealth games", rarity: "common", unlocked: false },
  ];

  const recentMatches = [
    { game: "Valorant", result: "Victory", score: "24-12-6", date: "2 hours ago", map: "Haven" },
    { game: "CS2", result: "Victory", score: "18-8-4", date: "5 hours ago", map: "Dust2" },
    { game: "Apex Legends", result: "Defeat", score: "8-3-2", date: "1 day ago", map: "King's Canyon" },
    { game: "Valorant", result: "Victory", score: "21-15-8", date: "2 days ago", map: "Bind" },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <SmoothCursor />
      <NinjaBackground />
      
      {/* Header */}
      <div className={`relative z-10 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="container mx-auto px-6 pt-12">
          {/* Profile Header */}
          <div className="flex flex-col lg:flex-row items-start gap-8 mb-12">
            {/* Avatar and Basic Info */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative mb-4">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-red-900 to-black border-4 border-red-500/50 flex items-center justify-center shadow-2xl">
                  <div className="text-6xl">🥷</div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-black flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              
              <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-2">
                Shozune
              </h1>
              <p className="text-gray-400 mb-4 text-center lg:text-left">Professional Stealth Gamer</p>
              
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>Tokyo, Japan</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Joined 2019</span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 delay-${index * 100}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <StatCard {...stat} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex gap-1 mb-8 bg-black/30 backdrop-blur-sm rounded-lg p-1 border border-gray-800/50">
            {['overview', 'matches', 'achievements'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-red-900/50 text-red-400 border border-red-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Content Sections */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div className="bg-black/40 backdrop-blur-sm border border-red-900/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-red-400">About</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Master of shadows and precision, Shozune has dominated the competitive gaming scene for over 5 years. 
                      Specializing in tactical shooters and stealth-based gameplay, they are known for their exceptional aim, 
                      strategic thinking, and ability to remain undetected in the most challenging situations.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {['Valorant', 'CS2', 'Rainbow Six Siege', 'Apex Legends'].map((game) => (
                        <span key={game} className="px-3 py-1 bg-red-900/30 text-red-300 rounded-full text-sm">
                          {game}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-black/40 backdrop-blur-sm border border-red-900/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-red-400">Recent Activity</h3>
                    <div className="space-y-3">
                      {recentMatches.map((match, index) => (
                        <RecentMatch key={index} {...match} />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'matches' && (
                <div className="bg-black/40 backdrop-blur-sm border border-red-900/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-red-400">Match History</h3>
                  <div className="space-y-3">
                    {recentMatches.map((match, index) => (
                      <RecentMatch key={index} {...match} />
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'achievements' && (
                <div className="bg-black/40 backdrop-blur-sm border border-red-900/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-red-400">Achievements</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => (
                      <AchievementBadge key={index} {...achievement} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Rank Card */}
              <div className="bg-black/40 backdrop-blur-sm border border-red-900/30 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4 text-red-400">Current Rank</h3>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg">
                    <Star className="w-10 h-10 text-black" />
                  </div>
                  <h4 className="font-bold text-yellow-400">Immortal III</h4>
                  <p className="text-sm text-gray-400">2,847 RR</p>
                </div>
              </div>

              {/* Team */}
              <div className="bg-black/40 backdrop-blur-sm border border-red-900/30 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4 text-red-400">Team</h3>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-red-900/50 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Shadow Clan</p>
                    <p className="text-xs text-gray-400">Professional Esports</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300">
                  Elite competitive team specializing in tactical FPS games with multiple championship titles.
                </p>
              </div>

              {/* Streaming Schedule */}
              <div className="bg-black/40 backdrop-blur-sm border border-red-900/30 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4 text-red-400">Streaming</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Monday</span>
                    <span className="text-gray-400">8PM - 12AM JST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Wednesday</span>
                    <span className="text-gray-400">8PM - 12AM JST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Saturday</span>
                    <span className="text-gray-400">6PM - 2AM JST</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-2 bg-purple-900/30 border border-purple-500/30 rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-purple-300">Live Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NinjaGamingProfile;