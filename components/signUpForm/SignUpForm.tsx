"use client"
import { concatStrings } from "../../helpers/concatStrings";
import TextInput from "../inputs/TextInput";
import SignTitle from "./signTitle";
import s from "./signUpForm.module.scss"

import doneImg from "../../images/done.svg"
import eyeClosed from "../../images/eye-close.svg"
import eyeOpen from "../../images/eye-open.svg"
import RadioInputs from "../inputs/RadioInputs";
import CheckboxInput from "../inputs/CheckboxInputs";
import Link from "next/link";
import SubmitButton from "./signUpButton";
import { useEffect, useRef, useState } from "react";
// import { useIMask } from 'react-imask';

export default function SignUpForm() {

    let [showPass, togglePass] = useState(false)    
    let [password, changePassword] = useState({value: "", valid: false})
    
    let [name, changeName] = useState({value: "", valid: false})
    
    let [surname, changeSurname] = useState({value: "", valid: false})
    let [address, changeAddress] = useState({value: "", valid: false})

    let [phoneNumber, setPhoneNumber] = useState({value: "", valid: false})
    let phoneRef = useRef(null!)

    // const maskOptions = { mask: Number };

    // useIMask(phoneRef, { mask: '0000-00-00' });

    const passwordHandler = (event) => {
        let passwordElement = event.target as HTMLInputElement        
        changePassword({...password, value: passwordElement.value})
        console.log(passwordElement.value)
        if(event.type === "blur") {
            changePassword({...password, })
        }
    }

    const nameHandler = (event) => {
        let nameElement = event.target as HTMLInputElement
        let filtered = nameElement.value.replace(/\D/g, "") 
        changeName({...name, value: filtered})
    }

    const surnameHandler = (event) => {
        console.log(event)
        let surnameElement = event.target as HTMLInputElement
        changeSurname({...surname, value: surnameElement.value})
    }

    const passwordShow = () => {
        showPass === false?togglePass(true):togglePass(false)
    }

    



    
    
    
    const agreement = ["I agree with all ", <Link href="/terms">Terms and Conditions</Link>, " and ", <Link href="/policy">Privacy Policies.</Link>]
    
    return (<>
        <div className={s.form}>
            <SignTitle/>
            <div className={s.form__wrapper}>
                <TextInput label="Your name" placeholder="Your name" 
                    image={name.valid?doneImg:undefined}  
                    className={concatStrings([s.textInput, s.textInput_short])}
                    style={s}
                    value={name.value}
                    changeHandler={nameHandler}
                />
                <TextInput label="Your last name" placeholder="Your last name" 
                    image={surname.valid?doneImg:undefined} 
                    className={concatStrings([s.textInput, s.textInput_short])}
                    style={s}
                    changeHandler={surnameHandler}
                />
                <TextInput label="Mobile Number" placeholder="+7(999)999-99-99" 
                    errorText={"Please enter the number in format +7"} 
                    image={doneImg} 
                    className={concatStrings([s.textInput])}
                    style={s}
                    ref={phoneRef}
                />

                <RadioInputs inputs={[{text:"Yes"}, {text: "No"}]} style={s} title="Are you a company?" name="company"/>

                <TextInput label="Address" placeholder="Enter your address company" 
                    image={doneImg} 
                    className={s.textInput}
                    style={s}
                />
                <TextInput label="Password" placeholder="Create password" 
                    image={showPass?eyeOpen:eyeClosed} 
                    className={s.textInput} 
                    style={s}
                    imageClickHandler={passwordShow}
                    changeHandler={passwordHandler}
                    value={password.value}
                    type={showPass?"text":"password"}
                />

                <CheckboxInput style={s} title={agreement}/>

                <SubmitButton style={s} text="Next" valid={false} onClickHandler={()=>console.log(2)}/>
            </div>
        </div>
    </>)
}


// К сожалению, я не могу предоставить пример работы хука useIMask, так как библиотека IMask, которая была упомянута ранее, не предлагает хука с названием useIMask.

// Jed Watson разработал ICausedThis — библиотеку с React-хуком под названием useIMask. Хук useIMask позволяет применять маску к входным данным, таким как текстовые поля.

// Вот пример использования хука useIMask в React:

// Установите библиотеку ic1 и импортируйте хук useIMask:

// npm install ic1

// import { useIMask } from 'ic1';
// Внутри вашего функционального компонента React, используйте хук useIMask для применения маски к текстовому полю:

// import React from 'react';
// import { useIMask } from 'ic1';

// function MyComponent() {
//   const inputRef = React.useRef(null);
  
//   // Используем хук useIMask для применения маски
//   useIMask(inputRef, { mask: '0000-00-00' });
  
//   return (
//     <input ref={inputRef} type="text" />
//   );
// }
// Приведенный выше пример показывает, как использовать хук useIMask с помощью библиотеки ic1 в React. Маска "0000-00-00" будет применена к текстовому полю. Вы можете настроить маску в соответствии с вашими потребностями.