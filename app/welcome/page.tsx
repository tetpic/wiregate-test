import Image from 'next/image'
import LogoMain from "../../components/logoMain/LogoMain";
import wTime from "../../images/w-time.png"
import s from "./page.module.scss"

export default function Welcome() {
    return (<>
    <LogoMain/>
    <div className="container">
        <div className={s.welcome}>
            <Image src={wTime} alt="w-time logo" />
            <p className={s.description}>Thank you for registering!</p>
        </div>

    </div>
    </>)
}