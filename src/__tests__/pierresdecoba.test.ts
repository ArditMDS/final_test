import {getScoreTeam, getSolution} from "../modules/pierresdecoba";

type Die = 'vert' | 'jaune' | 'orange' | 'gris' | 'bleu' | 'rose';

describe('test classique vert et vert', () => {
    it('retourne le resultat attendu avec deux vert', () => {
        const result = getSolution(['vert', 'vert']);
        const [subset, complement] = result;
        expect(getScoreTeam(subset)).toBe(getScoreTeam(complement));
    });
});

describe('orange, deux gris et deux vert', () => {
    it('retourne le resultat attendu avec orange, deux gris et deux vert', () => {
        const result = getSolution(['vert', 'vert', 'gris', 'gris', 'orange']);
        const [subset, complement] = result;
        expect(getScoreTeam(subset)).toBe(getScoreTeam(complement));
    });
});

describe('orange, jaune, vert', () => {
    it('retourne le resultat attendu avec orange, un jaune et un vert', () => {
        const result = getSolution(['vert', 'vert', 'jaune', 'orange']);
        const [subset, complement] = result;
        expect(getScoreTeam(subset)).toBe(getScoreTeam(complement));
    });
});

describe('vert et bleu', () => {
    it('retourne le resultat attendu avec un bleu et un vert', () => {
        const result = getSolution(['vert', 'bleu']);
        const [subset, complement] = result;
        expect(getScoreTeam(subset)).toBe(getScoreTeam(complement));
    });
});

describe('retourne une erreur si c\'est impossible', () => {
    it('retourne le une erreur avec trois vert', () => {
        expect(() => getSolution(['vert', 'vert', 'vert'])).toThrow("Aucune partition équilibrée trouvée. Vérifiez les entrées.");
    });
});

describe('retourne une erreur si c\'est impossible à équilibrer', () => {
    it('retourne une erreur avec des dés impossibles à équilibrer', () => {
        expect(() => getSolution(['vert', 'gris', 'jaune', 'bleu'])).toThrow("Aucune partition équilibrée trouvée. Vérifiez les entrées.");
    });
});

describe('vert, rose, deux gris, jaune', () => {
    it('retourne le resultat attendu avec vert, rose, deux gris, jaune', () => {
        const result = getSolution(['vert', 'gris', 'jaune', 'rose', 'gris']);
        const [subset, complement] = result;
        expect(getScoreTeam(subset)).toBe(getScoreTeam(complement));
    });
});

describe('Cas complexes 1', () => {
    it('retourne le résultat attendu avec vert, rose, deux gris, jaune', () => {
        const result = getSolution(['vert', 'gris', 'jaune', 'rose', 'gris']);
        const [subset, complement] = result;
        expect(getScoreTeam(subset)).toBe(getScoreTeam(complement));
    });
});

describe('Cas complexes 2', () => {
    it('retourne le résultat attendu avec multiples dés roses', () => {
        const result = getSolution(['vert', 'rose', 'gris', 'rose', 'gris']);
        const [subset, complement] = result;
        expect(getScoreTeam(subset)).toBe(getScoreTeam(complement));
    });
});

describe('Cas complexes 3', () => {

    it('retourne le résultat attendu avec tous les types de dés', () => {
        const result = getSolution(['vert', 'jaune', 'orange', 'gris', 'bleu', 'rose']);
        const [subset, complement] = result;
        expect(getScoreTeam(subset)).toBe(getScoreTeam(complement));
    });
});


describe('deux roses et trois gris', () => {
    it('retourne le resultat attendu avec deux roses et trois gris', () => {
        const result = getSolution(['rose', 'gris', 'gris', 'rose', 'gris']);
        const [subset, complement] = result;
        expect(getScoreTeam(subset)).toBe(getScoreTeam(complement));
    });
});


describe('Tests supplémentaires', () => {
    it('retourne le résultat attendu avec un mélange de verts et jaunes', () => {
        const result = getSolution(['vert', 'jaune', 'vert', 'jaune']);
        const [subset, complement] = result;
        expect(getScoreTeam(subset)).toBe(getScoreTeam(complement));
    });

    it('retourne le résultat attendu avec deux oranges (nombre impair)', () => {
        const result = getSolution(['orange', 'orange', 'gris', 'vert']);
        const [subset, complement] = result;
        expect(getScoreTeam(subset)).toBe(getScoreTeam(complement));
    });

    it('retourne le résultat attendu avec deux oranges (nombre pair)', () => {
        const result = getSolution(['orange', 'orange', 'gris']);
        const [subset, complement] = result;
        expect(getScoreTeam(subset)).toBe(getScoreTeam(complement));
    });

    it('retourne le résultat attendu avec multiples bleus', () => {
        const result = getSolution(['bleu', 'bleu', 'vert', 'gris', 'jaune']);
        const [subset, complement] = result;
        expect(getScoreTeam(subset)).toBe(getScoreTeam(complement));
    });

    it('retourne le résultat attendu avec trois roses et un vert', () => {
        const result = getSolution(['rose', 'rose', 'rose', 'vert']);
        const [subset, complement] = result;
        expect(getScoreTeam(subset)).toBe(getScoreTeam(complement));
    });

    it('retourne le résultat attendu avec un mélange complexe', () => {
        const result = getSolution(['vert', 'jaune', 'orange', 'gris', 'bleu', 'rose', 'gris', 'jaune']);
        const [subset, complement] = result;
        expect(getScoreTeam(subset)).toBe(getScoreTeam(complement));
    });

    it('retourne le résultat attendu avec multiples couleurs et un seul bleu', () => {
        const result = getSolution(['vert', 'orange', 'gris', 'bleu', 'rose']);
        const [subset, complement] = result;
        expect(getScoreTeam(subset)).toBe(getScoreTeam(complement));
    });

    it('retourne une erreur avec un seul dé bleu', () => {
        expect(() => getSolution(['bleu'])).toThrow("Aucune partition équilibrée trouvée. Vérifiez les entrées.");
    });

    it('retourne le résultat attendu avec une configuration spéciale', () => {
        const result = getSolution(['vert', 'gris', 'gris', 'orange', 'jaune', 'bleu', 'rose']);
        const [subset, complement] = result;
        expect(getScoreTeam(subset)).toBe(getScoreTeam(complement));
    });

    it('retourne le score correct pour une combinaison de tous les dés', () => {
        const team: Die[] = ['vert', 'jaune', 'orange', 'gris', 'bleu', 'rose'];
        expect(getScoreTeam(team)).toBe(10);
    });

    it('retourne le score correct pour un mélange complexe de dés', () => {
        const team: Die[] = ['vert', 'jaune', 'orange', 'orange', 'gris', 'bleu', 'rose'];
        expect(getScoreTeam(team)).toBe(11);
    });
});