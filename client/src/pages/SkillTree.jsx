import React, { useState } from 'react';
import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import CustomNode from '../components/CustomNode';
import CustomEdge from '../components/CustomEdge';

const nodeTypes = {
  custom: CustomNode
};

const edgeTypes = {
  custom: CustomEdge
};

export default function SkillTree() {
  const [selectedNode, setSelectedNode] = useState(null);

  const handleNodeClick = (nodeData) => {
    console.log('Clicked node:', nodeData);
    setSelectedNode(nodeData);
  };

  const nodes = [
    {
      id: 'core',
      type: 'custom',
      position: { x: 0, y: 0 },
      data: {
        label: 'Core Knowledge',
        theme: 'arcane',
        locked: false,
        onClick: () =>
          handleNodeClick({
            label: 'Core Knowledge',
            description: 'Start here to unlock your educational journey.',
          }),
      },
      draggable: false,
    },
    {
      id: 'math',
      type: 'custom',
      position: { x: 0, y: -200 },
      data: {
        label: 'Math',
        theme: 'fire',
        onClick: () =>
          handleNodeClick({
            label: 'Math',
            description: 'Master numbers, logic, and formulas.',
          }),
      },
      draggable: false,
    },
    {
      id: 'algebra',
      type: 'custom',
      position: { x: 0, y: -400 },
      data: {
        label: 'Algebra',
        theme: 'fire',
        onClick: () =>
          handleNodeClick({
            label: 'Algebra',
            description: 'Solve equations and manipulate variables.',
          }),
      },
      draggable: false,
    },
    {
      id: 'science',
      type: 'custom',
      position: { x: -200, y: 200 },
      data: {
        label: 'Science',
        theme: 'nature',
        onClick: () =>
          handleNodeClick({
            label: 'Science',
            description: 'Understand how the world works.',
          }),
      },
      draggable: false,
    },
    {
      id: 'biology',
      type: 'custom',
      position: { x: -300, y: 400 },
      data: {
        label: 'Biology',
        theme: 'nature',
        onClick: () =>
          handleNodeClick({
            label: 'Biology',
            description: 'Study life and living organisms.',
          }),
      },
      draggable: false,
    },
    {
      id: 'history',
      type: 'custom',
      position: { x: 200, y: 200 },
      data: {
        label: 'History',
        theme: 'ice',
        onClick: () =>
          handleNodeClick({
            label: 'History',
            description: 'Discover the past and civilizations.',
          }),
      },
      draggable: false,
    },
    {
      id: 'ancient-civs',
      type: 'custom',
      position: { x: 300, y: 400 },
      data: {
        label: 'Ancient Civs',
        theme: 'ice',
        onClick: () =>
          handleNodeClick({
            label: 'Ancient Civilizations',
            description: 'Learn about Rome, Egypt, and Mesopotamia.',
          }),
      },
      draggable: false,
    },
  ];
  
  

  const edges = [
    { id: 'e-core-math', source: 'core', target: 'math', type: 'custom' },
    { id: 'e-math-algebra', source: 'math', target: 'algebra', type: 'custom' },
    { id: 'e-core-science', source: 'core', target: 'science', type: 'custom' },
    { id: 'e-science-biology', source: 'science', target: 'biology', type: 'custom' },
    { id: 'e-core-history', source: 'core', target: 'history', type: 'custom' },
    { id: 'e-history-ancient', source: 'history', target: 'ancient-civs', type: 'custom' },
  ];
  
  

  return (
    <div
      className="w-screen h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('bg.jpg')" }}
    >
      <ReactFlow
        defaultNodes={nodes}
        defaultEdges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        nodesDraggable={false}
        panOnDrag={false}
        zoomOnScroll={true}
        elementsSelectable={false}
        onNodeClick={(event, node) => {
          if (node?.data?.onClick) {
            node.data.onClick();
          }
        }}
        fitView
      />

      {selectedNode && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedNode(null)}
        >
          <div
            className="bg-white p-6 rounded-xl shadow-lg text-black w-80 max-w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-2">{selectedNode.label}</h2>
            <p className="text-sm text-gray-700 mb-4">{selectedNode.description}</p>
            <button
              onClick={() => setSelectedNode(null)}
              className="mt-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
