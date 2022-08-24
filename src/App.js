import { useState, useEffect } from 'react';
import IssuesAdder from './components/IssuesAdder';

import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    console.log('use effect started and event listeners placed');
    const closeModalHandler = () => {
      setIsVisible(false);
    };

    window.addEventListener('keydown', closeModalHandler);
    return () => {
      window.removeEventListener('keydown', closeModalHandler);
    };
  }, []);

  return <IssuesAdder isVisible={isVisible} />;
}

export default App;
