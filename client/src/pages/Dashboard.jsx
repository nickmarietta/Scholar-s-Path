import XPBar from '../components/XPBar';

export default function Dashboard({ player }) {
  const xpNeeded = player.level * 100;

  // Assuming you have character images mapped by ID
  const characterImages = {
    'logimancer': 'logimancer.png',
    'bio-alchemist': 'bio-alchemist.png',
    'arcane-analyst': 'arcane-analyst.png',
    // Add all other characters here...
  };

  const characterNameFormatted = player.character?.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');

  return (
    <div
      className="min-h-screen w-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/ss.jpg')" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-center gap-10">
        {/* LEFT: Character Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          {player.character && (
            <img
              src={characterImages[player.character]}
              alt={player.character}
              className="w-64 h-64 object-contain rounded-xl border-4 border-purple-500 bg-white/60 p-2 shadow-md"
            />
          )}
        </div>

        {/* RIGHT: Player Info & Actions */}
        <div className="w-full md:w-1/2 bg-yellow-50/90 text-black rounded-2xl border-4 border-purple-400 p-8 shadow-lg">
          <h1 className="text-4xl font-uncial text-purple-800 text-center mb-6">
            Welcome, Adventurer!
          </h1>

          {player.character ? (
            <>
              <p className="text-xl font-semibold text-center mb-2">
                You’ve chosen: <span className="text-purple-700">{characterNameFormatted}</span>
              </p>
              <p className="text-lg text-center mb-4">Level: {player.level}</p>

              {/* XP BAR */}
              <XPBar xp={player.xp} xpNeeded={xpNeeded} />

              {/* Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/tests"
                  className="px-5 py-2 bg-purple-700 hover:bg-purple-800 text-white rounded-lg shadow text-lg"
                >
                  Take a Test
                </a>
                <a
                  href="/skill-tree"
                  className="px-5 py-2 bg-green-700 hover:bg-green-800 text-white rounded-lg shadow text-lg"
                >
                  View Skill Tree
                </a>
              </div>
            </>
          ) : (
            <p className="text-center text-gray-600">No character selected.</p>
          )}
        </div>
      </div>
    </div>
  );
}
