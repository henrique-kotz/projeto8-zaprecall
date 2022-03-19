import logo from '../../assets/logo.svg';

export default function Logo() {
    return (
        <div className='logo'>
            <img src={logo} alt="ZapRecall logo" />
            <h1>ZapRecall</h1>
        </div>
    );
}