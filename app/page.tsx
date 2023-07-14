process.env.RENDER_TYPE==="SPA"?"use client":"use server"
import dynamic from "next/dynamic";
import EmailLink from "../components/emailLink/emailLink";
import LogoMain from "../components/logoMain/LogoMain";
import SignUpForm from "../components/signUpForm/SignUpForm";

const DynamicSignForm = dynamic(() => import('../components/signUpForm/SignUpForm'), {
    ssr: false,
})

const DynamicLogoMain = dynamic(() => import('../components/logoMain/LogoMain'), {
    ssr: false,
})

const DynamicEmailLink = dynamic(()=> import('../components/emailLink/emailLink'), {
    ssr: false
})

export default function MainPage() {
    return(<>
    {process.env.RENDER_TYPE==="SPA"?<DynamicLogoMain/>:<LogoMain/>}
        <div className="container">
            {process.env.RENDER_TYPE==="SPA"?<DynamicSignForm/>:<SignUpForm/>}
        </div>
        <EmailLink mail={process.env.COMPANY_EMAIL}/>
    {process.env.RENDER_TYPE==="SPA"?<DynamicEmailLink mail={process.env.COMPANY_EMAIL}/>:<EmailLink mail={process.env.COMPANY_EMAIL}/>}
    </>)
    
}

