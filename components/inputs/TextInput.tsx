"use client"
import Image from 'next/image'
import { concatStrings } from '../../helpers/concatStrings';

interface TextInputProps {
    placeholder: string; 
    label: string; 
    className: string; 
    style?: any;
    errorText?: string;
    image?: string; 
    changeHandler?: Function; 
    imageClickHandler?: Function;
    onBlurHandler?: Function;
    tipText?: string; 
    value?: string;
    type?:string,
    reference?:any
}

export default function TextInput(props: TextInputProps) {
    let {placeholder, label, className, type, style, image, reference, changeHandler, imageClickHandler, value, errorText} = props

    return (<>
    <label className={className}>
        <p className={style?style.textInput__name:""}>{label}</p>
        <div className={concatStrings([style&&style.textInput__wrapper, errorText&&style.textInput__wrapper_error])}>
            <input type={type?type:"text"} ref={reference?reference:undefined} onBlur={event=>{changeHandler?changeHandler(event):""}} onInput={event=>{changeHandler?changeHandler(event):""}} placeholder={placeholder} value={value} />
            {image?<Image src={image} onClick={event=>{imageClickHandler?imageClickHandler(event):""}} alt="input image"/>:""}
        </div>
        {errorText?<p className={style?style.textInput__error:""}>{errorText}</p>:''}
    </label>
    </>)
}