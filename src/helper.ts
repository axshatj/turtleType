export const isKeyboardCodeAllowed = (code: string) => {
    return (
      code.startsWith("Key") ||
      code.startsWith("Digit") ||
      code === "Backspace" ||
      code === "Space"
    );
  };

export const countErrors =  (char:string ,expected:string)=>{
    const expectedChar=expected.split("");
    return expectedChar.reduce((errors,expectedChar,i)=>{
        const actualChar=char[i];
        if(actualChar!==expectedChar){
          errors++;
        }
        return errors;
    },0);
};
export const calculateAccuracyPercentage = (errors:number ,total:number)=>{
    if(total>0){
        const corrects=total-errors;
        return (corrects/total)*100;
    }
    return 0;
}
export const Percentage = (percentage: number)=>{
    return percentage.toFixed(0) + "%";
}

