import type React from "react";


export interface IButtonProps{
    classe: string;
    children: React.ReactNode
}

function Button(props: IButtonProps){

    return(
        <button className={props.classe}>
            {props.children}            
        </button>
    )
}

export default Button;