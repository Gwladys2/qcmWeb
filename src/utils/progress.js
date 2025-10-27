export const loadProgress = async () => {
  const data = JSON.parse(localStorage.getItem('progress')) || {};
  return {
    xp: data.xp || 0,
    lives: data.lives || 5,
    niveau: data.niveau || 1,
    livesEarnedFromXp: data.livesEarnedFromXp || 0,
  };
};

export const saveProgress = async (xp, lives, niveau, livesEarnedFromXp) => {
  const data = { xp, lives, niveau, livesEarnedFromXp };
  localStorage.setItem('progress', JSON.stringify(data));
};
