import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProgressContext } from '../context/ProgressContext';
import '../HeaderStats.css';

export default function HeaderStats() {
  const { xp, lives, niveau } = useContext(ProgressContext);
  const navigate = useNavigate(); // hook pour la navigation

  return (
    <div className="header-stats">
      <div className="stat">⭐ XP : {xp}</div>
      <div className="stat">❤️ Vies : {lives}</div>

      {/* Emoji cliquable pour revenir au menu */}
      <div
        className="stat"
        style={{ cursor: 'pointer' }}
        onClick={() => navigate('/')} // <-- remplace '/menu' par le chemin de ton menu
        title="Retour au menu"
      >
       Accueil 🏠
      </div>
    </div>
  );
}

