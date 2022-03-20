import Message from './Message';

export default function Footer({ total, answerSequence }) {
    return (
        <footer>
            {answerSequence.length === total ? <Message answerSequence={answerSequence} /> : ''}

            <p className="answer-count">{answerSequence.length}/{total} {answerSequence.length < 2 ? '  CONCLUÍDO' : 'CONCLUÍDOS'}</p>
            <div className="icon-container">
                {answerSequence.map((a, i) => <img key={i} src={a.icon} alt='answer icon' />)}
            </div>
        </footer>
    );
}