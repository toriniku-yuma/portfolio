type Props ={
    name:string
    skillLevel:string
    progressColor:string
}

export default function Skill(props:Props){
    return(
        <div className=" font-bold text-lg items-center mb-2 flex">
            <span className=" w-[30%]">{props.name}</span>
            <progress className={`progress ${props.progressColor} sm:w-[60%] w-[40%] h-4`} value={props.skillLevel} max="100"></progress>
            <span className=" ml-4">{props.skillLevel}%</span>
        </div>
    )
}