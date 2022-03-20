import Logo from './Logo';

export default function Recall(props) {
    return (
        <div className='recall'>
            <Logo />
            <button onClick={() => props.setVisible(false)}>
                Iniciar Recall!
            </button>
        </div>
    );
}