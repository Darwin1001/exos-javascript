function moyenneNotes(notes) {
    const notesFiltrees = notes.filter(note => note >= 10); 
    if (notesFiltrees.length === 0) return 0; 
    const somme = notesFiltrees.reduce((acc, note) => acc + note, 0);
    return somme / notesFiltrees.length; 
}
console.log(moyenneNotes([8, 12, 15, 7, 10, 18])); 
console.log(moyenneNotes([10, 10, 10])); 
