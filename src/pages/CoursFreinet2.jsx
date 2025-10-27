import React from 'react';
import Logo from '../components/Logo';
import HeaderStats from '../components/HeaderStats';
import '../Lesson.css';
import { Link } from 'react-router-dom';

export default function Montessori1() {
  return (
      <div className="lesson-container">
      <h1 className="lesson-mainTitle">🌿 Célestin Freinet Partie 2</h1>
      <h2 className="lesson-subTitle">“Une école Freinet au XXIᵉ siècle”</h2>

      {/* --- INTRODUCTION --- */}
      <h3 className="lesson-chapter">🧩 Introduction : pourquoi parler encore de Freinet ?</h3>
      <p>Le cours s’ouvre sur une question centrale :</p>
      <p>
        👉 Que signifie « une école Freinet » aujourd’hui ? Est-ce une survivance du passé,
        ou une pédagogie encore capable d’inspirer l’école du XXIᵉ siècle ?
      </p>
      <p>
        Pour répondre, le document s’appuie sur une étude de cas concrète : l’école Freinet
        de Mons-en-Barœul, dans le Nord de la France. Cette école publique fonctionne selon
        les principes freinetiens, et permet d’observer comment ces idées se traduisent
        aujourd’hui dans la pratique quotidienne.
      </p>
      <p>
        Le but n’est pas seulement de décrire une méthode, mais de comprendre comment une
        école peut être un espace démocratique, un lieu d’apprentissage actif et de
        coopération réelle.
      </p>

      {/* --- PARTIE 1 --- */}
      <h2 className="lesson-subTitle">1️⃣ L’école comme institution</h2>
      <h3 className="lesson-subSection">1.1 Freinet et la notion d’institution</h3>
      <p>
        Freinet ne voyait pas l’école comme un simple bâtiment où l’on transmet des savoirs,
        mais comme une véritable institution sociale. Cela signifie qu’elle doit être
        pensée, organisée et régulée comme une petite société démocratique.
      </p>
      <p className="lesson-quote">
        💡 Exemple : dans une classe Freinet, les élèves peuvent décider collectivement des
        règles de vie, des projets à mener, ou des sanctions à appliquer — toujours avec
        l’aide et la médiation du maître.
      </p>
      <p>
        Ce processus d’institutionnalisation existe à plusieurs niveaux : l’Éducation
        nationale (cadre global), l’école (chaque établissement a sa culture et ses règles)
        et les classes (le niveau le plus concret, où se vit la démocratie scolaire).
      </p>

      <h3 className="lesson-subSection">1.2 L’école centrée sur les apprentissages</h3>
      <p>
        Cette démocratie scolaire n’est pas une fin en soi : elle est au service des
        apprentissages. Freinet refusait de séparer l’éducation morale, sociale et
        intellectuelle.
      </p>
      <p>
        👉 L’école Freinet est organisée pour que toute activité ait un sens éducatif :
        discussions au conseil de classe, projets collectifs, productions concrètes
        (texte, journal, exposé, expérience scientifique…).
      </p>

      <h3 className="lesson-subSection">1.3 L’idéal démocratique vécu au quotidien</h3>
      <p>
        Freinet ne voulait pas seulement « enseigner la démocratie », mais la faire vivre :
        conseils de classe, responsabilités tournantes, règles communes et ouverture vers
        l’extérieur.
      </p>

      {/* --- PARTIE 2 --- */}
      <h2 className="lesson-subTitle">2️⃣ Les élèves et les apprentissages</h2>
      <h3 className="lesson-subSection">2.1 Tout élève peut apprendre</h3>
      <p>
        Freinet part d’une conviction forte : « Il n’y a pas d’enfants inéducables, il n’y a
        que de mauvais dispositifs d’apprentissage. »
      </p>
      <p>
        L’échec n’est pas une faute, mais un indicateur pour l’enseignant : adapter le
        cadre, diversifier les situations, trouver le bon rythme ou outil.
      </p>

      <h3 className="lesson-subSection">2.2 L’enfant comme sujet apprenant</h3>
      <p>
        Dans une école Freinet, l’enfant est acteur : il découvre, questionne, expérimente.
        L’enseignant devient un guide, un créateur de situations d’apprentissage.
      </p>

      <h3 className="lesson-subSection">2.3 Les modes d’apprentissage selon Freinet</h3>
      <div className="lesson-summaryBox">
        <p>📘 Apprendre en questionnant</p>
        <p>🧠 Apprendre en faisant</p>
        <p>💬 Apprendre en se distanciant</p>
        <p>🔁 Apprendre en variant les rôles</p>
        <p>🎨 Apprendre en expérimentant</p>
        <p>🤝 Apprendre dans la sécurité</p>
        <p>📖 Apprendre dans une histoire</p>
      </div>

      {/* --- PARTIE 3 --- */}
      <h2 className="lesson-subTitle">3️⃣ Le rôle du maître</h2>
      <p>
        L’enseignant n’est pas un chef, mais un guide. Il garantit le cadre, soutient sans
        imposer, encadre la liberté. Freinet disait : « L’enseignant doit être à la fois
        ferme et fraternel. »
      </p>

      {/* --- PARTIE 4 --- */}
      <h2 className="lesson-subTitle">4️⃣ L’évaluation et la question de la violence</h2>
      <h3 className="lesson-subSection">4.1 Transformer les rapports à la violence</h3>
      <p>
        Dans l’école Freinet de Mons-en-Barœul, la parole remplace la punition. Le conseil
        régule les conflits, renforce la justice et la sécurité. La violence perd son
        prestige.
      </p>

      <h3 className="lesson-subSection">4.2 Le passage en 6ᵉ : un défi</h3>
      <p>
        Le passage vers le collège peut être difficile, mais les anciens élèves Freinet
        font preuve d’autonomie, de confiance et de capacité réflexive.
      </p>

      <h3 className="lesson-subSection">4.3 Les mathématiques en pédagogie Freinet</h3>
      <p>
        Les mathématiques sont abordées à travers des projets concrets et discussions
        collectives : une approche logique et vivante.
      </p>

      {/* --- CONCLUSION --- */}
      <h3 className="lesson-conclusionTitle">🧭 Conclusion : une pédagogie vivante</h3>
      <p>
        L’école Freinet du XXIᵉ siècle est une pédagogie coopérative, réflexive et ouverte
        sur le monde. Elle reste un modèle démocratique, émancipateur et rigoureux où
        l’enfant apprend à penser et à vivre ensemble.
      </p>

      <div className="lesson-links">
        <Link className="link" to="/Freinet2">🎯 Faire le QCM</Link>
      </div>
    </div>
  );
}
