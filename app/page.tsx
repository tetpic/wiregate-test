import EmailLink from "../components/emailLink/emailLink";
import LogoMain from "../components/logoMain/LogoMain";
import SignUpForm from "../components/signUpForm/SignUpForm";

export default function MainPage() {
    return(<>
        <LogoMain/>
        <div className="container">
            <SignUpForm/>
        </div>
        <EmailLink mail={process.env.COMPANY_EMAIL}/>
    </>)
}