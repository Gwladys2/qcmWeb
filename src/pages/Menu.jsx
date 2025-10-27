import React from 'react';
import Logo from '../components/Logo';
import '../MonAccueil.css'; // On mettra le CSS séparé
import { Link, useNavigate } from 'react-router-dom';

export default function MonAccueil() {
    const navigate = useNavigate(); 
  return (
    <div className="lesson-container">
      <Logo />

      <h1 className="lesson-mainTitle">🎓 Choisissez le sujet qui vous intéresse</h1>

      <button className="lesson-links" onClick={() => navigate('/Freinet1')}>
        Les Grands Pédagogues
      </button>

      <button className="lesson-links" onClick={() => navigate('/')}>
        Psychologie de l'éducation
      </button>

      <button className="lesson-links" onClick={() => navigate('/')}>
        Philosophie de l'éducation
      </button>

      <button className="lesson-links" onClick={() => navigate('/')}>
        Lettres et Arts
      </button>
    </div>
  );
}
