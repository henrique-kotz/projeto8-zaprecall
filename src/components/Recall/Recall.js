import { useState } from 'react';
import Logo from './Logo';

export default function Recall() {
    const [visible, setVisible] = useState(true);

    return visible ? (
        <div className='recall'>
            <Logo />
            <button onClick={() => setVisible(false)}>
                Iniciar Recall!
            </button>
        </div>
    ) : (
      ''
    );
}