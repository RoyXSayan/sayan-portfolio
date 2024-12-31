import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/RoyXSayan" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/sayanroy-webdev/" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/sayan.roy.378537/" },
  { icon: <FaTwitter />, path: "https://x.com/unusualsayan" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link 
            key={index} 
            href={item.path} 
            className={iconStyles} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
