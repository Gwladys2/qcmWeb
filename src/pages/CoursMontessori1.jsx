import React from 'react';
import Logo from '../components/Logo';
import HeaderStats from '../components/HeaderStats';
import '../Lesson.css';
import { Link } from 'react-router-dom';

export default function Montessori1() {
  return (
    <div className="lesson-container">
      <Logo />

      <h1 className="lesson-mainTitle">🌼 Maria Montessori</h1>
      <h2 className="lesson-subTitle">« Aide-moi à faire tout seul »</h2>

      <section>
        <h3 className="lesson-chapter">🔹 1. Éléments biographiques</h3>
        <p>
          Maria Montessori (1870-1952), née en Italie, à une époque où l’éducation féminine est rare,
          devient la première femme médecin d’Italie. Elle se passionne pour la neurologie,
          la psychiatrie, la psychologie et l’anthropologie.
        </p>
        <p>
          En travaillant avec des enfants dits « déficients », elle comprend que leurs difficultés
          viennent souvent de l’environnement éducatif. Elle crée alors du matériel pédagogique inspiré
          d’Itard et de Séguin, qui démontre des progrès spectaculaires.
        </p>

        <h4 className="lesson-subSection">🏫 La Casa dei Bambini (1907)</h4>
        <p>
          Premier centre pour enfants de 3 à 6 ans à Rome, dans un quartier ouvrier. Montessori y met
          en place son matériel et adapte le mobilier à la taille des enfants. Les résultats sont
          impressionnants : autonomie, calme, concentration, apprentissage rapide de la lecture et de
          l’écriture.
        </p>
        <p>
          Ce succès se diffuse dans le monde entier : Europe, États-Unis, Chine, Japon, Russie. Soutenue
          par des penseurs comme Piaget, Freud ou Gandhi, elle fonde en 1929 l’Association Montessori
          Internationale (AMI). Opposée au régime de Mussolini, elle s’exile et défend une vision de
          l’éducation comme « arme pour la paix ».
        </p>
        <blockquote className="lesson-quote">
          🌍 Aujourd’hui, plus de 20 000 écoles Montessori existent dans le monde, dont de nombreuses
          écoles privées hors contrat en France.
        </blockquote>
      </section>

      <section>
        <h3 className="lesson-chapter">🔹 2. Principes éducatifs</h3>

        <h4 className="lesson-subSection">a) Vision de l’enfant</h4>
        <p>
          « L’enfant porte en soi la clé de son existence individuelle. »  
          Chaque enfant possède un plan de développement naturel et spontané. L’adulte, s’il intervient
          trop, risque de freiner cette évolution. Montessori parle d’un « esprit absorbant » :
          l’enfant apprend par observation, exploration et imitation.
        </p>

        <h4 className="lesson-subSection">b) Fondement spirituel</h4>
        <p>
          Montessori accorde une dimension spirituelle à sa pédagogie : Dieu aurait donné à l’enfant des
          lois naturelles de développement. L’éducateur doit les respecter et les accompagner sans les
          contraindre. L’éducation révèle l’ordre divin de la nature.
        </p>

        <h4 className="lesson-subSection">c) Concentration et attention</h4>
        <p>
          L’enfant se concentre profondément lorsqu’il choisit librement une activité motivante.  
          Interrompre ou forcer un enfant nuit à son développement intérieur. Le respect de ce rythme
          favorise la stabilité émotionnelle et la confiance en soi.
        </p>

        <h4 className="lesson-subSection">d) Autonomie</h4>
        <blockquote className="lesson-quote">« Aide-moi à faire tout seul. »</blockquote>
        <p>
          L’environnement Montessori est conçu pour favoriser l’indépendance : mobilier adapté, matériel
          accessible, autonomie dans les gestes quotidiens. L’adulte guide sans imposer. L’enfant agit,
          expérimente et apprend de lui-même.
        </p>

        <h4 className="lesson-subSection">e) Pédagogie scientifique</h4>
        <p>
          La pédagogie Montessori est issue de l’observation et de l’expérimentation.  
          Elle repose sur une méthode scientifique où la pratique nourrit la théorie, avec une attention
          particulière portée aux stades de développement.
        </p>

        <h4 className="lesson-subSection">f) Posture de l’adulte</h4>
        <p>
          L’adulte est humble et discret. Il observe avant d’intervenir, agit avec bienveillance et
          confiance. L’éducateur devient un guide, non une autorité imposée.
        </p>
      </section>

      <section>
        <h3 className="lesson-chapter">🔹 3. Démarche pédagogique</h3>

        <h4 className="lesson-subSection">a) Bienveillance</h4>
        <p>
          L’éducateur Montessori ne punit pas : il encourage.  
          Les erreurs deviennent des occasions d’apprentissage, et la confiance remplace la peur.  
          L’enfant apprend à se corriger lui-même.
        </p>

        <h4 className="lesson-subSection">b) Environnement préparé</h4>
        <p>
          Chaque espace est conçu pour être simple, ordonné et beau.  
          Ce cadre sécurisant favorise la concentration, la paix et la coopération entre enfants.
        </p>

        <h4 className="lesson-subSection">c) Matériel pédagogique spécifique</h4>
        <p>
          Chaque matériel a un objectif unique (taille, couleur, son, forme...).  
          Il est sensoriel, auto-correctif et limité en nombre pour stimuler la patience et la
          coopération.  
          L’enfant passe du concret à l’abstrait, du simple au complexe.
        </p>
      </section>

      <h3 className="lesson-chapter">🔹 Conclusion : l’héritage Montessori</h3>
      <div className="lesson-summaryBox">
        <p>🌱 L’enfant au centre de l’apprentissage</p>
        <p>💬 Une liberté encadrée et bienveillante</p>
        <p>🤝 Une responsabilisation progressive</p>
        <p>✨ Une confiance en la nature de l’enfant</p>
      </div>
      <p>
        Maria Montessori a bouleversé l’éducation en plaçant l’enfant au cœur de son apprentissage.
        Sa méthode, fondée sur la liberté et la confiance, continue d’influencer les écoles
        alternatives et les approches modernes de la psychologie du développement.
      </p>

      <div className="lesson-links">
        <Link className="link" to="/Montessori1">🎯 Faire le QCM</Link>
      </div>
    </div>
  );
}
