import React from 'react';
import { Handle, Position } from '@xyflow/react';

export default function CustomNode({ data }) {
  const { label, locked, onUnlock, size } = data;
  const isLarge = size === 'large';

  return (
    <div
      className={`rounded-full flex flex-col items-center justify-center
        text-center shadow-lg border-4 transition-all duration-300
        ${isLarge ? 'w-36 h-36 text-lg' : 'w-24 h-24 text-sm'}
        ${locked
          ? 'bg-gray-300 border-gray-500 text-gray-500'
          : 'bg-green-500 border-green-700 text-white hover:scale-105 hover:shadow-2xl'}
      `}
    >
      <div className="font-semibold">{label}</div>

      {!locked && onUnlock && (
        <button
          onClick={onUnlock}
          className="text-xs mt-1 px-2 py-1 bg-white text-green-800 rounded-md hover:bg-gray-100"
        >
          Start
        </button>
      )}

      {/* Edge handles */}
      <Handle type="target" position={Position.Top} className="!bg-gray-700" />
      <Handle type="source" position={Position.Bottom} className="!bg-gray-700" />
    </div>
  );
}
