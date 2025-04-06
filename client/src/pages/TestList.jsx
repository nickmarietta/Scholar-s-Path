import rawTests from '../data/tests.json';
import { useNavigate } from 'react-router-dom';
import TestCard from '../components/TestCard';

export default function TestList({ player }) {
  const navigate = useNavigate();

  const tests = Object.values(rawTests).flat();

  const handleSelect = (test) => {
    navigate(`/test/${test.id}`);
  };

  return (
    <div
      className="w-screen min-h-screen overflow-x-hidden bg-no-repeat bg-cover bg-center bg-fixed px-4 sm:px-6 py-12"
      style={{
        backgroundImage: "url('/testlist.png')",
        backgroundColor: "#0f172a"
      }}
    >
      <div className=" min-h-screen w-full rounded-xl p-6">
        <h1 className="text-4xl font-uncial text-center text-purple-100 mb-10 drop-shadow-md">
          Choose Your Quest
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {tests.map((test) => (
            <TestCard
              key={test.id}
              test={test}
              playerLevel={player.level}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
