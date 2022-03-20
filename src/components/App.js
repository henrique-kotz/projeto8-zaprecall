import Recall from './Recall/Recall';
import Header from './Header';
import Deck from './Deck/Deck';
import Footer from  './Footer/Footer';

import '../css/reset.css';
import '../css/style.css';

export default function App() {
    return (
    <>
        <Recall />
        <Header />
        <Deck />
        <Footer />
    </>
    );
}