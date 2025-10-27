import React, { useContext } from 'react';
import { ProgressContext } from '../context/ProgressContext';
import '../HeaderStats.css';

export default function HeaderStats() {
  const { xp, lives, niveau } = useContext(ProgressContext);

  return (
    <div className="header-stats">
      <div className="stat">⭐ XP : {xp}</div>
      <div className="stat">❤️ Vies : {lives}</div>
     
    </div>
  );
}
