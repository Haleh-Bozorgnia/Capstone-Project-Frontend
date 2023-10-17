import { FC } from "react";

import linkdin from "../assets/linkedin.gif"
import github from "../assets/github.gif"
import mail from "../assets/mail.gif"
import brand from "../assets/brand.gif";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="max-container w-full h-[190px] bg-white">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <img src={brand} alt="" width={200} height={200} />
        </div>
        <p className="mt-20 text-xl leading-10 font-montserrat text-black-600 sm:max-w-sm italic">
          Make your services ready at your nearest area
        </p>
        <div className="flex items-center gap-5 m-18">
          <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full mt-20">
            <img src={mail} alt="" width={30} height={30} />
          </div>
          <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full mt-20">
            <a
              href="https://www.linkedin.com/in/haleh-bozorgnia/"
              target="_blank"
            >
              <img src={linkdin} alt="" width={30} height={30} />
            </a>
          </div>
          <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full mt-20">
            <a href="https://github.com/Haleh-Bozorgnia" target="_blank">
              <img src={github} alt="" width={30} height={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
