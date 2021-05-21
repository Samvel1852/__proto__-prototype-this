// Playlist
// *  Add: Pushes the passed-through song to the songs array
// *  Play: Plays current song based on array index
// *  Stop: Holds place in array, but calls above stop song prototype function
// *  Next: Sets the next song in the songs array, calling the above play prototype function
// *  Song should take in two arguments, title and artist, which should both be added as properties when the
// *  Song constructor function is used.
// *  Play: Sets the song as playing using isPlaying
// *  Stop: Sets the song as not playing (isPlaying = false)
class Playlist {
  songs = [];
  currentSong = 0;
  isPlaying = false;
  constructor() {}
  play() {
    return this.songs[this.currentSong];
  }
  add(song) {
    this.songs.push(song);
  }
  play() {
    this.isPlaying = true;
    return `${this.songs[this.currentSong].name} - ${
      this.songs[this.currentSong].title
    }, started to play`;
  }
  stop() {
    this.isPlaying = false;
    return `${this.songs[this.currentSong].name} - ${
      this.songs[this.currentSong].title
    }, has stopped`;
  }
  next() {
    this.currentSong += 1;
  }
  prev() {
    this.currentSong -= 1;
  }
}

class Song {
  constructor(name, title) {
    this.name = name;
    this.title = title;
  }
}

let letItBe = new Song("The Beatles", "Let it be");
let hookah = new Song("Tyga", "Hookah");
let umbrella = new Song("Rihanna", "Umbrella");
// console.log(letItBe);
let happyMood = new Playlist();
happyMood.add(letItBe);
happyMood.add(hookah);
happyMood.add(umbrella);
console.log(happyMood.songs);
// console.log(hookah);
console.log(happyMood.play());
happyMood.next();
console.log(happyMood.play());
console.log(happyMood.stop());
happyMood.next();
console.log(happyMood.play());
