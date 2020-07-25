import React from "react";

export const P3: React.FC = (): JSX.Element => {
  const canvasRef = React.useRef(null);
  // set max radius
  const maxRadius = 90;
  // set canvas area
  const canvasWidth = 300;
  const canvasHeight = 300;

  React.useEffect(() => {
    const canvasObj: any = canvasRef.current;
    const ctx = canvasObj.getContext("2d");
    ctx.fillStyle = "rgb(255, 255, 255)"; //
    ctx.strokeStyle = "rgb(180, 180, 180)"; //
    ctx.beginPath();

    ctx.arc(125, 125, maxRadius, Math.PI * 2, false);
    ctx.fill();

    const dist = maxRadius / 5;
    for (let i = 1; i < 6; i++) {
      ctx.beginPath();
      ctx.arc(125, 125, dist * i, Math.PI * 2, false);
      ctx.stroke();
    }
  });

  return (
    <main>
      <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />
    </main>
  );
};

export default P3;
