import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import Work from "../components/Work"

function HomeView() {
    return(
        <main className='HomeView'>
            <Navbar/>
            <Hero/>
            <Work/>
        </main>
    )
}

export default HomeView;