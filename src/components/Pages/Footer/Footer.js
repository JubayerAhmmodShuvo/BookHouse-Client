import React from 'react';
import Glogo from "../../images/Google.png";
import Gitlogo from "../../images/Github.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-violet-100 h-1/4 py-10">
      <div className="flex justify-center  mb-4">
        <a target="_blank" href="https://google.com">
          <img className="h-14" src={Glogo} alt="" />
        </a>
        <a href="https://github.com/ProgrammingHero1" target="_blank">
          <img className="h-14" src={Gitlogo} alt="" />
        </a>
      </div>
      <div className="  flex justify-center gap-6">
        <p>Terms Of Use</p>
        <p>Privacy And Policy</p>
      </div>
      <div className="flex justify-center ">
        <p className="p-4">Developed by Jubayer Ahmmod Shuvo</p>
      </div>
      <div className="flex justify-center">
        <p>© 2022 Company, Inc. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;