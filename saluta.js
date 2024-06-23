// Definizione della classe
class Persona {
    constructor(nome, cognome, eta) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
    }

    // Metodo saluta
    saluta() {
        return `Ciao, mi chiamo ${this.nome} ${this.cognome} e ho ${this.eta} anni.`;
    }
}

// Creazione di un'istanza e chiamata del metodo
const persona = new Persona("Mario", "Rossi", 30);
console.log(persona.saluta());



