import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import tests from '../data/tests.json';

export default function TestPlayer({ player, setPlayer }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const allTests = Object.values(tests).flat();
  const test = allTests.find(t => t.id === id);

  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [selected, setSelected] = useState(null);

  if (!test) {
    return <div className="text-black p-4">Test not found.</div>;
  }

  const current = test.questions[index];

  const handleSubmit = () => {
    if (selected === current.answer) {
      setCorrect(c => c + 1);
    }

    if (index + 1 < test.questions.length) {
      setIndex(i => i + 1);
      setSelected(null);
    } else {
      const newXP = player.xp + test.xpReward;
      const newLevel = Math.floor(newXP / 100) + 1;
      setPlayer({ ...player, xp: newXP, level: newLevel });

      navigate('/skill-tree');
    }
  };

  return (
    <div className="p-6 text-black max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Question {index + 1}</h1>
      <p className="text-lg mb-4">{current.question}</p>
      <div className="space-y-2 mb-4">
        {current.choices.map(choice => (
          <label
            key={choice}
            className={`block p-2 rounded cursor-pointer ${
              selected === choice ? 'bg-purple-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            <input
              type="radio"
              name="answer"
              value={choice}
              className="hidden"
              onChange={() => setSelected(choice)}
              checked={selected === choice}
            />
            {choice}
          </label>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        disabled={!selected}
        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded text-black"
      >
        Submit
      </button>
    </div>
  );
}
