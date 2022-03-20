import vector from '../../assets/vector.svg';

export default function Flashcard() {
    return (
        <li className="flashcard">
            <p>Pergunta 1</p>
            <img src={vector} alt="setinha" />
        </li>
    );
}