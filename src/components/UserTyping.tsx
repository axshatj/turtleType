import cn from "classnames";
import Caret from "./caret";

const UserTyping= ({
    userinput,
    words,
    className="",
}:{
    userinput: string;
    words:string;
    className?: string;

})=>{
    const typedchar = userinput.split("");
    return (
        <div className={className}>
            {typedchar.map((char,ind)=>{
                return <Character key={`$(char)_$(ind)`} char={char} expected={words[ind]}/>;
            })}
            <Caret/>
        </div>
    )
};

const Character = ({char,expected}:{char:string;expected:string})=>{
    const isCorrect = char===expected;
    const isWhitespace=expected===" ";
    if(!isCorrect || isWhitespace)char=expected;
    return <span className={cn({
        "text-red-600":!isCorrect && !isWhitespace,
        "text-primary-500":isCorrect && !isWhitespace,
        "bg-red-500/50":!isCorrect && isWhitespace,
    })}>{char}</span>
}

export default UserTyping;