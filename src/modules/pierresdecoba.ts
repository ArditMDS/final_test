type Die = 'vert' | 'jaune' | 'orange' | 'gris' | 'bleu' | 'rose';

export function getSolution(dice: Die[]): [Die[], Die[]] {
    const length = dice.length;
    const totalSubsets = 1 << length;

    for (let i = 0; i < totalSubsets; i++) {
        const subset: Die[] = [];
        for (let j = 0; j < length; j++) {
            if (i & (1 << j)) {
                subset.push(dice[j]);
            }
        }

        const complement = dice.filter((_, index) => !(i & (1 << index)));
        if (getScoreEquipe(subset) === getScoreEquipe(complement)) {
            return [subset, complement];
        }
    }

    throw new Error("Aucune partition équilibrée trouvée. Vérifiez les entrées.");
}

export function getScoreEquipe(team: Die[]): number {
    let score = 0;

    // Comptage des dés par couleur
    const countVert = team.filter(die => die === 'vert').length;
    const countJaune = team.filter(die => die === 'jaune').length;
    const countOrange = team.filter(die => die === 'orange').length;
    const countGris = team.filter(die => die === 'gris').length;
    const countBleu = team.filter(die => die === 'bleu').length;
    const countRose = team.filter(die => die === 'rose').length;

    // Calcul des points de base pour chaque dé
    score += countVert;
    score -= countJaune
    score += countGris * 2;

    // Calcul des points pour les dés orange
    if (countOrange > 0) {
        score += countOrange * (team.length % 2 === 0 ? 2 : 1);
    }

    // Calcul des points pour les dés bleus
    if (countBleu > 0) {
        score += countBleu * (team.length - countBleu);
    }

    // Calcul des points pour les dés roses
    if (countRose > 0) {
        const minValue = Math.min(...team.map(die => {
            switch (die) {
                case 'vert': return 1;
                case 'gris': return 2;
                case 'orange': return (team.length % 2 === 0 ? 2 : 1);
                case 'jaune': return -1;
                case 'bleu': return (team.length - countBleu);
                case 'rose': return 3;
                default: return 0;
            }
        }));
        score += countRose * 3;
        score -= countRose * minValue;
    }

    return score;
}
