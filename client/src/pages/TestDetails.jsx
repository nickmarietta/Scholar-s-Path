import { useParams, useNavigate } from 'react-router-dom';
import tests from '../data/tests.json';

export default function TestDetails({ player }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const allTests = Object.values(tests).flat();

  const selectedTest = allTests.find(t => t.id === id);

  if (!selectedTest) return <div className="text-black p-4">Quest not found.</div>;

  const canStart = player.level >= selectedTest.levelRequired;

  return (
    <div className="p-6 text-black max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{selectedTest.name}</h1>
      <p className="mb-4 text-black-300">{selectedTest.description}</p>
      <p>Level Required: {selectedTest.levelRequired}</p>
      <p>XP Reward: {selectedTest.xpReward}</p>
      <p>Questions: {selectedTest.questions.length}</p>

      <button
        disabled={!canStart}
        onClick={() => navigate(`/test/${selectedTest.id}/play`)}
        className={`mt-6 px-6 py-2 rounded ${
          canStart ? 'bg-green-600 hover:bg-green-500' : 'bg-gray-600 cursor-not-allowed'
        }`}
      >
        {canStart ? 'Start Quest' : 'Level Too Low'}
      </button>
    </div>
  );
}
