import React from "react";
import dots from "../../assets/images/dots.png";
import "./hurry.css";
import { RiTeamFill } from "react-icons/ri";
import CountUp from "react-countup";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
// RiTeamFill
const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6,
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};
const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;
function HurryTo() {
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 243248; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;
  return (
    <div className="container">
      <div className="row justify-content-center bg2">
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-5 mb-5">
          <div className="row">
            <div>
              <img src={dots} className="img-fluid" width={"10%"} />
            </div>
            <div className="mt-5">
              <h1 className="text-title">
                Hurry to invest <b>in</b>
              </h1>
              <h1 className="text-title">
                <b> cryptocurrency</b>
                <span style={{ color: "#ffba00" }}>.</span>
              </h1>
              <p className="text-para">
                Investigationes demonstraverunt lectores legere elementum
                pulvinar etiam non quam lacus suspendisse.
              </p>
              <p className="text-para">
                Mirum est notare quam littera gothica, quam nunc putamus parum
                claram, anteposuerit litterarum formas humanitatis per laoreet
                sit amet cursus seacula qui mutationem consuetudium claritas est
                etiam processus dynamicus.
              </p>
            </div>
            <div className="d-flex gap-2">
              <RiTeamFill className="icon-style" />
              <div className="d-block">
                <h1 className="counter-participate">
                  <CountUp start={0} end={6000} />
                  {/* <br /> */}
                </h1>
                <span className="text-participatae"> participate</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <div className="row justify-content-center">
            <div className="box-counter">
              <h1 className="text-center text-white mt-5 text-distribution">
                Distribution <br />
                End in:
              </h1>
              <div className="App d-flex gap-5 mt-5">
                <CountdownCircleTimer
                  {...timerProps}
                  colors="#ffba00"
                  duration={daysDuration}
                  initialRemainingTime={remainingTime}
                >
                  {({ elapsedTime, color }) => (
                    <span style={{ color }}>
                      {renderTime(
                        "days",
                        getTimeDays(daysDuration - elapsedTime)
                      )}
                    </span>
                  )}
                </CountdownCircleTimer>
                <CountdownCircleTimer
                  {...timerProps}
                  colors="#ffba00"
                  duration={daySeconds}
                  initialRemainingTime={remainingTime % daySeconds}
                  onComplete={(totalElapsedTime) => ({
                    shouldRepeat:
                      remainingTime - totalElapsedTime > hourSeconds,
                  })}
                >
                  {({ elapsedTime, color }) => (
                    <span style={{ color }}>
                      {renderTime(
                        "hours",
                        getTimeHours(daySeconds - elapsedTime)
                      )}
                    </span>
                  )}
                </CountdownCircleTimer>
                <CountdownCircleTimer
                  {...timerProps}
                  colors="#ffba00"
                  duration={hourSeconds}
                  initialRemainingTime={remainingTime % hourSeconds}
                  onComplete={(totalElapsedTime) => ({
                    shouldRepeat:
                      remainingTime - totalElapsedTime > minuteSeconds,
                  })}
                >
                  {({ elapsedTime, color }) => (
                    <span style={{ color }}>
                      {renderTime(
                        "minutes",
                        getTimeMinutes(hourSeconds - elapsedTime)
                      )}
                    </span>
                  )}
                </CountdownCircleTimer>
                <CountdownCircleTimer
                  {...timerProps}
                  colors="#ffba00"
                  duration={minuteSeconds}
                  initialRemainingTime={remainingTime % minuteSeconds}
                  onComplete={(totalElapsedTime) => ({
                    shouldRepeat: remainingTime - totalElapsedTime > 0,
                  })}
                >
                  {({ elapsedTime, color }) => (
                    <span style={{ color }}>
                      {renderTime("seconds", getTimeSeconds(elapsedTime))}
                    </span>
                  )}
                </CountdownCircleTimer>
              </div>
              <div className="text-center mt-5">
                <button
                  className="btn btn-success p-3"
                  style={{ borderRadius: "50px" }}
                >
                  <b>Buy RCC tokens</b>
                </button>
              </div>
              <div class="progress mt-4 mt-md-5">
                <div class="progress-bar" role="progressbar">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HurryTo;
