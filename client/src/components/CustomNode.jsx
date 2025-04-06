import React from 'react';
import { Handle, Position } from '@xyflow/react';


export default function CustomNode({ data }) {

  //Define all the data that the node can take
  const { label, locked, onUnlock, className, theme = 'default', onClick} = data;

  //Define the styles for each theme such as fire, ice for diff categories and more
  const themeStyles = {
    fire: 'bg-red-300 border-red-500 ring-2 ring-red-400',
    ice: 'bg-blue-200 border-blue-400 ring-2 ring-blue-300',
    nature: 'bg-green-200 border-green-400 ring-2 ring-green-300',
    arcane: 'bg-purple-200 border-purple-500 ring-2 ring-purple-400',
    default: 'bg-gray-200 border-gray-400'
  };


  //Make the theme class dynamic based on the theme prop passed to the node
  const themeClass = themeStyles[theme] || themeStyles.default;

return (
  <div
  onClick={onClick}  
  className={`cursor-pointer rounded-full flex flex-col items-center justify-center text-center
    shadow-lg transition-all duration-300
    w-24 h-24 text-sm hover:scale-105
    ${locked ? 'text-gray-500 opacity-50' : 'text-black'}
    ${themeClass}
    ${className || ''}`}
>

    <div className="font-semibold">{label}</div>

    {!locked && onUnlock && (
      <button
        onClick={(e) => {
            e.stopPropagation(); 
            onUnlock();
        }}
          className="text-xs mt-1 px-2 py-1 bg-white text-green-800 rounded-md hover:bg-gray-100">
          Start Quest
      </button>
   )}
    
    <Handle
  type="target"
  position={Position.Top}
  style={{width: 1, height: 1, background: 'transparent', border: 'none', pointerEvents: 'none'}}isConnectable={false}
/>
<Handle
  type="source"
  position={Position.Bottom}
  style={{width: 1, height: 1, background: 'transparent', border: 'none', pointerEvents: 'none'}}isConnectable={false}
/>

  </div>
);
}
