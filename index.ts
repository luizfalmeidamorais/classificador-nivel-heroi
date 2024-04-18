/*
    # Desafio 01: Classificador de Nível de Herói

    ## O que deve ser utilizado:
    - Variáveis
    - Operadores
    - Laços de repetição
    - Estruturas de decisões

    ## Objetivo
    - Crie uma variável para armazenar o nome e a quantidade de
    experiência (XP) de um herói, depois utilize uma estrutura
    de decisão para apresentar alguma das mensagens abaixo:
        - Se XP for menor do que 1.000 = Ferro
        - Se XP for entre 1.001 e 2.000 = Bronze
        - Se XP for entre 2.001 e 5.000 = Prata
        - Se XP for entre 5.001 e 6.000 = Ouro
        - Se XP for entre 7.001 e 8.000 = Platina
        - Se XP for entre 8.001 e 9.000 = Ascendente
        - Se XP for entre 9.001 e 10.000 = Imortal
        - Se XP for maior ou igual a 10.001 = Radiante

    ## Saída
    - Ao final deve se exibir uma mensagem:
        - "O herói [NOME] está no nível de [NÍVEL]!"
*/

// Resolução do desafio
interface Hero {
	nome: string;
	experiencia: number;
}

function determinarNivel(hero: Hero): string {
	const xp = hero.experiencia;

	if (xp <= 1000) return "Ferro";
	if (xp >= 1001 && xp <= 2000) return "Bronze";
	if (xp >= 2001 && xp <= 5000) return "Prata";
	if (xp >= 5001 && xp <= 6000) return "Ouro";
	if (xp >= 7001 && xp <= 8000) return "Platina";
	if (xp >= 8001 && xp <= 9000) return "Ascendente";
	if (xp >= 9001 && xp <= 10000) return "Imortal";
	return "Radiante";
}

function exibirMensagem(hero: Hero, nivel: string): void {
	console.log(`O herói ${hero.nome} está no nível de ${nivel}!`);
}

const meuHeroi: Hero = {
	nome: "Invoker",
	experiencia: 9000,
};

const nivelDoHeroi = determinarNivel(meuHeroi);
exibirMensagem(meuHeroi, nivelDoHeroi);

// Saída
// O herói Invoker está no nível de Ascendente!
