import { useState } from "react";
import Beams from "./blocks/Backgrounds/Beams/Beams";
import TextType from "./blocks/TextAnimations/TextType/TextType";
import { SmoothCursor } from "./components/ui/smooth-cursor";
import SearchBar from "./SearchBar";
import Shozune from "./pages/Shozune";

function App() {
  const [currentView, setCurrentView] = useState("home");
  const [currentPlayer, setCurrentPlayer] = useState(null);

  // Available players mapping
  const availablePlayers = {
    "shozune": { name: "Shozune", component: Shozune },
    // Add more players here as you create them
  };

  const handleSearch = (searchTerm) => {
    const normalizedSearch = searchTerm.toLowerCase().trim();
    
    if (availablePlayers[normalizedSearch]) {
      setCurrentPlayer(availablePlayers[normalizedSearch]);
      setCurrentView("player");
    } else {
      // Handle case when player is not found
      alert(`Player "${searchTerm}" not found. Available players: ${Object.keys(availablePlayers).join(", ")}`);
    }
  };

  const handleBackToHome = () => {
    setCurrentView("home");
    setCurrentPlayer(null);
  };

  // Render player profile if viewing a player
  if (currentView === "player" && currentPlayer) {
    const PlayerComponent = currentPlayer.component;
    return (
      <div>
        {/* Back button */}
        <button
          onClick={handleBackToHome}
          className="fixed top-4 left-4 z-50 bg-black/50 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-lg hover:bg-black/70 transition-all duration-300"
        >
          ← Back to Home
        </button>
        <PlayerComponent />
      </div>
    );
  }

  // Render home page
  return (
    <>
      <SmoothCursor />
      <div className="relative h-screen w-screen flex flex-col items-center justify-center pointer-events-none">
        <Beams
          beamWidth={3}
          beamHeight={15}
          beamNumber={20}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
          className="pointer-events-none"
        />

        {/* Header Section */}
        <div className="absolute top-50 left-0 right-0 flex flex-col items-center pt-16 pb-8 ">
          <TextType
            text={["Gaming Portfolio", "developed by", "BisaCool"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="_"
            className="font-figtree text-6xl font-bold text-white mb-4 text-center tracking-tight"
          />
          <p className="font-figtree font-light text-lg text-white/70 text-center max-w-2xl px-4 tracking-tight leading-relaxed">
            Discover elite gamers, their achievements, and the incredible
            journeys that shaped their gaming careers.
          </p>
        </div>

        {/* Search Bar */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
    </>
  );
}

export default App;