interface AudioPlayer {
    audioVolumne: number,
    songDuration: number,
    song: string;
    details: Details
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer : AudioPlayer = {
    audioVolumne: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

// Desestructuracion
console.log('Song:', audioPlayer.song);
console.log('Duration:', audioPlayer.songDuration);
console.log('Author:', audioPlayer.details.author);

// Desestructuracion y renombro el atributo
const { song : anotherSong } = audioPlayer;
console.log('Song:', anotherSong)

//Desestructuracion de objetos anidados
const { 
    song: newSong,
    details: { author }  
} = audioPlayer;

console.log('Song:', newSong)
console.log('Author:', author)

const { 
    song: otroSong,
    details
} = audioPlayer;

const { author: newAuthor } = details;
console.log('Author:', newAuthor)

//Arreglos
const dbz: string[]  = ['Goku','Vegeta','Trunk'];
const trunks = dbz[4];

console.log('Personaje 2:', dbz[2] || 'No hay personaje');
console.log('Personaje 2:', dbz[5] || 'No hay personaje');

console.log('Personaje 2:', trunks);

//Para extraer a trunk
const [, , trunksEncontrado] : string[]  = ['Goku','Vegeta','Trunk'];

const [, , trunksEncontrado1 = 'Not Found'] : string[]  = ['Goku','Vegeta'];

console.log('Personaje 2:', trunksEncontrado);
console.log('Personaje 2:', trunksEncontrado1);

export {};