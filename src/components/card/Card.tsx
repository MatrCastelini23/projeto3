import type React from "react";



interface ICardProps{
    children: React.ReactNode
}

function Card(props: ICardProps){

    return(
        <div>{props.children}</div>
    )
}

export default Card;