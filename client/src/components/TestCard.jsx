import React from 'react';

export default function TestCard({ test, playerLevel, onSelect }) {
  const isLocked = playerLevel < test.levelRequired;

  return (
    <div
      onClick={() => !isLocked && onSelect(test)}
      className={`w-[270px] p-5 rounded-2xl border-[3px] transition transform duration-300 shadow-md
        ${isLocked
          ? 'bg-yellow-200 border-gray-400 opacity-60 cursor-not-allowed'
          : 'bg-yellow-50 border-purple-500 hover:scale-105 cursor-pointer'}
      `}
      style={{
        backgroundImage: "url('/parchment.avif')",
        backgroundSize: 'cover',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-center text-xl font-uncial text-purple-900">
          {test.name}
        </h2>

        <p className="text-sm text-gray-800 text-center italic">{test.description}</p>

        <div className="mt-2 text-xs text-center text-gray-600">
          <p><span className="font-bold">XP:</span> {test.xp}</p>
          <p><span className="font-bold">Questions:</span> {test.questions.length}</p>
        </div>

        {isLocked ? (
          <p className="mt-3 text-center text-sm text-red-700 font-semibold">
            Requires Level {test.levelRequired}
          </p>
        ) : (
          <div className="text-center">
            <button className="mt-4 px-4 py-1.5 rounded bg-purple-700 hover:bg-purple-800 text-white text-sm">
              Begin Quest
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
