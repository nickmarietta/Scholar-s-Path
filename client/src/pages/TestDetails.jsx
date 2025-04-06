import { useParams, useNavigate } from 'react-router-dom';
import tests from '../data/tests.json';

export default function TestDetails({ player }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const test = tests.find(t => t.id === id);

  if (!test) return <div className="text-black p-4">Quest not found.</div>;

  const canStart = player.level >= test.levelRequired;

  return (
    <div className="p-6 text-black max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{test.name}</h1>
      <p className="mb-4 text-black-300">{test.description}</p>
      <p>Level Required: {test.levelRequired}</p>
      <p>XP Reward: {test.xpReward}</p>
      <p>Questions: {test.questions.length}</p>

      <button
        disabled={!canStart}
        onClick={() => navigate(`/test/${test.id}/play`)}
        className={`mt-6 px-6 py-2 rounded ${
          canStart ? 'bg-green-600 hover:bg-green-500' : 'bg-gray-600 cursor-not-allowed'
        }`}
      >
        {canStart ? 'Start Quest' : 'Level Too Low'}
      </button>
    </div>
  );
}
