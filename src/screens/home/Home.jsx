import styles from './Home.module.css'
import styles_g from '../../components/styles/Global.module.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function Home() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Home