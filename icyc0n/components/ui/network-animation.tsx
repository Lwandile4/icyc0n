
"use client";
import React, { useEffect, useRef } from 'react';

// Pre-defined node positions for the network graph, normalized for a 0-1 coordinate space
const nodes = [
  { x: 0.1, y: 0.65 }, { x: 0.3, y: 0.8 }, { x: 0.5, y: 0.3 },
  { x: 0.7, y: 0.8 }, { x: 0.9, y: 0.65 }, { x: 0.75, y: 0.35 },
  { x: 0.5, y: 0.1 }, { x: 0.25, y: 0.35 }, { x: 0.2, y: 0.2 },
  { x: 0.8, y: 0.2 }, { x: 0.35, y: 0.55 }, { x: 0.65, y: 0.55 },
];

// Easing function for smooth acceleration and deceleration of the line
const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

const NetworkAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null);
  
  // State for the animation logic, stored in a ref to avoid re-renders
  const animationState = useRef({
    fromIndex: 0,
    toIndex: 1,
    progress: 0,
    speed: 0.015, // Controls how fast the line "draws" itself
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Theme colors from the Icycon palette
    const nodeColorDefault = '#003683'; // icy-deep
    const nodeColorActive = '#a5f3fc';   // light cyan for glow
    const lineColor = '#4092ef';       // icy-main

    // Handles high-DPI screens
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    // Helper function to select a new random target node, ensuring it's not the same as the current one
    const selectNewTarget = (currentIndex: number): number => {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * nodes.length);
      } while (newIndex === currentIndex);
      return newIndex;
    };

    const draw = () => {
      if (!ctx) return;
      
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);
      
      const state = animationState.current;
      const { fromIndex, toIndex, progress } = state;

      // Apply the easing function to the progress for smooth animation
      const easedProgress = easeInOutCubic(progress);

      // 1. Draw all nodes in their default, subtle state
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x * width, node.y * height, 6, 0, 2 * Math.PI);
        ctx.fillStyle = nodeColorDefault;
        ctx.fill();
      });
      
      const fromNode = nodes[fromIndex];
      const toNode = nodes[toIndex];

      // 2. Draw the active 'from' and 'to' nodes with a glow
      [fromNode, toNode].forEach(node => {
          ctx.beginPath();
          ctx.arc(node.x * width, node.y * height, 8, 0, 2 * Math.PI);
          ctx.fillStyle = nodeColorActive;
          ctx.shadowColor = nodeColorActive;
          ctx.shadowBlur = 15;
          ctx.fill();
      });
      ctx.shadowBlur = 0;

      // 3. Draw the single, animated line using the eased progress
      if (fromNode && toNode) {
        const startX = fromNode.x * width;
        const startY = fromNode.y * height;
        const endX = toNode.x * width;
        const endY = toNode.y * height;
        
        // Calculate the current end point of the line based on the eased progress
        const currentX = startX + (endX - startX) * easedProgress;
        const currentY = startY + (endY - startY) * easedProgress;

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(currentX, currentY);
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // 4. Update the linear animation progress
      state.progress += state.speed;

      // 5. When the line reaches its destination, select a new random target
      if (state.progress >= 1) {
        state.progress = 0;
        state.fromIndex = toIndex;
        state.toIndex = selectNewTarget(toIndex);
      }

      animationFrameId.current = requestAnimationFrame(draw);
    };

    resizeCanvas();
    draw();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />;
};

export default NetworkAnimation;
