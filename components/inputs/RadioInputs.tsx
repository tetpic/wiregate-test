"use client"

interface RadioInputsProps {
    inputs: {text: string}[], 
    style: {[key: string]: string}, 
    title: string, 
    inputName: string, 
    onClick: Function
}
export default function RadioInputs(props: RadioInputsProps) {
    let {inputs, style, title, inputName, onClick} = props
    return(
    <div className={style.radio}>
        <p className={style.radio__title}>{title}</p>
        <div className={style.radio__wrapper}>
            {inputs.map((el, index)=> {
                return (
                <label className={style.radio__label}  key={index}>
                    <input type="radio" name={inputName} onChange={(event)=> {onClick(event)}} data-type={el.text}/>
                    <div className={style.radio__fakeRadio}></div>
                    <p className={style.radio__text}>{el.text}</p>
                </label>
                )
            })}
        </div>
    </div>)
}