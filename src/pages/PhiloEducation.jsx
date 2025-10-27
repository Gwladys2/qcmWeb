import React, { useContext, useState } from 'react';
import questions from '../data/philoEducation/serie1.json';
import { ProgressContext } from '../context/ProgressContext';
import HeaderStats from '../components/HeaderStats';
import Logo from '../components/Logo';
import '../PhiloEducation.css';

export default function PhiloEducation() {
  const { xp, lives, updateProgress } = useContext(ProgressContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showRestart, setShowRestart] = useState(false);

  // Modale
  const [modal, setModal] = useState({ show: false, title: '', message: '' });

  const current = questions[currentIndex];

  const handleAnswer = async (index) => {
    const explication = current.explication || current.explications || "Pas d'explication disponible.";

    if (index === current.answerIndex) {
      const newXp = xp + 10;
      await updateProgress(newXp, lives);

      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(currentIndex + 1);
        setModal({ show: true, title: "✅ Bonne réponse !", message: explication });
      } else {
        setShowRestart(true);
        setModal({ show: true, title: "🎉 Félicitations !", message: "Tu as terminé la leçon !" });
      }
    } else {
      const newLives = Math.max(0, lives - 1);
      const newXp = newLives === 0 ? 0 : xp;
      await updateProgress(newXp, newLives);

      if (newLives === 0) {
        setModal({ show: true, title: "❌ Plus de vies !", message: "Relis le cours et reviens tenter ta chance 😊" });
      } else {
        setModal({ show: true, title: "Mauvaise réponse 😕", message: "Essaie encore !" });
      }
    }
  };

  return (
    <div className="quiz-container">
      <HeaderStats />
      <Logo />

      {!showRestart ? (
        <>
          <button className="link" onClick={() => setModal({ show: true, title: "📖 Cours", message: "Ici tu affiches ton cours" })}>
            📖 Voir le cours
          </button>

          <h2 className="title">Philosophie de l'éducation - Partie 1</h2>

          <p className="question">{current.question}</p>

          <div className="options">
            {current.options.map((option, i) => (
              <button key={i} className="option-btn" onClick={() => handleAnswer(i)}>
                {option}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="question">🎉 Leçon terminée !</h2>
          <button className="option-btn" onClick={() => window.location.reload()}>
            🔁 Revenir à la liste des UE
          </button>
          <button className="option-btn" onClick={() => setModal({ show: true, title: "⏭ Partie 2", message: "Partie 2 à venir..." })}>
            ⏭ Passer à la partie 2
          </button>
        </>
      )}

      <div className="link-container">
        <button className="link">🔹 Partie 1</button>
        <button className="link">🔹 Partie 2</button>
      </div>

      {/* Modale */}
      {modal.show && (
        <div className="modal-backdrop">
          <div className="modal">
            <h3>{modal.title}</h3>
            <p>{modal.message}</p>
            <button onClick={() => setModal({ ...modal, show: false })}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
}
