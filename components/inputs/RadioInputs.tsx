"use client"
export default function RadioInputs(props) {
    let {inputs, style, title, name} = props
    return(
    <div className={style.radio}>
        <p className={style.radio__title}>{title}</p>
        <div className={style.radio__wrapper}>
            {inputs.map((el, index)=> {
                return (
                <label className={style.radio__label} key={index}>
                    <input type="radio" name={name}/>
                    <div className={style.radio__fakeRadio}></div>
                    <p className={style.radio__text}>{el.text}</p>
                </label>
                )
            })}
        </div>
    </div>)
}