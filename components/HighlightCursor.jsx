"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const HighlightCursor = () => {
  const cursorRef = useRef(null);
  const ringContainerRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });

  // Cursor movement animation
  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX - 16;
      mousePos.current.y = e.clientY - 16;
    };

    const render = () => {
      gsap.to(cursorRef.current, {
        x: mousePos.current.x,
        y: mousePos.current.y,
        duration: 0.2,
        ease: "power3.out",
      });
      gsap.to(ringContainerRef.current, {
        x: mousePos.current.x,
        y: mousePos.current.y,
        duration: 0.2,
        ease: "power3.out",
      });
      requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove);
    render();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Double ring pulse on click
  useEffect(() => {
    const createRing = () => {
  if (!ringContainerRef.current) return;

  // Create first ring
  const ring = document.createElement("div");
  ring.className = `absolute w-8 h-8 border border-accent pointer-events-none`;
  ring.style.left = "0";
  ring.style.top = "0";
  ring.style.borderRadius = "4px"; // square corners
  ring.style.transform = `rotate(${hovering ? 0 : 45}deg)`; // match shape

  // Create second ring
  const ring2 = ring.cloneNode(true);

  ringContainerRef.current.appendChild(ring);
  ringContainerRef.current.appendChild(ring2);

  // Animate both rings
  gsap.to(ring, {
    scale: 2,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
    onComplete: () => ring.remove(),
  });

  gsap.to(ring2, {
    scale: 3,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    onComplete: () => ring2.remove(),
  });
};


    window.addEventListener("click", createRing);
    return () => window.removeEventListener("click", createRing);
  }, []);

  // Hover animation (spin, fill, scale, shape)
  useEffect(() => {
    if (!cursorRef.current) return;

    const tl = gsap.timeline();

    if (hovering) {
      tl.to(cursorRef.current, {
        rotate: "+=360",
        scale: 1.6,
        backgroundColor: "white",
        duration: 0.5,
        ease: "power2.out",
      }).to(cursorRef.current, {
        rotate: 0, // become square
        duration: 0.2,
        ease: "power2.out",
      });
    } else {
      tl.to(cursorRef.current, {
        rotate: "+=360",
        scale: 0.5,
        backgroundColor: "transparent",
        duration: 0.5,
        ease: "power2.out",
      }).to(cursorRef.current, {
        rotate: 45, // return to rhombus
        duration: 0.2,
        ease: "power2.out",
      });
    }
  }, [hovering]);

  // Hover detection
  useEffect(() => {
    const updateHoverListeners = () => {
      const targets = document.querySelectorAll(
        "a, button, p, h1, h2, h3, span, .hover-target"
      );

      targets.forEach((el) => {
        el.style.cursor = "none";
        el.addEventListener("mouseenter", () => setHovering(true));
        el.addEventListener("mouseleave", () => setHovering(false));
      });
    };

    updateHoverListeners();

    const observer = new MutationObserver(updateHoverListeners);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="hidden md:block">
      {/* Ring pulse container */}
      <div
        ref={ringContainerRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
      />

      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 z-[9999] pointer-events-none border-2 border-accent mix-blend-difference"
        style={{
          borderRadius: "4px",
          transformOrigin: "center center",
          backgroundColor: "transparent",
          transition: "background-color 0.3s ease",
          boxShadow: "0 0 10px rgba(0,255,153,0.3)",
          rotate: "45deg", // default rhombus
        }}
      />
    </div>
  );
};

export default HighlightCursor;
