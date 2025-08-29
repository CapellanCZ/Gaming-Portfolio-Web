import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Sword, Shield, Target, Trophy, Users, Calendar, MapPin, Star, Clock, Gamepad2, Heart } from 'lucide-react';

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

// Dark Veil Background Component
const NinjaBackground = ({ starCount = 20 }) => {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Animated ninja stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(starCount)].map((_, i) => (
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

// Game Card Component
const GameCard = ({ title, hours, achievements, status, genre, favorite = false }) => (
  <div className="bg-black/30 backdrop-blur-sm border border-red-900/20 rounded-lg p-4 hover:border-red-500/40 transition-all duration-300 hover:scale-105">
    <div className="flex items-start justify-between mb-3">
      <div className="flex items-center gap-2">
        <h4 className="font-semibold text-white">{title}</h4>
        {favorite && <Heart className="w-4 h-4 text-red-400 fill-current" />}
      </div>
      <span className={`text-xs px-2 py-1 rounded-full ${
        status === 'Playing' ? 'bg-green-900/30 text-green-400' :
        status === 'Completed' ? 'bg-blue-900/30 text-blue-400' :
        'bg-gray-900/30 text-gray-400'
      }`}>
        {status}
      </span>
    </div>
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-gray-400 text-sm">Hours Played</span>
        <span className="text-red-300 font-medium">{hours}h</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-400 text-sm">Achievements</span>
        <span className="text-yellow-400 font-medium">{achievements}</span>
      </div>
      <div className="text-xs text-gray-500 mt-2">
        {genre}
      </div>
    </div>
  </div>
);

// Friend Card Component
const FriendCard = ({ name, status, currentGame, avatar }) => (
  <div className="flex items-center gap-3 p-3 bg-black/20 rounded-lg border border-gray-800/50 hover:border-red-900/50 transition-colors">
    <div className="relative">
      <div className="w-10 h-10 bg-gradient-to-r from-red-900/50 to-gray-800 rounded-full flex items-center justify-center text-lg">
        {avatar}
      </div>
      <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-black ${
        status === 'Online' ? 'bg-green-500' :
        status === 'Away' ? 'bg-yellow-500' :
        'bg-gray-500'
      }`} />
    </div>
    <div className="flex-1 min-w-0">
      <p className="font-medium text-white text-sm truncate">{name}</p>
      <p className="text-xs text-gray-400 truncate">
        {status === 'Online' && currentGame ? `Playing ${currentGame}` : status}
      </p>
    </div>
  </div>
);

// Achievement Badge
const AchievementBadge = ({ title, description, rarity = "common", unlocked = true, game }) => {
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
      <p className="text-xs text-gray-400 mb-1">{description}</p>
      <p className="text-xs text-gray-500">{game}</p>
    </div>
  );
};

// Profile Header Component
const ProfileHeader = ({ 
  username, 
  title, 
  location, 
  gamingSince, 
  avatar, 
  isOnline = true,
  totalStats,
  favoriteGenres 
}) => (
  <div className="flex flex-col lg:flex-row items-start gap-8 mb-12">
    {/* Avatar and Basic Info */}
    <div className="flex flex-col items-center lg:items-start">
      <div className="relative mb-4">
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-red-900 to-black border-4 border-red-500/50 flex items-center justify-center shadow-2xl">
          <div className="text-6xl">{avatar}</div>
        </div>
        {isOnline && (
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-black flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        )}
      </div>
      
      <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-2">
        {username}
      </h1>
      <p className="text-gray-400 mb-4 text-center lg:text-left">{title}</p>
      
      <div className="flex items-center gap-4 text-sm text-gray-400">
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          <span>Gaming since {gamingSince}</span>
        </div>
      </div>
    </div>

    {/* Total Stats Grid */}
    <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-4">
      {totalStats.map((stat, index) => (
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
);

// About Section Component
const AboutSection = ({ description, favoriteGenres }) => (
  <div className="bg-black/40 backdrop-blur-sm border border-red-900/30 rounded-lg p-6">
    <h3 className="text-xl font-bold mb-4 text-red-400">About</h3>
    <p className="text-gray-300 leading-relaxed">{description}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {favoriteGenres.map((genre) => (
        <span key={genre} className="px-3 py-1 bg-red-900/30 text-red-300 rounded-full text-sm">
          {genre}
        </span>
      ))}
    </div>
  </div>
);

// Gaming Setup Component
const GamingSetup = ({ setup }) => (
  <div className="bg-black/40 backdrop-blur-sm border border-red-900/30 rounded-lg p-6">
    <h3 className="text-lg font-bold mb-4 text-red-400">Shadow Setup</h3>
    <div className="space-y-3 text-sm">
      {Object.entries(setup).map(([key, value]) => (
        <div key={key} className="flex justify-between">
          <span className="text-gray-400">{key}</span>
          <span className="text-gray-300">{value}</span>
        </div>
      ))}
    </div>
  </div>
);

// Current Status Component
const CurrentStatus = ({ currentGame, gameMode, isLive = false }) => (
  <div className="bg-black/40 backdrop-blur-sm border border-red-900/30 rounded-lg p-6">
    <h3 className="text-lg font-bold mb-4 text-red-400">Current Status</h3>
    <div className="text-center">
      <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
        <Gamepad2 className="w-8 h-8 text-black" />
      </div>
      <h4 className="font-bold text-green-400">Currently Playing</h4>
      <p className="text-sm text-gray-400">{currentGame} - {gameMode}</p>
      {isLive && (
        <div className="mt-3 flex items-center justify-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-green-300">Live</span>
        </div>
      )}
    </div>
  </div>
);

// Weekly Activity Component
const WeeklyActivity = ({ weeklyStats }) => (
  <div className="bg-black/40 backdrop-blur-sm border border-red-900/30 rounded-lg p-6">
    <h3 className="text-lg font-bold mb-4 text-red-400">This Week</h3>
    <div className="space-y-2">
      {Object.entries(weeklyStats).map(([key, value]) => (
        <div key={key} className="flex justify-between items-center">
          <span className="text-gray-300">{key}</span>
          <span className={`font-medium ${
            key === 'Hours Played' ? 'text-blue-400' :
            key === 'Games Played' ? 'text-green-400' :
            key === 'Achievements' ? 'text-yellow-400' :
            'text-purple-400'
          }`}>{value}</span>
        </div>
      ))}
    </div>
  </div>
);

const NinjaGamingProfile = ({ 
  profileData = {
    username: "Shozune",
    title: "Professional Gamer",
    location: "Cavite, Philippines",
    gamingSince: "2007",
    avatar: "🥷",
    isOnline: true,
    description: "Once who was a noob in gaming, now a pro. Shozune is a dedicated gamer with over 12 years of experience in competitive gaming. Known for his strategic mind and quick reflexes, he has made a name for himself in the esports community. When he's not gaming, Shozune enjoys streaming his gameplay and sharing tips with his followers.",
    favoriteGenres: ['Action RPG', 'Tactical Shooter', 'Adventure', 'Strategy', 'Indie', 'Roguelike', 'MMORPG','Action'],
    currentGame: "Roblox",
    gameMode: "Grow a Garden",
    isLive: true
  },
  totalStats = [
    { icon: Clock, label: "Total Hours", value: "5,234h", color: "text-blue-400" },
    { icon: Trophy, label: "Achievements", value: "1,249", color: "text-yellow-400" },
    { icon: Gamepad2, label: "Games Owned", value: "124", color: "text-green-400" },
    { icon: Target, label: "Completion Rate", value: "62%", color: "text-purple-400" },
  ],
  favoriteGames = [
    { title: "Roblox", hours: 1213, achievements: "259/520", status: "Playing", genre: "Adventure", favorite: true },
    { title: "Minecraft", hours: 624, achievements: "53/122", status: "Playing", genre: "Adventure", favorite: true },
    { title: "Valorant", hours: 827, achievements: "28/35", status: "Playing", genre: "Tactical Shooter / FPS", favorite:false },
    { title: "Pokemon", hours: 423, achievements: "424/1,025", status: "Playing", genre: "Action Adventure", favorite: true },
    { title: "League Of Legends", hours: 127, achievements: "34/34", status: "Playing", genre: "MOBA", favorite: false },
    { title: "Warframe", hours: 1310, achievements: "42/193", status: "Playing", genre: "Sci-fi", favorite: true },
  ],
  friends = [
    { name: "Kash_Breezy", status: "Online", currentGame: "Roblox", avatar: "🥷" },
    { name: "Leecher", status: "Online", currentGame: "Valorant", avatar: "⚔️" },
    { name: "Katsuhiroshi", status: "Offline", currentGame: null, avatar: "🏹" },
    { name: "JEPV", status: "Online", currentGame: "Valorant", avatar: "👤" },
    { name: "lichhh29", status: "Online", currentGame: "Roblox", avatar: "🗾" },
    { name: "Mitsu", status: "Online", currentGame: "Valorant", avatar: "🌸" },
    { name: "Kon", status: "Online", currentGame: "League of Legends", avatar: "🌙" },
    { name: "Gumiii", status: "Online", currentGame: "Roblox", avatar: "🔥" },
  ],
  achievements = [
    { title: "Master Collector", description: "Own 100+ games in library", rarity: "epic", unlocked: true, game: "Steam Profile" },
    { title: "Completionist", description: "100% completion in 5 games", rarity: "legendary", unlocked: true, game: "Global" },
    { title: "Night Owl", description: "Play 100 hours after midnight", rarity: "rare", unlocked: true, game: "Global" },
    { title: "Social Gamer", description: "Play co-op games for 50 hours", rarity: "common", unlocked: true, game: "Global" },
    { title: "Speedrunner", description: "Complete any game under par time", rarity: "epic", unlocked: true, game: "Minecraft" },
    { title: "Legendary Hunter", description: "Defeat all bosses in Elden Ring", rarity: "legendary", unlocked: false, game: "Elden Ring" },
  ],
  gamingSetup = {
    "GPU": "None",
    "CPU": "AMD Ryzen 5 5600G",
    "RAM": "16GB",
    "Monitor": "100Hz OLED"
  },
  weeklyStats = {
    "Hours Played": "47.2h",
    "Games Played": "3",
    "Achievements": "3",
    "Most Played": "Roblox"
  }
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <SmoothCursor />
      <NinjaBackground />
      
      {/* Header */}
      <div className={`relative z-10 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="container mx-auto px-6 pt-12">
          {/* Profile Header */}
          <ProfileHeader {...profileData} totalStats={totalStats} />

          {/* Navigation Tabs */}
          <div className="flex gap-1 mb-8 bg-black/30 backdrop-blur-sm rounded-lg p-1 border border-gray-800/50">
            {['overview', 'games', 'achievements', 'friends'].map((tab) => (
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
                  <AboutSection 
                    description={profileData.description} 
                    favoriteGenres={profileData.favoriteGenres} 
                  />

                  <div className="bg-black/40 backdrop-blur-sm border border-red-900/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4 text-red-400">Favorite Games</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {favoriteGames.slice(0, 4).map((game, index) => (
                        <GameCard key={index} {...game} />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'games' && (
                <div className="bg-black/40 backdrop-blur-sm border border-red-900/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-red-400">Game Library</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {favoriteGames.map((game, index) => (
                      <GameCard key={index} {...game} />
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

              {activeTab === 'friends' && (
                <div className="bg-black/40 backdrop-blur-sm border border-red-900/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-red-400">Gaming Circle</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {friends.map((friend, index) => (
                      <FriendCard key={index} {...friend} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Current Status */}
              <CurrentStatus 
                currentGame={profileData.currentGame}
                gameMode={profileData.gameMode}
                isLive={profileData.isLive}
              />

              {/* Gaming Setup */}
              <GamingSetup setup={gamingSetup} />

              {/* Online Friends */}
              <div className="bg-black/40 backdrop-blur-sm border border-red-900/30 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4 text-red-400">Online Now</h3>
                <div className="space-y-3">
                  {friends.filter(f => f.status === 'Online').slice(0, 4).map((friend, index) => (
                    <FriendCard key={index} {...friend} />
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <button className="text-sm text-red-400 hover:text-red-300 transition-colors">
                    View All Friends ({friends.length})
                  </button>
                </div>
              </div>

              {/* Weekly Activity */}
              <WeeklyActivity weeklyStats={weeklyStats} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NinjaGamingProfile;