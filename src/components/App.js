import Recall from './Recall/Recall';
import Header from './Header';
import Deck from './Deck/Deck';

import { useState } from 'react';

import '../css/reset.css';
import '../css/style.css';

export default function App() {
    const [visible, setVisible] = useState(true);

    return visible ? <Recall setVisible={setVisible} /> : (
        <>
            <Header />
            <Deck />
        </>
    );
}