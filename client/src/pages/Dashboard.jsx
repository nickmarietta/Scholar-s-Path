import XPBar from '../components/XPBar';

export default function Dashboard({ player }) {
  const xpNeeded = player.level * 100;

  const characterImages = {
    'logimancer': 'logimancer.png',
    'bio-alchemist': 'bio-alchemist.png',
    'arcane-analyst': 'arcane-analyst.png',
    'eco-sorcerer': 'eco-sorcerer.png',
  };

  const characterNameFormatted = player.character?.split('-')
    .map(w => w[0].toUpperCase() + w.slice(1))
    .join(' ');

  return (
    <div
      className="min-h-screen w-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/castle.jpg')" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8 items-start justify-center">
        
        <div className="w-full md:w-1/3 flex justify-center">
          {player.character && (
            <img
              src={characterImages[player.character]}
              alt={player.character}
              className="w-60 h-60 object-contain rounded-xl border-4 border-yellow-400 bg-white/20 p-2 shadow-lg"
            />
          )}
        </div>

        <div className="w-full md:w-2/3 bg-gray-900/80 rounded-xl p-6 shadow-2xl border-2 border-purple-500">
          <h1 className="text-3xl font-uncial text-yellow-300 mb-4 text-center">
            Welcome, Adventurer!
          </h1>

          {player.character ? (
            <>
              <p className="text-lg mb-1 text-center">
                <span className="text-gray-300">Class:</span> <span className="font-uncial">{characterNameFormatted}</span>
              </p>
              <p className="text-lg mb-3 text-center">
                <span className="text-gray-300">Level:</span> {player.level}
              </p>

              <div className="mb-4">
                <XPBar xp={player.xp} xpNeeded={xpNeeded} />
              </div>

              <div className="mt-4 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/tests"
                  className="px-4 py-2 bg-green-600 hover:bg-green-500 text-black rounded shadow font-semibold text-center"
                >
                  Take a Test
                </a>
                <a
                  href="/skill-tree"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded shadow font-semibold text-center"
                >
                  View Skill Tree
                </a>
              </div>
            </>
          ) : (
            <p className="text-center text-gray-400 mt-4">No character selected.</p>
          )}
        </div>
      </div>

      <div className="text-center mt-10 text-yellow-200 italic drop-shadow">
        "Every step forward is another scroll of knowledge in your spellbook."
      </div>
    </div>
  );
}
