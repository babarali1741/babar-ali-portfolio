import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    let rx = 0, ry = 0, tx = 0, ty = 0;
    const onMove = (e) => {
      tx = e.clientX; ty = e.clientY;
      if (dot.current) {
        dot.current.style.left = tx + "px";
        dot.current.style.top = ty + "px";
      }
    };
    const tick = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      if (ring.current) {
        ring.current.style.left = rx + "px";
        ring.current.style.top = ry + "px";
      }
      requestAnimationFrame(tick);
    };
    const onOver = (e) => {
      const t = e.target;
      if (t.closest("a,button,input,textarea,[role=button]")) {
        ring.current?.style.setProperty("width", "56px");
        ring.current?.style.setProperty("height", "56px");
      } else {
        ring.current?.style.setProperty("width", "36px");
        ring.current?.style.setProperty("height", "36px");
      }
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <>
      <div ref={ring} className="cursor-ring" />
      <div ref={dot} className="cursor-dot" />
    </>
  );
}
