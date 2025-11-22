"use client";

import { useEffect, useState } from "react";

const targetDuration: number = 24 * 60 * 60 * 1000; // 24 hours in ms

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<number>(targetDuration);

  useEffect(() => {
    const storedEndTime = localStorage.getItem("countdownEnd");

    let endTime: number;

    if (storedEndTime) {
      endTime = parseInt(storedEndTime, 10);
    } else {
      endTime = Date.now() + targetDuration;
      localStorage.setItem("countdownEnd", String(endTime));
    }

    const interval = setInterval(() => {
      const diff = endTime - Date.now();

      if (diff <= 0) {
        const newEnd: number = Date.now() + targetDuration;
        localStorage.setItem("countdownEnd", String(newEnd));
        setTimeLeft(targetDuration);
      } else {
        setTimeLeft(diff);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days: number = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours: number = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const mins: number = Math.floor((timeLeft / (1000 * 60)) % 60);
  const secs: number = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="time-counter">
      <div className="time-countdown clearfix">

        <div className="counter-column">
          <div className="inner">
            <span className="count">{String(days).padStart(2, "0")}</span>
            Days
          </div>
        </div>

        <div className="counter-column">
          <div className="inner">
            <span className="count">{String(hours).padStart(2, "0")}</span>
            Hours
          </div>
        </div>

        <div className="counter-column">
          <div className="inner">
            <span className="count">{String(mins).padStart(2, "0")}</span>
            Mins
          </div>
        </div>

        <div className="counter-column">
          <div className="inner">
            <span className="count">{String(secs).padStart(2, "0")}</span>
            Secs
          </div>
        </div>

      </div>
    </div>
  );
}
