"use client"
import Image from "next/image"
import doneArrow from "../../images/arrow-done.svg"

export default function CheckboxInput(props) {
    let {style, title} = props  
    return (<>
    <label className={style.checkbox}>
        <input type="checkbox" />
        <div className={style.checkbox__fakeInput}>
            <Image src={doneArrow} alt="arrow done"></Image>
        </div>
        <p className={style.checkbox__title}>{
            title.map((el, index)=> {
                return <span key={index}>{el}</span>
            })
        }</p>
    </label>
    </>)
}