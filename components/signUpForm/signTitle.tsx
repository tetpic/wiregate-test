import s from "./signTitle.module.scss"

export default function SignTitle() {
    return (<>
        <h2 className={s.title}>Sign up</h2>
        <p className={s.subtitle}>Please provide your name and email</p>
    </>)
}