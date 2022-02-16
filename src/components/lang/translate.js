import { Context } from 'components/store/Store';
import { useContext } from 'react';
import EN from'./en.json';
import PL from './pl.json';

const languages = {
    en: EN,
    pl: PL,
};

export default function loc(key) {
    const {state} = useContext(Context);
    const l = languages[state.lang];
    return l[key] || key.toLowerCase();
}