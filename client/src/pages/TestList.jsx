import tests from '../data/tests.json';
import { useNavigate } from 'react-router-dom';
import TestCard from '../components/TestCard';

export default function TestList({ player }) {
  const navigate = useNavigate();

  const handleSelect = (test) => {
    navigate(`/test/${test.id}`);
  };

  return (
    <div
      className="min-h-screen w-full px-6 py-12 bg-cover bg-center"
      style={{ backgroundImage: "url('/parchment.avif')" }}
    >
      <h1 className="text-4xl font-uncial text-center text-purple-900 mb-10">
        Choose Your Quest
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {tests.map((test) => (
          <><><TestCard
            key={test.id}
            test={test}
            playerLevel={player.level}
            onSelect={handleSelect} />
            
            <TestCard
              key={test.id}
              test={test}
              playerLevel={player.level}
              onSelect={handleSelect} /></>
              
              <TestCard
              key={test.id}
              test={test}
              playerLevel={player.level}
              onSelect={handleSelect} /></>


          
        ))}
      </div>
    </div>
  );
}
