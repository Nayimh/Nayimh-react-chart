import React from 'react';

import { AiOutlineMail } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';


const Footer = () => {
    return (
        <div>
            The assignment is done by Nayim Hasan. 
            <a
                  href="https://www.linkedin.com/in/nayim-hasan/"
                  target="_blank" rel="noreferrer">
                  <AiFillLinkedin className="linkedin" />
            </a>
            <a
                  href="https://github.com/Nayimh"
                  target="_blank" rel="noreferrer">
                  <AiFillGithub className="github" />
                </a>
            
        </div>
    );
};

export default Footer;