import React, { useContext, useState } from 'react';

import './Navigation.scss';
import { NavLink } from 'react-router-dom';
import {
  LANGUAGE,
  TranslationContext,
  TranslationContextType,
} from 'translation/TranslationProvider';

export default function Navigation() {
  const [menu, setMenu] = useState(false);

  const { t, lang, setLang } = useContext(
    TranslationContext
  ) as TranslationContextType;

  //   const f = (
  //     at: AT.HOME | AT.PAINTINGS | AT.DRAWINGS | AT.DIGITAL | AT.LIGHTBOXCLOSE
  //   ) => {
  //     dispatch({ type: at });
  //     setMenu(false);
  //   };

  const links = ['home', 'paintings', 'drawings', 'digital'];
  return (
    <nav className={menu ? 'opened' : 'closed'}>
      <div className="links">
        {links.map((link) => (
          <NavLink
            key={link}
            to={link}
            className={({ isActive }) => (isActive ? 'link-active' : '')}
          >
            {t(link.toUpperCase())}
          </NavLink>
        ))}
      </div>
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value as LANGUAGE)}
      >
        <option className="pl" value={LANGUAGE.PL}>
          Polski (PL)
        </option>
        <option className="en" value={LANGUAGE.EN}>
          English (EN)
        </option>
      </select>
    </nav>
  );
}
