import React from "react";
import { faker } from "@faker-js/faker";
import RestartButton from "./components/RestartButton";
import Result from "./components/Result";
import UserTyping from "./components/UserTyping";
import Caret from "./components/caret";
import useWords from "./hooks/useWords";
import useFun from "./hooks/useFun";
import useCountdown from "./hooks/useCountdown";
import { calculateAccuracyPercentage } from './helper';

function App() {
  const { state, words, timeLeft,typed,errors,totalTyped,restart } = useFun();
  const [darkToggle, setDarkToggle] = React.useState(false)
  console.log(darkToggle && "dark")
  return (
    <div className={darkToggle ? "bg-[#121212] h-screen w-screen grid place-items-center text-white" : "bg-[#dfe0e6] grid h-screen place-items-center "}>
    <div>
      <label className="toggleDarkBtn">
        <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
      <span className="slideBtnTg round"></span>
      </label>
      <TimeLeft time={timeLeft} />
      <WordContainer>
        <Words words={words} />
        <UserTyping className="absolute inset-0" userinput={typed} words={words} />
      </WordContainer>
      <RestartButton
        className={"mx-auto mt-10 text-slate-500"}
        onRestart={restart}
      />
      <Result
        className={"mx-auto mt-10 text-primary-500"}
        error={errors}
        accuracy={calculateAccuracyPercentage(errors,totalTyped)}
        total={totalTyped}
      />
    </div>
    </div>
    // </div>
  );
}

const WordContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative max-w-xl mt-3 text-3xl leading-relaxed break-all">
      {children}
    </div>
  );
};

const Words = ({ words }: { words: string }) => {
  return <div className=" text-slate-600">{words}</div>;
};

const TimeLeft = ({ time }: { time: number }) => {
  return <div className="text-left text-primary-400">Time Left : {time}</div>;
};

export default App;
