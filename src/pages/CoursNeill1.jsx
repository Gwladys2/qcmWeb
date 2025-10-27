import React from 'react';
import Logo from '../components/Logo';
import HeaderStats from '../components/HeaderStats';
import '../Lesson.css';
import { Link } from 'react-router-dom';

export default function Montessori1() {
  return (
      <div className="lesson-container">
      <h1 className="lesson-mainTitle">🌟 Alexander Sutherland Neill</h1>
      <h2 className="lesson-subTitle">Pédagogie libertaire et école Summerhill</h2>

      {/* --- 1. Présentation du cours --- */}
      <h3 className="lesson-chapter">🔹 1. Présentation du cours</h3>
      <p>But : comprendre la pensée pédagogique d’Alexander Sutherland Neill et son approche de l’éducation libertaire.</p>
      <p>
        Ce que tu dois savoir faire à la fin :<br />
        • Décrire Summerhill et ses principes<br />
        • Comprendre le self-government (autogestion)<br />
        • Expliquer comment Neill définit le bonheur et la réussite<br />
        • Situer Summerhill dans le contexte historique des années 1920<br />
        • Identifier ses influences et critiques<br />
        • Discuter de son héritage dans l’éducation
      </p>
      <p>En résumé : ce chapitre fixe les objectifs : tu vas étudier une approche centrée sur la liberté et l’autonomie des enfants.</p>

      {/* --- 2. Biographie --- */}
      <h3 className="lesson-chapter">🔹 2. Biographie de A.S. Neill</h3>
      <p>
        Né en 1883 en Écosse, dans une famille protestante stricte. Son enfance est perçue comme « ratée ».<br />
        Il devient élève-maître dans l’école de son père, puis poursuit des études universitaires en lettres.<br />
        Carrière : instituteur puis directeur d’école.
      </p>
      <div className="lesson-quote">
        « Ma tâche est futile… » → critique de l’éducation traditionnelle qui ne prépare pas les enfants au bonheur.
      </div>
      <p>Idée principale : Neill valorise le bien-être de l’enfant, la liberté et le bonheur plutôt que l’autorité et la discipline stricte.</p>

      {/* --- 3. École Summerhill --- */}
      <h3 className="lesson-chapter">🔹 3. L’école de Summerhill (1921)</h3>
      <p>
        Localisation : Suffolk, Angleterre, enfants de 5 à 17 ans.<br />
        Activités : danse, théâtre, musique, ateliers, piscine… tout est libre.
      </p>
      <h4 className="lesson-subSection">Principes fondamentaux</h4>
      <p>
        • Liberté : choix des activités, pas d’obligation<br />
        • Désir et motivation : apprendre par envie, pas contrainte<br />
        • Pas de punition : problèmes discutés collectivement<br />
        • Autogestion : assemblée générale, tribunal des élèves, égalité des voix<br />
        • Liberté ≠ anarchie : respecter celle des autres<br />
        • Mixité et éducation sexuelle : non censurée
      </p>
      <p>En résumé : Summerhill est un espace où les enfants sont responsables de leur apprentissage et de la vie collective.</p>

      {/* --- 4. Objectifs pédagogiques --- */}
      <h3 className="lesson-chapter">🔹 4. Objectifs pédagogiques de Neill</h3>
      <p>
        • Bonheur : finalité principale<br />
        • Imagination : créativité et idées comptent plus que fautes<br />
        • Émotions : nourrir cœur et corps<br />
        • Liberté responsable : apprendre à distinguer le bien et le mal par expérience<br />
        • Rôle de l’enseignant : guide, non autoritaire
      </p>

      {/* --- 5. Contexte et influences --- */}
      <h3 className="lesson-chapter">🔹 5. Contexte et influences</h3>
      <p>
        Années 1920 : bouleversements post-Première Guerre mondiale<br />
        Influences : mouvements progressistes, psychanalyse freudienne, pédagogies de Rousseau, Dewey, Montessori<br />
        Summerhill : modernisation et libération de l’éducation
      </p>

      {/* --- 6. Critiques et héritage --- */}
      <h3 className="lesson-chapter">🔹 6. Critiques et héritage</h3>
      <h4 className="lesson-subSection">Points positifs</h4>
      <p>
        • Éducation centrée sur l’enfant<br />
        • Influence durable sur pédagogies alternatives<br />
        • Promotion du bien-être et de la liberté
      </p>
      <h4 className="lesson-subSection">Points négatifs</h4>
      <p>
        • Peut être perçu comme laxisme<br />
        • Difficulté à transposer dans l’école traditionnelle<br />
        En résumé : Summerhill inspire beaucoup d’écoles alternatives mais reste contesté
      </p>

      {/* --- 7. Conclusion --- */}
      <h3 className="lesson-conclusionTitle">🔹 7. Conclusion</h3>
      <p>
        Neill est une figure majeure de la pédagogie libertaire.<br />
        Idée clé : former des enfants libres, heureux, autonomes et responsables, avec une éducation humaniste et démocratique.
      </p>

      {/* --- 8. Références --- */}
      <h3 className="lesson-chapter">🔹 8. Références essentielles</h3>
      <p>
        • Neill, A.S. (2004) : Libres enfants de Summerhill<br />
        • Saffange, J.-F. (2002, 2013) : textes sur Neill dans Quinze pédagogues<br />
        • Gauthier & Tardif (1996) : La pédagogie. Théories et pratiques<br />
        • Meirieu, P. (2000) : réflexion sur le désir de l’enfant dans l’éducation
      </p>


      <div className="lesson-links">
        <Link className="link" to="/Neill1">🎯 Faire le QCM</Link>
      </div>
    </div>
  );
}
