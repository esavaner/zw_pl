import Button from 'components/button/Button';
import loc from 'translation/translate';
import { AT, Context, LANG } from 'components/store/Store';
import React, { useContext, useState } from 'react';

import './Navigation.scss';

export default function Navigation() {
    const {state, dispatch} = useContext(Context);
    const [menu, setMenu] = useState(false);

    const f = (at: AT.HOME | AT.PAINTINGS | AT.DRAWINGS | AT.DIGITAL | AT.LIGHTBOXCLOSE) => {
        dispatch({type: at});
        setMenu(false);
    };
    return (
        <>
            <Button className="menu-trigger" click={() => setMenu(!menu)}>
                <i className='gg-menu'></i>
            </Button>
            <nav>
                <ul className={menu ? 'opened' : 'closed'}>
                    <li>
                        <Button click={() => f(AT.HOME)}>
                            <i className='gg-home'></i>
                            {loc('HOME')}
                        </Button>
                    </li>
                    <li>
                        <Button click={() => f(AT.PAINTINGS)}>
                            <i className='gg-brush'></i>
                            {loc('PAINTINGS')}
                        </Button>
                    </li>
                    <li><Button click={() => f(AT.DRAWINGS)}>
                        <i className='gg-pen'></i>
                        {loc('DRAWINGS')}
                    </Button>
                    </li>
                    <li>
                        <Button click={() => f(AT.DIGITAL)}>
                            <i className='gg-screen'></i>
                            {loc('DIGITAL')}
                        </Button>
                    </li>
                    <li>
                        <select value={state.lang} onChange={(e) => dispatch({type: AT.LANG, lang: e.target.value})}>
                            <option className='pl' value={LANG.PL}>
                                        Polski (PL)
                            </option>
                            <option className='en' value={LANG.EN}>
                                        English (EN)
                            </option>
                        </select>
                    </li>
                </ul>
            
            </nav>
        </>
    );
}