import greenIcon from '../../assets/green-icon.svg';
import yellowIcon from '../../assets/yellow-icon.svg';
import redIcon from '../../assets/red-icon.svg';

export default function Answer({ buttons, text, answerSequence, setAnswerSequence, setFlashcardIcon, setFlashcardStyle, setTurnCard, setAnsweredCard }) {
    function selectButton(color) {
        if (color === '#ff3030') {
            setAnswerSequence([...answerSequence, {icon: redIcon, id: 'red'}]);
            setFlashcardIcon(redIcon);
        } else if (color === '#ff922e') {
            setAnswerSequence([...answerSequence, {icon: yellowIcon, id: 'yellow'}]);
            setFlashcardIcon(yellowIcon);
        } else if (color === '#2fbe34') {
            setAnswerSequence([...answerSequence, {icon: greenIcon, id: 'green'}]);
            setFlashcardIcon(greenIcon);
        }

        setFlashcardStyle({color: color, textDecoration: 'line-through'});
        setTurnCard(false);
        setAnsweredCard(true);
    }

    return (
    <>
        <p>{text}</p>
        <div className="button-container">
            {buttons.map((b, i) => <button onClick={() => selectButton(b.color)} key={i} style={{ backgroundColor: b.color }}>{b.text}</button>)}
        </div>
    </>
    );
}