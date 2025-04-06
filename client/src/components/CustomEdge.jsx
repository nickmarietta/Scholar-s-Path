import { BaseEdge, getStraightPath } from '@xyflow/react';
 
export default function CustomEdge({ id, sourceX, sourceY, targetX, targetY }) {
  const [edgePath] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });
 
  return (
      <BaseEdge
        id={id}
        path={edgePath}
        style={{
          stroke: '#64748b',
          strokeWidth: 3,
          filter: 'drop-shadow(0 0 4px #94a3b8)',
          animation: 'glowPulse 1.5s ease-in-out infinite'
        }}
      />
  );
}