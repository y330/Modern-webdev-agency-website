import { useRef, useEffect } from 'react';

export default function useAutoResizeTextarea(value: string) {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      el.style.height = 'inherit'; // Reset height so shrinking works
      el.style.maxHeight = `${el.scrollHeight}px`; // Expand to fit content
    }
  }, [value]); // Runs every time the value changes

  return ref;
}
