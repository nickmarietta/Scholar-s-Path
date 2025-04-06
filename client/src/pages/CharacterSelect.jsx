import React from 'react';
import { useNavigate } from 'react-router-dom';
import CharacterIcon from '../components/CharacterIcon';

// Sample character list (you may already have this elsewhere)
const characters = [
  {
    id: 'logimancer',
    name: 'Logimancer',
    img: 'logimancer.png',
    description: 'Master of logic and numbers.'
  },
  {
    id: 'bio-alchemist',
    name: 'Bio Alchemist',
    img: 'bio-alchemist.png',
    description: 'Potion-brewing knowledge wizard.'
  },
  {
    id: 'arcane-analyst',
    name: 'Arcane Analyst',
    img: 'arcane-analyst.png',
    description: 'Dekubopdomdem.'
  },
  {
    id: 'eco-sorcerer',
    name: 'Eco Sorcerer',
    img: 'eco-sorcerer.png',
    description: 'Nature-loving magic user.'
  }
  // Add more...
];

export default function CharacterSelect({ setPlayer }) {
  const navigate = useNavigate();

  const handleSelect = (char) => {
    console.log('Character selected:', char);
    setPlayer((prev) => ({ ...prev, character: char.id }));
    navigate('/dashboard');
  };

  return (
    <div
      className="w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center pt-12"
      style={{ backgroundImage: "url('test.jpg')" }}
    >
      <h1 className="text-4xl font-uncial text-center">Choose Your Character</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {characters.map((char) => (
          <CharacterIcon key={char.id} character={char} onSelect={handleSelect} />
        ))}   
      </div>
    </div>
  );
}
