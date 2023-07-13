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
    value?: string;
    type?:string,    
    inputName?: string
}

export default function TextInput(props: TextInputProps) {
    let {placeholder, label, className, type, inputName, style, image, changeHandler, imageClickHandler, value, errorText} = props

    return (<>
    <label className={className}>
        <p className={style?style.textInput__name:""}>{label}</p>
        <div className={concatStrings([style&&style.textInput__wrapper, errorText&&style.textInput__wrapper_error])}>
            <input 
                type={type?type:"text"} 
                name={inputName} 
                onBlur={event=>{changeHandler?changeHandler(event):""}} 
                onInput={event=>{changeHandler?changeHandler(event):""}} 
                placeholder={placeholder} 
                value={value} 
            />
            {image?<Image src={image} onClick={event=>{imageClickHandler?imageClickHandler(event):""}} alt="input image"/>:""}
        </div>
        {errorText?<p className={style?style.textInput__error:""}>{errorText}</p>:''}
    </label>
    </>)
}