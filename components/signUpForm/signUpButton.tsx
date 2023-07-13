"use client"
import Link from "next/link";

import { concatStrings } from "../../helpers/concatStrings"

interface SubmitButtonProps {
    style: {[key: string]: string},
    text: string,
    valid?: boolean
}

export default function SubmitButton(props: SubmitButtonProps) {
    let {style, text,valid} = props
    return (<>
    <button 
        type="button"
        className={concatStrings([style.button, valid?style.button_active:undefined])} 
    >
        <Link href="/welcome">{text}</Link>
    </button>
    </>)
}