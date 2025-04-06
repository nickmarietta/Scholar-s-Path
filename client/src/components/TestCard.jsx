export default function TestCard({ test, onSelect, playerLevel }) {
  const isLocked = playerLevel < test.levelRequired;

  return (
    <div
      onClick={() => !isLocked && onSelect(test)}
      className={`relative w-56 p-4 rounded-xl border-2 ${
        isLocked ? 'bg-gray-700 border-gray-500 opacity-50 cursor-not-allowed' 
                 : 'bg-white/80 border-purple-400 hover:scale-105 hover:shadow-xl cursor-pointer transition'
      }`}
    >
      <h2 className="text-lg font-uncial text-purple-800 text-center mb-1">{test.name}</h2>
      <p className="text-sm text-gray-700 text-center">{test.description}</p>

      <div className="mt-3 text-sm text-center text-gray-600">
        XP: <span className="font-semibold text-green-700">{test.xpReward}</span><br />
        Level Required: <span className="font-semibold text-blue-700">{test.levelRequired}</span>
      </div>

      {isLocked && (
        <div className="absolute top-2 right-2 text-xs text-red-500 font-bold">
          Locked
        </div>
      )}
    </div>
  );
}
