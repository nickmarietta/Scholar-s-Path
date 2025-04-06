import tests from '../data/tests.json';
import { useNavigate } from 'react-router-dom';

export default function TestList({ player }) {
  const navigate = useNavigate();

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Quests Available</h1>
      <ul className="space-y-4">
        {tests.map(test => (
          <li
            key={test.id}
            className={`p-4 rounded-lg ${player.level >= test.levelRequired ? 'bg-slate-800' : 'bg-slate-600 opacity-40'}`}
          >
            <h2 className="text-xl font-bold">{test.name}</h2>
            <p>{test.description}</p>
            <button
              disabled={player.level < test.levelRequired}
              className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded"
              onClick={() => navigate(`/test/${test.id}`)}
            >
              View Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
