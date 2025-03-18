import { useEffect, useState } from 'react';

export default function AnimatedText({ text }) {
  const [displayedText, setDisplayedText] = useState('');
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(prev => prev + text[index]);
      index++;
      if (index >= text.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [text]);
  
  return <h1>{displayedText}</h1>;
}
