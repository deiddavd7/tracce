class Agenda {
    constructor() {
        this.contacts = [
            { 'nome': 'Nicola', 'telefono': '3331111111' },
            { 'nome': 'Lorenzo', 'telefono': '3332222222' },
            { 'nome': 'Paola', 'telefono': '3333333333' },
            { 'nome': 'Jenny', 'telefono': '3334444444' }
        ];
    }

    // Mostra tutti i contatti dell'agenda
    mostraTuttiContatti() {
        return this.contacts.map(contatto => `${contatto.nome}: ${contatto.telefono}`).join('\n');
    }

    // Mostra un singolo contatto per nome
    mostraContatto(nome) {
        const contatto = this.contacts.find(c => c.nome.toLowerCase() === nome.toLowerCase());
        return contatto ? `${contatto.nome}: ${contatto.telefono}` : `Contatto con nome "${nome}" non trovato.`;
    }

    // Aggiunge un nuovo contatto
    aggiungiContatto(nome, telefono) {
        if (this.contacts.find(c => c.nome.toLowerCase() === nome.toLowerCase())) {
            return `Il contatto con nome "${nome}" esiste già.`;
        }
        this.contacts.push({ 'nome': nome, 'telefono': telefono });
        return `Contatto aggiunto: ${nome}, ${telefono}`;
    }

    // Elimina un contatto per nome
    eliminaContatto(nome) {
        const indice = this.contacts.findIndex(c => c.nome.toLowerCase() === nome.toLowerCase());
        if (indice !== -1) {
            const [contattoRimosso] = this.contacts.splice(indice, 1);
            return `Contatto rimosso: ${contattoRimosso.nome}`;
        }
        return `Contatto con nome "${nome}" non trovato.`;
    }

    // Modifica un contatto esistente
    modificaContatto(nome, nuovoTelefono) {
        const contatto = this.contacts.find(c => c.nome.toLowerCase() === nome.toLowerCase());
        if (contatto) {
            contatto.telefono = nuovoTelefono;
            return `Contatto aggiornato: ${nome}, ${nuovoTelefono}`;
        }
        return `Contatto con nome "${nome}" non trovato.`;
    }
}

// Esempio di utilizzo
const rubrica = new Agenda();
console.log(rubrica.mostraTuttiContatti());
console.log(rubrica.mostraContatto('Paola'));
console.log(rubrica.aggiungiContatto('Alessandro', '3335555555'));
console.log(rubrica.eliminaContatto('Nicola'));
console.log(rubrica.modificaContatto('Lorenzo', '3336666666'));

