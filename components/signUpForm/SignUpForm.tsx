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
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import { formDataToJSON } from "../../helpers/formDataToJSON";
import createPhoneMask from "../../helpers/createPhoneMask";


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

    const formRef = useRef(null!)

    let checkFormValid = () => {
        let inputs = [agree, name, surname, password, phoneNumber]
        let isValid:boolean = true
        inputs.forEach((el)=> {
            if(!el.valid) {               
                isValid = false
            }           
        })
        if(!address.valid&&areYouACompany==="Yes"){isValid = false}       
        changeFormStatus(isValid)
    }

    const phoneHandler = (event: { target: HTMLInputElement; }) => {
        let phoneElement = event.target as HTMLInputElement  
        let phoneValue = phoneElement.value  
        let masked = createPhoneMask(phoneValue)
        let isValid = masked.length > 16?true:false
        setPhoneNumber({...phoneNumber, value: masked, valid: isValid})          
    };

    const passwordHandler = (event: { target: HTMLInputElement; }) => {
        let passwordElement = event.target as HTMLInputElement  
        let isValid = passwordElement.value.length > 4?true:false
        changePassword({...password, value: passwordElement.value, valid: isValid, showError: !isValid})   
    }

    const nameHandler = (event: { target: HTMLInputElement; }) => {
        let nameElement = event.target as HTMLInputElement
        let filtered = nameElement.value.replace(/[0-9]/, "") 
        let isValid = nameElement.value.length > 2?true:false
        changeName({...name, value: filtered, valid: isValid})
    }

    const addressHandler = (event: { target: HTMLInputElement; }) => {
        let addressElement = event.target as HTMLInputElement
        let isValid = addressElement.value.length > 5? true:false
        changeAddress({...name, value: addressElement.value, valid: isValid})
    }

    const surnameHandler = (event: { target: HTMLInputElement; }) => {
        let surnameElement = event.target as HTMLInputElement
        let filtered = surnameElement.value.replace(/[0-9]/, "")  
        let isValid = surnameElement.value.length > 2?true:false
        changeSurname({...surname, value: filtered, valid: isValid})
    }

    const passwordShow = () => {
        showPass === false?togglePass(true):togglePass(false)
    }

    const userStatus = (event: { target: HTMLElement}) => {
        let status = event.target.dataset.type
        changeUserStatus(status) 
    }

    const agreementCheckbox = (event: { target: HTMLInputElement }) => {
        let checked = event.target.checked    
        changeAgree({valid: checked})
    }    



    useEffect(()=> {       
        checkFormValid()
    }, [name, surname, password, agree, address, phoneNumber, areYouACompany])

    useLayoutEffect(()=>{
        return ()=>{
            console.log(formDataToJSON(formRef.current))
        }
    }, [])

    
    const agreement = ["I agree with all ", <Link href="/terms">Terms and Conditions</Link>, " and ", <Link href="/policy">Privacy Policies.</Link>]
    

    return (<>
        <form 
        className={s.form} 
        ref={(node)=>{formRef.current = node}}        
        >
            <SignTitle/>
            <div className={s.form__wrapper}>
                <TextInput 
                    label="Your name" 
                    placeholder="Your name" 
                    image={name.valid&&doneImg}  
                    className={concatStrings([s.textInput, s.textInput_short])}
                    style={s}
                    value={name.value}
                    changeHandler={nameHandler}
                    inputName="userName"
                />
                <TextInput 
                    label="Your last name" 
                    placeholder="Your last name" 
                    image={surname.valid&&doneImg} 
                    className={concatStrings([s.textInput, s.textInput_short])}
                    style={s}
                    value={surname.value}
                    changeHandler={surnameHandler}
                    inputName="lastName"
                />
                <TextInput 
                    label="Mobile Number" 
                    placeholder="+7(999)999-99-99" 
                    image={phoneNumber.valid&&doneImg} 
                    className={concatStrings([s.textInput])}
                    style={s}
                    changeHandler={phoneHandler}
                    value={phoneNumber.value}
                    inputName="phoneNumber"
                />

                <RadioInputs 
                    inputName="company"
                    inputs={[{text:"Yes"}, {text: "No"}]} 
                    style={s} title="Are you a company?" 
                    onClick={userStatus}
                />

                {areYouACompany === "Yes"&&
                    <TextInput 
                        label="Address" 
                        placeholder="Enter your address company" 
                        image={address.valid&&doneImg} 
                        className={s.textInput}
                        style={s}
                        value={address.value}
                        changeHandler={addressHandler}
                        inputName="companyAddress"
                    />
                }
                
                <TextInput 
                    label="Password" 
                    placeholder="Create password" 
                    image={showPass?eyeOpen:eyeClosed} 
                    className={s.textInput} 
                    style={s}
                    imageClickHandler={passwordShow}
                    changeHandler={passwordHandler}
                    value={password.value}
                    type={showPass?"text":"password"}
                    errorText={password.showError?"Please enter at least 4 symbols":undefined} 
                    inputName="password"
                />

                <CheckboxInput 
                    inputName="agreement" 
                    style={s} 
                    isChecked={agree.valid} 
                    title={agreement} 
                    onClick={agreementCheckbox}
                />

                <SubmitButton 
                    style={s} 
                    text="Next" 
                    valid={isFormValid}                    
                />
            </div>
        </form>
    </>)
}