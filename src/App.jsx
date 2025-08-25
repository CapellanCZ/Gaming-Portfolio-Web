import Beams from "./blocks/Backgrounds/Beams/Beams";
import TextType from "./blocks/TextAnimations/TextType/TextType";
import { SmoothCursor } from "./components/ui/smooth-cursor";

function App() {
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

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <form className="relative flex items-center w-full max-w-2xl bg-[#2d2d2d]/80 backdrop-blur-lg border border-white/10 rounded-full p-1 shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5 focus-within:-translate-y-0.5 group pointer-events-auto">
            <span className="flex items-center justify-center px-5 py-4 text-white/60 transition-all duration-300 group-focus-within:text-white pointer-events-none">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5 transition-all duration-300 group-focus-within:stroke-[2.5]"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </span>
            <input
              type="text"
              className="flex-1 bg-transparent border-none outline-none text-white/90 text-base font-figtree px-0 py-4 placeholder:text-white/40 transition-colors duration-300 focus:placeholder:text-white/30"
              placeholder="Search player IGN here..."
              autoComplete="off"
            />
            <span className="mx-2 w-px h-6 bg-white/10 pointer-events-none" />
            <button
              type="submit"
              className="relative flex items-center justify-center bg-white/5 border border-white/10 rounded-3xl text-white/70 p-3 ml-1 mr-3 transition-all duration-300 overflow-hidden hover:bg-white/10 hover:border-white/20 hover:text-white active:scale-95 pointer-events-auto cursor-pointer group"
              style={{ "--stroke-width": "2" }}
              onMouseEnter={(e) =>
                e.currentTarget.style.setProperty("--stroke-width", "2.5")
              }
              onMouseLeave={(e) =>
                e.currentTarget.style.setProperty("--stroke-width", "2")
              }
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4 transition-all duration-300 pointer-events-none"
                style={{ strokeWidth: "var(--stroke-width)" }}
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12,5 19,12 12,19" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
