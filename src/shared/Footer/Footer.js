import React from "react";
import { Link } from "react-router-dom";
import logo from "../../imgs/Chondo Main Logo.svg";
import facebook from "../../imgs/social-media/facebook-icon.png";
import insta from "../../imgs/social-media/instagram-icon.png";
import linkedin from "../../imgs/social-media/linkedin-icon.png";
const Footer = () => {
  return (
    <div>
      <footer class="footer footer-center p-5 bg-[#FFD7E7] text-primary-content">
        <div>
          <img className="h-24" src={logo} alt="" />
          <p class="font-bold text-black" style={{ fontFamily: "Ubuntu" }}>
            CHONDO <br />
            Track Your Period Know Your Body
          </p>

          <div>
            <div class="grid grid-flow-col gap-4">
              <a
                className="hover:scale-125 duration-500"
                href="https://www.facebook.com/ChondoApp"
              >
                <img className="w-7" src={facebook} alt="" />
              </a>
              <a
                className="hover:scale-125 duration-500"
                href="https://www.instagram.com/chondo.app/"
              >
                <img className="w-7" src={insta} alt="" />
              </a>
              <a
                className="hover:scale-125 duration-500"
                href="https://www.linkedin.com/company/chondoapp/"
              >
                <img className="w-7" src={linkedin} alt="" />
              </a>
            </div>
          </div>
          <div>
            <Link class="text-red-500 underline" to="/privacypolicy">
              {" "}
              Privacy Policy
            </Link>
          </div>
          <p className="text-black">Copyright © 2022 - All right reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
