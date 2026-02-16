import { useEffect, useRef } from "react";

const CURSOR_TEXT = "SHIVAM RAVAL • ANDROID DEVELOPER • ";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const circlePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Build circular text
    if (textRef.current) {
      textRef.current.innerHTML = "";
      CURSOR_TEXT.split("").forEach((char, i) => {
        const span = document.createElement("span");
        span.innerText = char;
        span.style.transform = `rotate(${i * 10}deg)`;
        textRef.current!.appendChild(span);
      });
    }

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top = e.clientY + "px";
      }
    };

    const animate = () => {
      circlePos.current.x += (mousePos.current.x - circlePos.current.x) * 0.15;
      circlePos.current.y += (mousePos.current.y - circlePos.current.y) * 0.15;
      if (circleRef.current) {
        circleRef.current.style.left = circlePos.current.x + "px";
        circleRef.current.style.top = circlePos.current.y + "px";
      }
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove);
    const raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={circleRef} className="cursor-circle">
        <div ref={textRef} className="circular-text" />
      </div>
    </>
  );
};

export default CustomCursor;
