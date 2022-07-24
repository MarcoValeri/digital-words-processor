// Import components
import Title from "../../components/title/title";
import WordsCounter from "../../components/words-counter/words-counter";

// Import style file
import "./home.scss";

const Home = () => {
    return (
        <div>
            <Title />
            <WordsCounter />
        </div>
    )
}

export default Home;