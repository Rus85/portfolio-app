// import Footer from './Footer/Footer'
import Profile from './Profile/Profile'
import SendForm from '../Form/SendForm'
import './Home.css'


export default function Home() {
    return (
        <div className="home-container">
            <Profile />
            <div className="hr-body">
            <div className="hr-container">
            <hr class="hr-text" data-content=""/>
            </div>
            </div>
            <SendForm/>
            {/* <Footer /> */}
        </div>
    )
}