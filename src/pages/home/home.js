// Import components
import Footer from "../../components/footer/footer";
import Navigation from "../../components/navigation/navigation";
import WordsCounter from "../../components/words-counter/words-counter";

// Import style file
import "./home.scss";

const Home = () => {
    return (
        <div>
            <Navigation />
            <WordsCounter />
            <Footer />
        </div>
    )
}

export default Home;
