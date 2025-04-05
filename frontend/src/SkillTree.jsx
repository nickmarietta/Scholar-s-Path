import React from 'react';
import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import CustomNode from './CustomNode';
import CustomEdge from './CustomEdge';

const nodeTypes = {
  custom: CustomNode
};

const edgeTypes = {
  custom: CustomEdge
};

const nodes = [
  {
    id: '1',
    type: 'custom',
    position: { x: 100, y: 100 },
    data: { label: 'Math' },
    draggable: false
  },
  {
    id: '2',
    type: 'custom',
    position: { x: 300, y: 200 },
    data: { label: 'Algebra' },
    draggable: false
  },
  {
    id: '3',
    type: 'custom',
    position: { x: 500, y: 300 },
    data: { label: 'Geometry' },
    draggable: false
  },
  {
    id: '4',
    type: 'custom',
    position: { x: 700, y: 400 },
    data: { label: 'Calculus' },
    draggable: false
  },
  {
    id: '5',
    type: 'custom',
    position: { x: 0, y: 0 },
    data: { label: 'Algebra' },
    draggable: false
  },
  {
    id: '6',
    type: 'custom',
    position: { x: 900, y: 500 },
    data: { label: 'Algebra' },
    draggable: false
  },
];

const edges = [
  { id: 'e1-2', source: '1', target: '2' }
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
  
  
