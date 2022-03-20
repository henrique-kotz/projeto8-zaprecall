import arrow from '../../assets/setinha.svg';

export default function Question({ setViewAnswer, text }) {
    return (
    <>
        <p>{text}</p>
        <img src={arrow} alt="setinha" onClick={() => setViewAnswer(true)} />
    </>
    );
}