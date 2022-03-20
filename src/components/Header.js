import logo from '../assets/logo.svg';

export default function Header() {
    return (
        <header>
            <img src={logo} alt="Logo ZapRecall" />
            <h2>ZapRecall</h2>
        </header>
    );
}