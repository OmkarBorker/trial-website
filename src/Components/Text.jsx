import { useState, useEffect } from "react";
import "./Text.css";

const AnimatedText = ({ children }) => {
  if (typeof children !== "string")
    throw new Error("children should be a string");
  const [words, setWords] = useState([]);

  useEffect(() => {
    setWords(children.split(" "));
  }, [children]);

  return (
    <p>
      {words.map((word, index) => (
        <span
          style={{ animationDelay: `${0.05 * index}s` , fontSize:"20px"}}
          key={`${word}.${index}`}
          className="animated-text__word"
        >
          {word}{" "}
        </span>
      ))}
    </p>
  );
};

export function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

class InfiniteLoop {
  constructor(opts) {
    const { interval } = opts;
    this.enabled = true;
    this.interval = interval;
  }

  async run(work) {
    while (this.enabled) {
      await work();
      await sleep(this.interval);
    }
  }

  async stop() {
    this.enabled = false;
  }
}

const looper = new InfiniteLoop({
  interval: 500
});

let i = 0;

looper.run(async () => {
  i += 1;
});

export default function Text() {
  return (
    <div className="Text">
      <h1 style={{fontSize:"30px"}}>Hello There !!!</h1>
      <AnimatedText>
      Trippie is a platform which helps you to chalk out a plan to discover the city you have travelled to by building an itinerary specifically designed to suit your interest. We believe that as each person is unique and so are their likings. Building upon that, we design a l ist of activities that you can do, in a time frame of your convenience, and designing a plan where you are picked up from a start location and are dropped off to that location at the end while trying to make sure that you have enjoyed your visit to the maximum.
      </AnimatedText>
    </div>
  );
}
