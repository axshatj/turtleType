import { useState,useCallback,useEffect } from "react";
import useCountdown from "./useCountdown";
import useWords from "./useWords";
import useTyping from './useTyping';
import { countErrors } from "../helper";
export type State = "start" | "run" | "complete";

const NO_OF_WORDS = 12;
const TIME = 30;

const useFun = () => {
  const [state, setState] = useState<State>("start");
  const { words, updateWords } = useWords(NO_OF_WORDS);
  const { timeLeft, startCount, resetCountdown } = useCountdown(TIME);
  const {typed,cursor,clearTyped,resetTotalTyped,totalTyped} = useTyping(state!=="complete")
  const [errors,setErrors]=useState(0);

  const isStarting=state==="start" && cursor>0;
  const areWordsfinished=cursor===words.length;
  
  const restart = useCallback(()=>{
    console.log("restarting...");
    resetCountdown();
    resetTotalTyped();
    setState("start");
    setErrors(0);
    updateWords();
    clearTyped();    
  },[clearTyped,updateWords,resetCountdown,resetTotalTyped]);

  const sumErrors=useCallback(()=>{
    const wordsReached =words.substring(0,cursor);
    setErrors((prevError)=>prevError+countErrors(typed,wordsReached))
  },[typed,words,cursor]);

  useEffect(()=>{
    if(isStarting){
      setState("run");
      startCount();
    }
  },[isStarting,startCount,cursor]);

  useEffect(()=>{
    if(areWordsfinished){
      console.log("words are finished...");
      sumErrors();
      updateWords();
      clearTyped();
    }
  },[
    cursor,words,clearTyped,typed,areWordsfinished,updateWords,sumErrors
  ])


  useEffect(()=>{
    if(!timeLeft){
      console.log("times up!!!!!");
      setState("complete");
      sumErrors();
    }
  },[timeLeft,sumErrors])
  return { state, words, timeLeft,typed,cursor,totalTyped,errors,restart};
};
export default useFun;
