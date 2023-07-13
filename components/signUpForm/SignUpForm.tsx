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
import {useState} from "react";


export default function SignUpForm() {

    const [name, changeName] = useState({value: "", valid: false})
    const [surname, changeSurname] = useState({value: "", valid: false})
    const [phoneNumber, setPhoneNumber] = useState({value: "", valid: false})
    const [address, changeAddress] = useState({value: "", valid: false})

    const [password, changePassword] = useState({value: "", valid: false, showError: false})
    const [showPass, togglePass] = useState(false)    
    
    const [areYouACompany, changeUserStatus] = useState("")
    const [isFormValid, changeFormStatus] = useState(false)

    const [agree, changeAgree] = useState({valid: false})

    let checkFormValid = () => {
        let inputs = [password, name, agree, surname, address, phoneNumber]
        let isValid = true
        inputs.forEach((el)=> {
            
           
            if(areYouACompany === "No" && el === address ) {
                debugger
                isValid = address.valid
                return
            }
            if(!el.valid) {
                isValid = false
            }           
        })
        console.log(isValid)
        changeFormStatus(isValid)
    }

    function createPhoneMask(phoneNumberString: string) {
        let cleaned = phoneNumberString.replace(/\D/g, '');
        let cleanedArr = cleaned.split("")
        if(cleanedArr[0]){cleanedArr[0] = "7"}
        let mask = '';
        for (let i = 0; i < cleanedArr.length && i < 11; i++) {
            if(i===0 ) {               
                mask += "+"
            }
            if (i === 1) {
                mask += '(';
            } else if (i === 4) {
                mask += ') ';
            } else if (i === 7 || i === 9) {
                mask += '-';
            }
            mask += cleanedArr[i];
        }      
        return mask;
    }

    const phoneHandler = (event: { target: HTMLInputElement; }) => {
        let phoneElement = event.target as HTMLInputElement  
        let phoneValue = phoneElement.value  
        let masked = createPhoneMask(phoneValue)
        let isValid = masked.length > 16?true:false
        setPhoneNumber({...phoneNumber, value: masked, valid: isValid})   
        checkFormValid()   
    };

    const passwordHandler = (event: { target: HTMLInputElement; }) => {
        let passwordElement = event.target as HTMLInputElement  
        let isValid = passwordElement.value.length > 4?true:false
        changePassword({...password, value: passwordElement.value, valid: isValid, showError: !isValid})      
         
        checkFormValid()
    }

    const nameHandler = (event: { target: HTMLInputElement; }) => {
        let nameElement = event.target as HTMLInputElement
        let filtered = nameElement.value.replace(/[0-9]/, "") 
        let isValid = nameElement.value.length > 2?true:false
        changeName({...name, value: filtered, valid: isValid})
        checkFormValid()
    }

    const addressHandler = (event: { target: HTMLInputElement; }) => {
        let addressElement = event.target as HTMLInputElement
        let isValid = addressElement.value.length > 5? true:false
        changeAddress({...name, value: addressElement.value, valid: isValid})
        checkFormValid()
    }

    const surnameHandler = (event: { target: HTMLInputElement; }) => {
        let surnameElement = event.target as HTMLInputElement
        let filtered = surnameElement.value.replace(/[0-9]/, "") 
        let isValid = surnameElement.value.length > 2?true:false
        changeSurname({...surname, value: filtered, valid: isValid})
        checkFormValid()
    }

    const passwordShow = () => {
        showPass === false?togglePass(true):togglePass(false)
    }

    const userStatus = (event: { target: HTMLElement}) => {
        let status = event.target.dataset.type
        changeUserStatus(status)    
        checkFormValid()
    }

    const agreementCheckbox = (event: { target: HTMLInputElement }) => {
        let checked = event.target.checked
        console.log(checked)
        changeAgree({valid: checked})
        checkFormValid()
    }    

    
    const agreement = ["I agree with all ", <Link href="/terms">Terms and Conditions</Link>, " and ", <Link href="/policy">Privacy Policies.</Link>]
    

    return (<>
        <div className={s.form}>
            <SignTitle/>
            <div className={s.form__wrapper}>
                <TextInput label="Your name" placeholder="Your name" 
                    image={name.valid&&doneImg}  
                    className={concatStrings([s.textInput, s.textInput_short])}
                    style={s}
                    value={name.value}
                    changeHandler={nameHandler}
                />
                <TextInput label="Your last name" placeholder="Your last name" 
                    image={surname.valid&&doneImg} 
                    className={concatStrings([s.textInput, s.textInput_short])}
                    style={s}
                    changeHandler={surnameHandler}
                />
                <TextInput label="Mobile Number" placeholder="+7(999)999-99-99" 
                    image={phoneNumber.valid?doneImg:undefined} 
                    className={concatStrings([s.textInput])}
                    style={s}
                    changeHandler={phoneHandler}
                    value={phoneNumber.value}
                />

                <RadioInputs inputs={[{text:"Yes"}, {text: "No"}]} style={s} title="Are you a company?" name="company" onClick={userStatus}/>

                {areYouACompany === "Yes"&&
                <TextInput label="Address" placeholder="Enter your address company" 
                    image={address.valid&&doneImg} 
                    className={s.textInput}
                    style={s}
                    value={address.value}
                    changeHandler={addressHandler}
                />
                }
                
                <TextInput label="Password" placeholder="Create password" 
                    image={showPass?eyeOpen:eyeClosed} 
                    className={s.textInput} 
                    style={s}
                    imageClickHandler={passwordShow}
                    changeHandler={passwordHandler}
                    value={password.value}
                    type={showPass?"text":"password"}
                    errorText={password.showError?"Please enter at least 4 symbols":undefined} 
                />

                <CheckboxInput style={s} isChecked={agree.valid} title={agreement} onClick={agreementCheckbox}/>

                <SubmitButton style={s} text="Next" valid={isFormValid} onClickHandler={()=>{}}/>
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