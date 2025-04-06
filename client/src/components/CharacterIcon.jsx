import React from 'react';

export default function CharacterIcon({ character, onSelect }) {
  return (
    <div
      onClick={() => onSelect(character)}
      className="w-64 h-auto p-6 border-2 border-purple-300 rounded-xl shadow-lg cursor-pointer hover:scale-105 transition bg-white/70"
    >
      <img
        src={character.img}
        alt={character.name}
        className="w-40 h-40 mx-auto object-contain"
      />
      <h2 className="text-xl mt-2 text-center font-uncial text-blue-800">{character.name}</h2>
      <p className="text-sm text-gray-600 text-center">{character.description}</p>
    </div>
  );
}
