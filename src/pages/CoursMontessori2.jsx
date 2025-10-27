import React from "react";
import Logo from "../components/Logo";
import "../Lesson.css";
import { Link } from "react-router-dom";

export default function MontessoriCours2() {
  return (
     <div className="lesson-container">
      <h1 className="lesson-mainTitle">🌼 Montessori & Céline Alvarez</h1>
      <h2 className="lesson-subTitle">
        Actualisation de la pédagogie au XXIᵉ siècle
      </h2>

      {/* --- CONTEXTE DU COURS --- */}
      <h3 className="lesson-chapter">🔹 1. Contexte du cours</h3>
      <p>
        Objectif : réfléchir à la réactualisation de la pédagogie Montessori au
        XXIᵉ siècle, en s’appuyant sur l’expérience de Céline Alvarez
        (2011-2014).
      </p>
      <p>
        Références principales :<br />
        Céline Alvarez (2016) : <em>Les lois naturelles de l’enfant</em> <br />
        Philippe Meirieu (2018) : <em>La riposte</em> <br />
        Sylvie Nonnon (2021) : <em>Les discours sur la pédagogie Montessori</em>{" "}
        <br />
        Roland Goigoux (2016) : article critique dans <em>Le Monde</em>
      </p>

      {/* --- EXPERIENCE DE GENNEVILLIERS --- */}
      <h3 className="lesson-chapter">🔹 2. L’expérience de Gennevilliers</h3>
      <h4 className="lesson-subSection">a) Historique</h4>
      <p>
        Menée dans une école maternelle REP, ce projet personnel de Céline
        Alvarez s’inspire de Montessori et des neurosciences.  
        Durée : 3 ans (2011-2014).  
        Publication en 2016 du livre <em>Les lois naturelles de l’enfant</em> →
        succès national.
      </p>
      <div className="lesson-quote">
        « Mettre en lumière les invariants environnementaux et pédagogiques
        bénéfiques à l’enfant » (p.35)
      </div>

      {/* --- ORGANISATION PEDAGOGIQUE --- */}
      <h3 className="lesson-chapter">
        🔹 3. Organisation pédagogique de la classe
      </h3>
      <h4 className="lesson-subSection">b) Fonctionnement</h4>
      <p>
        Classe multi-âges (3 à 6 ans), deux adultes encadrants, matériel inspiré
        de Montessori.  
        La journée suit le rythme biologique et émotionnel de l’enfant : accueil
        individualisé, choix libre des activités, temps collectifs ponctuels,
        récréations non systématiques.
      </p>
      <div className="lesson-quote">
        « La classe ressemblait à une ruche bienheureuse, chacun poursuivait un
        objectif qui le motivait, à son rythme, sans jamais déranger l’activité
        d’autrui » (p.131)
      </div>

      {/* --- PRINCIPES DE LA DEMARCHE --- */}
      <h3 className="lesson-chapter">
        🔹 4. Principes fondateurs de la démarche Alvarez
      </h3>
      <h4 className="lesson-subSection">
        a) L’éducabilité universelle et les neurosciences
      </h4>
      <p>
        L’humain est pré-câblé pour apprendre. Si un enfant n’apprend pas, le
        milieu en est la cause.  
        Référence à la plasticité cérébrale : le cerveau se développe selon les
        expériences vécues.
      </p>
      <div className="lesson-quote">
        « Lorsque nous interdisons à l’enfant d’agir librement pour notre
        confort, ce n’est pas lui que nous contraignons, mais son intelligence
        en train de se faire » (p.43)
      </div>

      <h4 className="lesson-subSection">b) Principes éducatifs majeurs</h4>
      <p>
        • Apprendre par l’expérience active → agir plutôt qu’écouter. <br />
        • Motivation endogène → l’élan vient de l’intérieur. <br />
        • Richesse du monde réel → manipulation concrète. <br />
        • Jeu libre → développement global naturel. <br />
        • Bienveillance et amour → climat sécurisant indispensable.
      </p>

      {/* --- EXEMPLES DE PRATIQUES --- */}
      <h3 className="lesson-chapter">🔹 5. Exemples de pratiques mises en œuvre</h3>
      <div className="lesson-summaryBox">
        <p>🌱 Vie quotidienne : s’asseoir, verser de l’eau, ranger, observer…</p>
        <p>👀 Affinement sensoriel : couleurs, formes, sons, textures…</p>
        <p>🔢 Mathématiques : perles, barres numériques, progression 1 à 10</p>
        <p>📝 Langage : sons, correspondances graphie/phonèmes, lecture progressive</p>
        <p>🌎 Culture : découverte du monde, géographie, exploration guidée</p>
      </div>

      {/* --- RESULTATS OBSERVES --- */}
      <h3 className="lesson-chapter">🔹 6. Résultats observés</h3>
      <p>
        Tous les enfants lisent à 6 ans, niveaux de maths supérieurs à la
        moyenne.  
        Autonomie, curiosité, concentration et coopération remarquables.  
        Avance d’environ un an sur les programmes standards.
      </p>

      {/* --- ANALYSE CRITIQUE --- */}
      <h3 className="lesson-chapter">🔹 7. Analyse critique et limites</h3>
      <h4 className="lesson-subSection">a) Méthodologie</h4>
      <p>
        Peu de données quantitatives, représentativité limitée (une seule classe
        REP), transfert difficile dans le système public.
      </p>
      <h4 className="lesson-subSection">b) Philosophie et politique</h4>
      <p>
        Vision idéalisée de l’enfant, succès médiatique, risque de marketing
        éducatif, individualisme pédagogique.
      </p>
      <h4 className="lesson-subSection">c) Sociologie</h4>
      <p>
        Écart entre pratiques publiques lentes et société valorisant le choix
        personnel, explosion des écoles privées hors contrat.
      </p>
      <h4 className="lesson-subSection">d) Dérives commerciales</h4>
      <p>
        Prolifération d’objets éducatifs sans lien réel avec Montessori,
        appropriation bourgeoise renforçant les inégalités sociales.
      </p>

      {/* --- CONCLUSION --- */}
      <h3 className="lesson-chapter">🔹 8. Conclusion</h3>
      <p>
        Points positifs : redécouverte de l’enfant acteur, motivation
        intrinsèque, influence sur les enseignants.  
        Points critiques : simplification du message, appropriation
        commerciale, tension liberté vs valeurs collectives.
      </p>
      <div className="lesson-summaryBox">
        <p>🌱 Montessori : observation et expérimentation</p>
        <p>🧠 Alvarez : neurosciences et plasticité cérébrale</p>
        <p>🏫 Environnement : préparé (Montessori) vs flexible (Alvarez)</p>
        <p>👩‍🏫 Rôle adulte : guide/observateur vs facilitateur bienveillant</p>
        <p>⚠️ Critiques : élitiste et spirituelle vs médiatique et individualiste</p>
      </div>

     <div className="lesson-links">
             <Link className="link" to="/Montessori2">🎯 Faire le QCM</Link>
           </div>
    </div>
  );
}
