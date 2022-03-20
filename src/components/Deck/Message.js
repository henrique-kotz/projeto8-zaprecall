import party from '../../assets/party.png';
import sad from '../../assets/sad.png';

export default function Message({ answerSequence }) {
    const putz = answerSequence.some((obj) => obj.id === 'red');

    return putz ? (
        <>
            <div className="end-message">
                <img src={sad} alt="sad emoji" />
                <p>Putz...</p>
            </div>
            <p className="end-description">Ainda faltam alguns... Mas não desanime!</p>
        </>
    ) : (
        <>
            <div className="end-message">
                <img src={party} alt="party emoji" />
                <p>Parabéns!</p>
            </div>
            <p className="end-description">Você não esqueceu de nenhum flashcard!</p>
        </>
    );
}