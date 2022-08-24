import { useState, useEffect } from 'react';
import IssuesAdder from './components/IssuesAdder';

import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const closeModalHandler = e => {
      if (e.code === 'Escape') {
        setIsVisible(false);
      }
    };

    window.addEventListener('keydown', closeModalHandler);
    return () => {
      window.removeEventListener('keydown', closeModalHandler);
    };
  }, []);

  return <IssuesAdder isVisible={isVisible} />;
}

export default App;
