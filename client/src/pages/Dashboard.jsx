export default function Dashboard({ player }) {
  console.log('Player:', player);

  return (
    <div className="min-h-screen w-screen bg-gray-900 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-6 text-yellow-300 font-uncial">
          Welcome, Adventurer!
        </h1>

        {player?.character ? (
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-purple-500 max-w-xl mx-auto">
            <p className="text-xl mb-2">
               You’ve chosen: <span className="font-bold capitalize">{player.character}</span>
            </p>
            <p className="text-lg">XP: {player.xp}</p>
            <p className="text-lg mb-4">Level: {player.level}</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/tests"
                className="px-4 py-2 bg-purple-200 hover:bg-purple-300 text-black font-semibold rounded shadow transition"
              >
                Try a Test
              </a>
              <a
                href="/skill-tree"
                className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded text-black"
              >
                 View Skill Tree
              </a>
            </div>
          </div>
        ) : (
          <p className="text-lg text-gray-400 mt-4">No character selected.</p>
        )}
      </div>
    </div>
  );
}
