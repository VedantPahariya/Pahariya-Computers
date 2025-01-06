import { useEffect, useRef } from 'react';

const changingTexts = [ "your Laptops", "your PCs", "all your Tech Needs!"];

export function TypingAnimation() {
  const textRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const textIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const intervalRef = useRef<number | null>(null);
  const isTypingRef = useRef(true);

  const typeChangingText = () => {
    if (!textRef.current) return;

    const currentText = changingTexts[textIndexRef.current];
    
    if (isTypingRef.current) {
      // Typing animation
      textRef.current.textContent += currentText[charIndexRef.current];
      charIndexRef.current++;

      if (charIndexRef.current === currentText.length) {
        if (intervalRef.current) {
          window.clearInterval(intervalRef.current);
        }
        window.setTimeout(() => {
          isTypingRef.current = false;
          intervalRef.current = window.setInterval(typeChangingText, 50);
        }, 4000);
      }
    } else {
      // Erasing animation
      const currentContent = textRef.current.textContent || '';
      textRef.current.textContent = currentContent.slice(0, -1);
      
      if (currentContent.length === 1) {
        if (intervalRef.current) {
          window.clearInterval(intervalRef.current);
        }
        isTypingRef.current = true;
        charIndexRef.current = 0;
        textIndexRef.current = (textIndexRef.current + 1) % changingTexts.length;
        window.setTimeout(() => {
          if (!textRef.current) return;
          textRef.current.textContent = '';
          intervalRef.current = window.setInterval(typeChangingText, 150);
        }, 500);
      }
    }
  };

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.display = 'inline-block';
    }
    intervalRef.current = window.setInterval(typeChangingText, 100);

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="h-8 mt-2">
      <span className="text-lg text-gray-600">
      One Stop Solution for{' '}
        <span 
          ref={textRef} 
          className="text-blue-600 font-semibold transition-opacity duration-500"
        ></span>
        <span 
          ref={cursorRef}
          className="ml-1 inline-block w-0.5 h-5 bg-blue-600 align-middle animate-pulse"
        >
        </span>
      </span>
    </div>
  );
}