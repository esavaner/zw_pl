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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            suscipit neque lacinia turpis consectetur, vitae pharetra mi varius.
            Suspendisse sed nibh ac nulla ultrices lobortis. Vivamus vel felis
            quis est ultricies consectetur. Phasellus in neque in tellus
            sagittis pretium blandit at purus. Ut nec est elit. Suspendisse
            tristique nisl vel massa accumsan, a vulputate nunc sodales
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
