import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import S from './Footer.module.scss';

const iconProps = {
  color: 'white',
  size: 24,
};

const Footer = () => {
  return (
    <footer className={S.footer}>
      <div>
        <FaGithub {...iconProps} />
        <FaLinkedin {...iconProps} />
      </div>
      <span>Powered by Daniel Vieira</span>
    </footer>
  );
};

export default Footer;
