import Flashcard from "./Flashcard";

export default function Deck() {
    const reactDeck = [
        {
            question: 'O que é JSX?',
            answer: 'Uma extensão da linguagem do JavaScript'
        },
        {
            question: 'O React é ___',
            answer: 'uma biblioteca JavaScript para construção de interfaces'
        },
        {
            question: 'Componentes devem iniciar com ___',
            answer: 'letra maiúscula'
        },
        {
            question: 'Podemos colocar ___ dentro do JSX',
            answer: 'expressões'
        },
        {
            question: 'O ReactDOM nos ajuda ___',
            answer: 'interagindo com o DOM para colocar componentes React no mesmo'
        },
        {
            question: 'Usamos npm para ___',
            answer: 'gerenciar os pacotes necessários e suas dependências'
        },
        {
            question: 'Usamos props para ___',
            answer: 'passar diferentes informações para componentes'
        },
        {
            question: 'Usamos estado (state) para ___',
            answer: 'dizer para o React quais informações, quando atualizadas, dever renderizar a tela novamente'
        }
    ];

    return (
        <ul className="deck">
            {reactDeck.map((r, i) => <Flashcard key={i} number={i+1} content={r} />)}
        </ul>
    )
}