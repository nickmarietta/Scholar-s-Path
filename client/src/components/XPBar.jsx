export default function XPBar({ xp, xpNeeded }) {
    const percent = Math.min((xp / xpNeeded) * 100, 100);
  
    return (
      <div className="w-full max-w-md mx-auto mt-4">
        <div className="text-sm text-white mb-1">XP: {xp} / {xpNeeded}</div>
        <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden shadow-inner">
          <div
            className="h-full bg-purple-500 transition-all duration-500"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    );
  }
  