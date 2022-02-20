import "./App.scss";
import CountDown from "./components/CountDown/CountDown";
import DigitalClock from "./components/DigitalClock/DigitalClock";
import StopWatch from "./components/StopWatch/StopWatch/StopWatch";

function App() {
  return (
    <div className="clock">
      <div className="clock__digital">
        <DigitalClock />
      </div>
      <div className="clock__count">
        <CountDown />
      </div>
      <div className="clock__watch">
        <StopWatch />
      </div>
    </div>
  );
}

export default App;
