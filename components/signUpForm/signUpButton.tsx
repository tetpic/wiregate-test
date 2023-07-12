"use client"

import { concatStrings } from "../../helpers/concatStrings"

interface SubmitButtonProps {
    style: {[key: string]: string},
    text: string,
    onClickHandler?: Function,
    valid?: boolean
}

export default function SubmitButton(props: SubmitButtonProps) {
    let {style, text, onClickHandler, valid} = props
    return (<>
    <button onClick={(event)=>{onClickHandler?onClickHandler(event):undefined}} type="button" className={concatStrings([style.button, valid?style.button_active:undefined]) }>{text}</button>
    </>)
}