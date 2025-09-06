"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  // Track mouse position
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const updatePosition = () => {
      currentX += (mouseX - currentX) * 0.2;
      currentY += (mouseY - currentY) * 0.2;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      requestAnimationFrame(updatePosition);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX - 16; // Center the square (size = 32px)
      mouseY = e.clientY - 16;
    };

    window.addEventListener("mousemove", handleMouseMove);
    updatePosition();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Handle hover effects
  useEffect(() => {
    if (!cursorRef.current) return;

    const tl = gsap.timeline();

    if (hovering) {
      tl.to(cursorRef.current, {
        scale: 1.8,
        duration: 0.2,
        ease: "power2.out",
      }).to(cursorRef.current, {
        rotate: "+=360", // one-time rotation
        duration: 0.4,
        ease: "power2.out",
      });
    } else {
      tl.to(cursorRef.current, {
        scale: 1,
        rotate: 0,
        duration: 0.3,
        ease: "power3.out",
      });
    }
  }, [hovering]);

  // Animate scale & rotation on hover
  useEffect(() => {
    if (!cursorRef.current) return;
    if (hovering) {
      gsap.to(cursorRef.current, {
        scale: 1.8,
        rotate: 45,
        duration: 0.3,
        ease: "power3.out",
      });
    } else {
      gsap.to(cursorRef.current, {
        scale: 1,
        rotate: 0,
        duration: 0.3,
        ease: "power3.out",
      });
    }
  }, [hovering]);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 z-[9999] pointer-events-none
    border-2 border-accent bg-accent/10 mix-blend-difference backdrop-blur-sm"
      style={{
        borderRadius: "4px",
        transformOrigin: "center center",
        transition: "background 0.2s ease",
        boxShadow: "0 0 20px rgba(0,255,153,0.4)",
      }}
    />
  );
};

export default CustomCursor;
