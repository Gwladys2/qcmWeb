import React from 'react';
import Logo from '../components/Logo';
import HeaderStats from '../components/HeaderStats';
import '../Lesson.css';
import { Link } from 'react-router-dom';

export default function Montessori1() {
  return (
      <div className="lesson-container">
      <h1 className="lesson-mainTitle">🌿 Célestin Freinet</h1>
      <h2 className="lesson-subTitle">1. Éléments biographiques</h2>

      {/* --- ORIGINES ET FORMATION --- */}
      <h3 className="lesson-chapter">📖 Origines et formation</h3>
      <p>
        Célestin Freinet est né en 1896 dans un petit village rural des Alpes-Maritimes.<br />
        → Il grandit dans un environnement simple, où les gens vivent surtout de l’artisanat et du travail manuel.<br />
        → Cette vie « près du réel » influencera beaucoup sa vision de l’école.<br /><br />
        C’est un très bon élève, et en 1912, il réussit le concours d’entrée à l’école normale pour devenir instituteur.
      </p>

      {/* --- GUERRE ET CONSÉQUENCES --- */}
      <h3 className="lesson-chapter">⚔️ La guerre et ses conséquences</h3>
      <p>
        En 1914, il part à la Première Guerre mondiale. Il est blessé grièvement au poumon, reste deux ans en convalescence et sera handicapé à 70 %.<br />
        → À cause de ses blessures, il a du mal à parler longtemps, ce qui l’empêchera d’enseigner « à l’ancienne », en parlant beaucoup.<br />
        → Cela l’obligera à inventer une nouvelle manière d’enseigner, plus active et centrée sur les élèves.
      </p>

      {/* --- ENGAGEMENT POLITIQUE --- */}
      <h3 className="lesson-chapter">✊ Engagement politique et social</h3>
      <p>
        Après la guerre, il rejoint le parti communiste.<br />
        → Pour lui, l’éducation est un moyen de changer la société : former des enfants libres, solidaires, capables de penser par eux-mêmes.<br />
        → Il rejette l’école élitiste réservée aux « meilleurs » : il veut une école du peuple, démocratique et ouverte à tous.
      </p>

      {/* --- PRINCIPES ÉDUCATIFS --- */}
      <h2 className="lesson-subTitle">2. Principes éducatifs</h2>

      <h3 className="lesson-chapter">🏫 L’école du peuple</h3>
      <p>
        Freinet veut une école pour tous, pas seulement pour les bons élèves.<br />
        → L’école doit être ouverte sur la vie réelle : les apprentissages doivent avoir du sens concret.<br /><br />
        <span className="lesson-quote">
          « Ne vous obstinez pas dans l’erreur d’une pédagogie du cheval qui n’a pas soif. »
        </span>
      </p>

      <h3 className="lesson-chapter">🔍 Le tâtonnement expérimental</h3>
      <p>
        C’est le cœur de sa méthode : les enfants apprennent par essais et erreurs.<br />
        → Exemple : un enfant essaie de faire une expérience, se trompe, réfléchit, recommence, comprend.<br />
        → C’est comme les scientifiques : on apprend en testant et en observant.<br /><br />
        Le rôle de l’enseignant est d’organiser un environnement propice à ces découvertes.
      </p>

      <h3 className="lesson-chapter">💬 La libre expression</h3>
      <p>
        Les élèves doivent pouvoir exprimer leurs idées, leurs émotions et leurs opinions librement.<br />
        → Cela les aide à se connaître et à mieux communiquer.
      </p>

      <h3 className="lesson-chapter">⚒️ L’éducation au travail</h3>
      <p>
        Pour Freinet, le travail est une source de développement personnel, pas une punition.<br />
        → Il distingue le « vrai travail » (créatif, utile, porteur de sens) des simples « occupations ».
      </p>

      <h3 className="lesson-chapter">👧 Une école centrée sur l’enfant</h3>
      <p>
        Comme d’autres pédagogues du XXe siècle (Montessori, Decroly...), Freinet pense que :<br />
        → L’école doit s’adapter à l’enfant, et non l’inverse.<br />
        → Chaque élève apprend à son rythme, selon ses intérêts et besoins.
      </p>

      {/* --- DÉMARCHE PÉDAGOGIQUE --- */}
      <h2 className="lesson-subTitle">3. Démarche pédagogique (méthodes de classe)</h2>

      <h3 className="lesson-chapter">🖨️ L’imprimerie scolaire</h3>
      <p>
        Les enfants écrivent leurs propres textes, les impriment eux-mêmes et les diffusent (par exemple dans un journal de classe).<br />
        → Cela donne du sens à l’écriture et valorise leur travail.
      </p>

      <h3 className="lesson-chapter">✍️ Le texte libre</h3>
      <p>
        Chaque enfant écrit librement sur le sujet qu’il souhaite.<br />
        → Ensuite, la classe lit et commente ces textes.<br />
        → Certains sont choisis pour être imprimés dans le journal scolaire.<br />
        → Objectif : donner envie d’écrire et de partager ses idées.
      </p>

      <h3 className="lesson-chapter">💌 La correspondance interscolaire</h3>
      <p>
        Les classes correspondent avec d’autres écoles, parfois dans d’autres régions ou pays.<br />
        → Les enfants écrivent pour de vrais destinataires, ce qui donne du sens à leurs écrits.<br />
        → Cela ouvre la classe à d’autres cultures et réalités.
      </p>

      <h3 className="lesson-chapter">📚 La « Bibliothèque de Travail » (BT)</h3>
      <p>
        Ce sont de petits livrets rédigés pour les enfants, sur divers sujets (nature, histoire, métiers...).<br />
        → Objectif : apprendre à chercher des informations par soi-même.
      </p>

      <h3 className="lesson-chapter">🌍 Les démarches de découverte</h3>
      <p>
        Apprendre en sortant de la classe, en observant le monde réel (la nature, le village, les métiers...).<br />
        → On relie ainsi l’école et la vie quotidienne.
      </p>

      <h3 className="lesson-chapter">🗓️ Le plan de travail</h3>
      <p>
        Chaque élève construit avec l’enseignant son programme de la semaine, selon ses besoins et projets.<br />
        → Cela rend l’apprentissage personnalisé et responsabilise l’enfant.
      </p>

      <h3 className="lesson-chapter">🤝 Le conseil de classe</h3>
      <p>
        Un moment collectif où les élèves et l’enseignant discutent, décident, organisent la vie de la classe.<br />
        → On y parle de problèmes, de projets, de décisions.<br />
        → Les élèves ont des rôles précis (président, secrétaire...).<br />
        → C’est une leçon de démocratie au quotidien.
      </p>

      {/* --- RÉSUMÉ --- */}
      <h2 className="lesson-subTitle">🧩 En résumé</h2>
      <div className="lesson-summaryBox">
        <p>🧪 Apprendre par l’action → Les enfants expérimentent, cherchent, testent.</p>
        <p>🎯 Donner du sens aux apprentissages → Tout ce qu’ils font a un lien avec leur vie réelle.</p>
        <p>🌱 Responsabiliser l’élève → L’enfant devient acteur de son apprentissage.</p>
        <p>🤝 Coopération et entraide → Les élèves apprennent ensemble, pas en compétition.</p>
        <p>🌍 Ouverture à la société → L’école communique avec le monde extérieur.</p>
      </div>

      <div className="lesson-links">
        <Link className="link" to="/Freinet1">🎯 Faire le QCM</Link>
      </div>
    </div>
  );
}
