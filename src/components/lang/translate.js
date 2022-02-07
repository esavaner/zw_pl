import EN from'./en.json';
import PL from './pl.json';

const languages = {
    en: EN,
    pl: PL
};

export default function loc(key) {
    const lang = localStorage.getItem('lang') || 'pl';
    return languages[lang][key] || '';
}