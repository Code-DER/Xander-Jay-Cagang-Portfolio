import bg from '../assets/bg.svg'
import NavBar from './NavBar'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <div
            className='min-h-screen flex flex-col bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${bg})` }}
        >
            <NavBar />
            <main className='flex-1 px-8 md:px-20 mt-16 text-white'>
                {children}
            </main>
            <Footer />
        </div>
    )
}