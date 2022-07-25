import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import ClientCard from "../components/ClientCard"
import ClientNote from "../components/ClientNote"

function HomeView() {
    return(
        <main className='HomeView'>
            <Navbar/>
            <Hero/>
            <ClientCard/>
            <ClientNote/>
        </main>
    )
}

export default HomeView;