import Flashcard from "./Flashcard";
import Footer from './Footer';

import { useState } from 'react';

export default function Deck({ deck }) {
    const [answerSequence, setAnswerSequence] = useState([]);

    return (
    <>
        <ul className="deck">
            {deck.map((r, i) => <Flashcard key={i} number={i+1} content={r} answerSequence={answerSequence} setAnswerSequence={setAnswerSequence} />)}
        </ul>
        <Footer total={deck.length} answerSequence={answerSequence} />
    </>

    )
}