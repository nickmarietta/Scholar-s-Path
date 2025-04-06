import { useNavigate } from 'react-router-dom';

const characters = [
  {
    id: 'logimancer',
    name: 'Logimancer',
    img: 'public/firemage.png',
    description: 'Master of logic and numbers.', 
  },
  {
    id: 'bio-alchemist',
    name: 'Bio Alchemist',
    img: '/characters/bio-alchemist.png',
    description: 'Potion-brewing knowledge wizard.'
  }
];

export default function CharacterSelect({ setPlayer }) {
  const navigate = useNavigate();

  const handleSelect = (char) => {
    console.log('Character selected:', char);
    setPlayer((prev) => ({ ...prev, character: char.id }));
    navigate('/dashboard');
  };

  return (
    <div className="w-screen h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('parchment.avif')" }}>
      <h1 className="text-2xl font-bold mb-4 justify-center">Choose Your Character</h1>
      <div className="flex flex-wrap justify-center gap-6" >
        {characters.map((char) => (
          <div
            key={char.id}
            onClick={() => handleSelect(char)}
            className="w-48 p-4 border rounded-lg shadow cursor-pointer hover:bg-gray-100"
          >
            <img src={char.img} alt={char.name} className="w-24 h-24 mx-auto object-contain" />
            <h2 className="text-xl mt-2">{char.name}</h2>
            <p className="text-sm text-gray-500">{char.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
