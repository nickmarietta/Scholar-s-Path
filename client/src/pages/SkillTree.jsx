import React from 'react';
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

const nodes = [
  {
    id: 'core',
    type: 'custom',
    position: { x: 375, y: 300 },
    data: { label: 'Core Knowledge', size: 'large', className: 'w-48 h-48 text-xl ring-4 ring-purple-400 animate-pulse', locked: false },
    draggable: false
  },
  {
    id: 'math',
    type: 'custom',
    position: { x: 400, y: 100 },
    data: { label: 'Math' },
    draggable: false
  },
  {
    id: 'history',
    type: 'custom',
    position: { x: 650, y: 500 },
    data: { label: ' History' },
    draggable: false
  },
  {
    id: 'science',
    type: 'custom',
    position: { x: 150, y: 500 },
    data: { label: 'Science' },
    draggable: false
  }
];


const edges = [
  { id: 'e-core-math', source: 'core', target: 'math', type: 'custom' },
  { id: 'e-core-history', source: 'core', target: 'history', type: 'custom' },
  { id: 'e-core-science', source: 'core', target: 'science', type: 'custom' }
];

export default function SkillTree() {
    return (
      <div className="w-screen h-screen bg-cover bg-center bg-no-repeat"
           style={{ backgroundImage: "url('/uni.jpg')" }}>
        <ReactFlow
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          nodes={nodes}
          edges={edges}
          nodesDraggable={false}
          panOnDrag={false}
          zoomOnScroll={true}
          zoomOnPinch={true}
          zoomOnDoubleClick={true}
          fitView
        />
      </div>
    );
  }
  
  
