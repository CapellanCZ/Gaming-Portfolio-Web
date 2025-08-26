import { useState, useEffect } from "react";

const SearchBar = ({ 
  onSearch, 
  className = "",
  placeholder = "Search player IGN here...",
  availablePlayers = [],
  isLoading = false,
  errorMessage = "",
  showSuggestions = true
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchState, setSearchState] = useState("idle"); // idle, searching, success, error

  // Filter suggestions based on search term
  useEffect(() => {
    if (searchTerm && availablePlayers.length > 0) {
      const filtered = availablePlayers.filter(player =>
        player.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filtered);
      setShowDropdown(filtered.length > 0 && showSuggestions);
    } else {
      setSuggestions([]);
      setShowDropdown(false);
    }
  }, [searchTerm, availablePlayers, showSuggestions]);

  // Update search state based on props
  useEffect(() => {
    if (isLoading) {
      setSearchState("searching");
    } else if (errorMessage) {
      setSearchState("error");
    } else {
      setSearchState("idle");
    }
  }, [isLoading, errorMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setSearchState("searching");
      setShowDropdown(false);
      onSearch(searchTerm.trim());
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    if (searchState === "error") {
      setSearchState("idle");
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowDropdown(false);
    setSearchState("searching");
    onSearch(suggestion);
  };

  const handleInputFocus = () => {
    if (suggestions.length > 0 && showSuggestions) {
      setShowDropdown(true);
    }
  };

  const handleInputBlur = () => {
    // Delay hiding dropdown to allow suggestion clicks
    setTimeout(() => setShowDropdown(false), 200);
  };

  return (
    <div className="relative">
      <form 
        onSubmit={handleSubmit}
        className={`relative flex items-center w-full max-w-2xl bg-[#2d2d2d]/80 backdrop-blur-lg border ${
          searchState === "error" ? "border-red-500/50" : "border-white/10"
        } rounded-full p-1 shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5 focus-within:-translate-y-0.5 group pointer-events-auto ${className}`}
      >
        {/* Search Icon */}
        <span className="flex items-center justify-center px-5 py-4 text-white/60 transition-all duration-300 group-focus-within:text-white pointer-events-none">
          {searchState === "searching" ? (
            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="32" strokeDashoffset="32">
                <animate attributeName="stroke-dasharray" dur="2s" values="0 32;16 16;0 32;0 32" repeatCount="indefinite"/>
                <animate attributeName="stroke-dashoffset" dur="2s" values="0;-16;-32;-32" repeatCount="indefinite"/>
              </circle>
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-5 h-5 transition-all duration-300 group-focus-within:stroke-[2.5]"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          )}
        </span>

        {/* Input Field */}
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          disabled={isLoading}
          className="flex-1 bg-transparent border-none outline-none text-white/90 text-base font-figtree px-0 py-4 placeholder:text-white/40 transition-colors duration-300 focus:placeholder:text-white/30 disabled:opacity-50"
          placeholder={isLoading ? "Searching..." : placeholder}
          autoComplete="off"
        />

        {/* Divider */}
        <span className="mx-2 w-px h-6 bg-white/10 pointer-events-none" />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading || !searchTerm.trim()}
          className="relative flex items-center justify-center bg-white/5 border border-white/10 rounded-3xl text-white/70 p-3 ml-1 mr-3 transition-all duration-300 overflow-hidden hover:bg-white/10 hover:border-white/20 hover:text-white active:scale-95 pointer-events-auto cursor-pointer group disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ "--stroke-width": "2" }}
          onMouseEnter={(e) =>
            !isLoading && e.currentTarget.style.setProperty("--stroke-width", "2.5")
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

      {/* Suggestions Dropdown - Conditional Rendering */}
      {showDropdown && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[#2d2d2d]/90 backdrop-blur-lg border border-white/10 rounded-lg shadow-2xl z-10 max-h-60 overflow-y-auto">
          <div className="p-2">
            <p className="text-xs text-white/50 px-3 py-1 font-figtree">Suggestions:</p>
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="w-full text-left px-3 py-2 text-white/80 hover:bg-white/10 rounded-md transition-colors duration-200 font-figtree text-sm"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Error Message - Conditional Rendering */}
      {searchState === "error" && errorMessage && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-red-900/20 backdrop-blur-sm border border-red-500/30 rounded-lg p-3 z-10">
          <p className="text-red-400 text-sm font-figtree">{errorMessage}</p>
        </div>
      )}

      {/* Success Message - Conditional Rendering */}
      {searchState === "success" && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-green-900/20 backdrop-blur-sm border border-green-500/30 rounded-lg p-3 z-10">
          <p className="text-green-400 text-sm font-figtree">Player found! Redirecting...</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;