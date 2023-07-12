import Image from 'next/image'
import wLogo from "../../images/w-logo.svg" 
import s from "./logoMain.module.scss"

export default function LogoMain() {
    return (<>
    <div className={s.logo__wrapper}>
        <Image className={s.logo__image} src={wLogo} alt="main logo"></Image>
        <div className={s.logo__description}>
            <h2 className={s.logo__title}>Work time</h2>
            <p className={s.logo__subtitle}>HR managment</p>
        </div>
    </div>
    </>)
}