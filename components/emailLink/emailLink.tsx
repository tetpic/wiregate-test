import Link from "next/link";
import s from "./emailLink.module.scss"

interface EmailLinkProps {
    mail: string
}

export default function EmailLink(props: EmailLinkProps) {
    let {mail} = props

    return (<>
    <Link className={s.link} href={`mailto: ${mail}`}>{mail}</Link>
    </>)     
}