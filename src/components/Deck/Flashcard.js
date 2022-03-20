import { useState } from 'react';
import vector from '../../assets/vector.svg';

import Question from './Question';
import Answer from './Answer';

export default function Flashcard({ number, content }) {
    const [turnCard, setTurnCard] = useState(false);
    const [viewAnswer, setViewAnswer] = useState(false);

    const buttons = [
        {
            text: 'Não lembrei',
            color: '#ff3030'
        },
        {
            text: 'Quase não lembrei',
            color: '#ff922e'
        },
        {
            text: 'Zap!',
            color: '#2fbe34'
        }
    ]

    return turnCard ? (
        <li className="flashcard front">
            {viewAnswer ?  <Answer buttons={buttons} text={content.answer} /> : <Question setViewAnswer={setViewAnswer} text={content.question} />}
        </li>
    ) : (
        <li className="flashcard back" onClick={() => setTurnCard(true)}>
            <p>Pergunta {number}</p>
            <img src={vector} alt="setinha" />
        </li>
    );
}