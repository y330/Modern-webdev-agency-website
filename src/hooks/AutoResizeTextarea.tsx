import { useRef, useEffect } from 'react';

export default function useAutoResizeTextarea(value: string) {
    const ref = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (el) {
            el.style.height = 'auto'; // Reset height first
            el.style.height = `${el.scrollHeight + 5}px`; // Set to scrollHeight
        }
    }, [value]); // Runs every time the value changes

    return ref;
}
