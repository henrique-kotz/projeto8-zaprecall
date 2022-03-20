export default function Answer({ buttons, text }) {
    return (
    <>
        <p>{text}</p>
        <div className="button-container">
            {buttons.map((b, i) => <button key={i} style={{ backgroundColor: b.color }}>{b.text}</button>)}
        </div>
    </>
    );
}