import { useState } from 'react';
import vector from '../../assets/vector.svg';

import Question from './Question';
import Answer from './Answer';

export default function Flashcard({ number, content, answerSequence, setAnswerSequence }) {
    const [turnCard, setTurnCard] = useState(false);
    const [viewAnswer, setViewAnswer] = useState(false);
    const [flashcardIcon, setFlashcardIcon] = useState(vector);
    const [flashcardStyle, setFlashcardStyle] = useState({color: '#333'});
    const [answeredCard, setAnsweredCard] = useState(false);

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
    ];

    return turnCard ? (
        <li className="flashcard front">
            {viewAnswer ? 
             <Answer buttons={buttons} text={content.answer} answerSequence={answerSequence} setAnswerSequence={setAnswerSequence} setFlashcardIcon={setFlashcardIcon} setFlashcardStyle={setFlashcardStyle} setTurnCard={setTurnCard} setAnsweredCard={setAnsweredCard} />
              : <Question setViewAnswer={setViewAnswer} text={content.question} />}
        </li>
    ) : answeredCard ? (
        <li className="flashcard back">
            <p style={flashcardStyle}>Pergunta {number}</p>
            <img src={flashcardIcon} alt="setinha" />
        </li>
    ) : (
        <li className="flashcard back" onClick={() => setTurnCard(true)}>
            <p style={flashcardStyle}>Pergunta {number}</p>
            <img src={flashcardIcon} alt="setinha" />
        </li>
    );
}