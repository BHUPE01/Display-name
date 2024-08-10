import { useState, useEffect } from 'preact/hooks';
import './App.css'; 

export function App() {
  const [displayedText, setDisplayedText] = useState('');
  const name = " BHUPENDRA SINGH PUNDIR ";

  useEffect(() => {
    let currentIndex = 0;

    const timer = setInterval(() => {
      if (currentIndex < name.length) {
        setDisplayedText(name.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 500); 

    return () => clearInterval(timer);
  }, []);

  return (
    <h1 className="fade-in">{displayedText}</h1>
  );
}
