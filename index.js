const audioClips = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

function App() {
  return (
    <div class="bg-dark text-white vh-100 modal-open" id="drum-machine">
      <h1 class="text-center font-weight-bold">Drum Machine</h1>
      <div
        class="h2 bg-info text-center text-dark font-weight-bolder"
        id="display"
      ></div>
      <div class="container">
        <div class="row">
          {audioClips.slice(0, 3).map((clip) => (
            <DrumPad
              key={clip.keyCode}
              keyCode={clip.keyCode}
              keyTrigger={clip.keyTrigger}
              id={clip.id}
              url={clip.url}
            />
          ))}
        </div>
        <div class="row">
          {audioClips.slice(3, 6).map((clip) => (
            <DrumPad
              key={clip.keyCode}
              keyCode={clip.keyCode}
              keyTrigger={clip.keyTrigger}
              id={clip.id}
              url={clip.url}
            />
          ))}
        </div>
        <div class="row">
          {audioClips.slice(6, 9).map((clip) => (
            <DrumPad
              key={clip.keyCode}
              keyCode={clip.keyCode}
              keyTrigger={clip.keyTrigger}
              id={clip.id}
              url={clip.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function DrumPad(props) {
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (e) => {
    if (e.keyCode === props.keyCode) {
      playSound();
    }
  };

  const playSound = () => {
    const audio = document.getElementById(props.keyTrigger),
      display = document.getElementById("display");
    setActive(true);
    display.innerHTML = props.id;
    setTimeout(() => {
      display.innerHTML = "";
      setActive(false);
    }, 500);
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <div
      onClick={playSound}
      class={`drum-pad col-sm btn btn-success p-4 m-3 ${
        active && "btn-danger"
      }`}
      id={props.keyCode}
    >
      <audio class="clip" id={props.keyTrigger} src={props.url} />
      {props.keyTrigger}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
