import React from 'react';
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';

import './MainPage.scss';

const MainPage = () => {
  return (
    <>
      <div className="main">
        <div>
          <span>Zosia Wiktorek</span>
          <p>
            W 2021 r. ukończyłam Akademie Sztuk Pięknych im. Eugeniusza Gepperta
            we Wrocławiu, na wydziale Rzeźby i Mediacji Sztuki. Dyplom obroniłam
            w Pracowni Komunikacji Twórczej gdzie moim promotorem był prof.
            Eugeniusz Józefowski i jego asystentka dr Monika Aleksandrowicz. W
            ciągu 3 lat brałam udział w wielu wystawach zbiorowych
            organizowanych przez ASPWro, angażowałam się w projekty kuratorskie
            oraz zgłębiałam struktury sztuki w jej współczesnym znaczeniu i
            formie. Obecnie kontynuuje studia magisterskie na wydziale Rzeźby i
            Mediacji Sztuki. Teraz moją uwagę oprócz malarstwa sztalugowego
            przykuwają również struktury sieciowe, web design i funkcje kultury
            wizualnej w obrębie Internetu.
          </p>
        </div>
        <div className="separator"></div>
        <div className="icons">
          <a href="https://www.facebook.com/">
            <FiFacebook />
          </a>
          <a href="https://www.instagram.com/">
            <FiInstagram />
          </a>
          <a href="https://www.linkedin.com/">
            <FiLinkedin />
          </a>
        </div>
      </div>
      <div className="blue-circle" />
      <div className="orange-circle" />
    </>
  );
};

export default MainPage;
