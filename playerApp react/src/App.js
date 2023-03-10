import "./styles.css";
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";
import song1 from './songs/1.m4a'
import song2 from './songs/2.m4a'
import song3 from './songs/3.m4a'


const tracks = [
  {
    url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
    title: "Madza - Chords of Life",
    tags: ["house"]
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
    title: "Madza - Late Night Drive",
    tags: ["dnb"]
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
    title: "Madza - Persistence",
    tags: ["dubstep"]
  },
  {
    url: song1,
    title: "Eternal - Marshmello",
    tags: ["dubstep"]
  },
  {
    url: song2,
    title: "I'm Comin' Over - Chris Young",
    tags: ["dubstep"]
  },
  {
    url: song3,
    title: "msh 3arf esmaha",
    tags: ["dubstep"]
  }
];

export default function App() {
  return (
    <div className="App">
      <h1>React Player</h1>
      <Player
        trackList={tracks}
        includeTags={true}
        includeSearch={true}
        showPlaylist={true}
        autoPlayNextTrack={true}
      />
    </div>
  );
}
