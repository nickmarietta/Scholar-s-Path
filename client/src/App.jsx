import { useState } from 'react';
import CharacterSelect from './pages/CharacterSelect';
import Dashboard from './pages/Dashboard';
import { Routes, Route } from 'react-router-dom';
import TestList from './pages/TestList';
import TestDetails from './pages/TestDetails';
import TestPlayer from './pages/TestPlayer';
import SkillTree from './pages/SkillTree';


function App() {
  const [player, setPlayer] = useState({
    name: '',
    character: '',
    xp: 0,
    level: 1
  });

  return (
    <Routes>
      <Route path="/" element={<CharacterSelect setPlayer={setPlayer} />} />
      <Route path="/dashboard" element={<Dashboard player={player} />} />
      <Route path="/tests" element={<TestList player={player} />} />
      <Route path="/test/:id" element={<TestDetails player={player} />} />
      <Route path="/test/:id/play" element={<TestPlayer player={player} setPlayer={setPlayer} />} />
      <Route path="/skill-tree" element={<SkillTree player={player} />} />
    </Routes>
  );
}

export default App;
