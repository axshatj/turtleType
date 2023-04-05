import { Percentage } from '../helper';

const Result = ({
    error,
    accuracy,
    total,
    className
}:{
    error: number
    accuracy: number
    total: number
    className?: string
})=>{
    return (
        <ul className={`flex flex-col items-center text-primary-500 space-y-3 ${className}`}>
            <li className="text-xl font-semibold">Results</li>
            <li>Accuracy : {Percentage(accuracy)}</li>
            <li className="text-red-500">Errors : {error}</li>
            <li>Typed : {total}</li>
        </ul>
    )
};

export default Result;