import classNames from "classnames";
import {useRef} from 'react'
import {MdRefresh} from "react-icons/md";

const RestartButton = ({
    onRestart: handleRestart,
    className = "",
}:{
    onRestart: ()=>void;
    className?:string;
})=>{
    const buttonRef = useRef<HTMLButtonElement>(null);
    const handleClick=()=>{
        buttonRef.current?.blur();
        handleRestart();
    }
    return (
        <button ref={buttonRef} onClick={handleRestart} className={`block rounded px-8 py-2 hover:rotate-90 hue-rotate-180 ${className}`}>
            <MdRefresh className="w-6 h-6"/>
        </button>
    )
};

export default RestartButton;