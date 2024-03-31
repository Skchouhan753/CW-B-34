// import "./footer.css";
// import { Link } from "react-router-dom";

// function Footer() {
//   return (
//     <div className="b1">
//       <div className="b2">
//         <div className="b3">
//           <p className="tag">
//             <Link href="https://www.myfitnesspal.com/">Calorie Counter</Link>
//           </p>
//           <p className="tag">
//             <Link href="#">Blog</Link>
//           </p>
//           <p className="tag">
//             <Link href="#">Terms</Link>
//           </p>
//           <p className="tag">
//             <Link href="">Privacy</Link>
//           </p>
//           <p className="tag">
//             <Link href="">Contact Us</Link>
//           </p>
//           <p className="tag">
//             <Link href="">API</Link>
//           </p>
//           <p className="tag">
//             <Link href="">Jobs</Link>
//           </p>
//           <p className="tag">
//             <Link href="">Feedback</Link>
//           </p>
//           <p className="tag">
//             <Link href="">Community Guidelines</Link>
//           </p>
//           <p className="tag">
//             <Link href="">Ad Choices</Link>
//           </p>
//           <p className="tag">
//             <Link href="">Do Not Sell My Personal Information</Link>
//           </p>
//         </div>
//         <div className="b4">
//           <select className="select">
//             <option value="">English</option>
//             <option value="">Bengali</option>
//             <option value="">Albanian</option>
//             <option value="">Bambara</option>
//             <option value="">chinese</option>
//             <option value="">Estonian</option>
//             <option value="">french</option>
//             <option value="">Greek</option>
//             <option value="">Hmong</option>
//             <option value="">Italian</option>
//             <option value="">japanese</option>
//           </select>
//         </div>
//       </div>
//       <div className="b5">
//         <p>© 2024 MyFitnessPal, Inc. All rights Reserved.</p>
//       </div>
//     </div>
//   );
// }

// export default Footer;

// Footer.js

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <span className="footerLogo">
          <img className="footerLogoImg" src={logo} alt="Logo" />
        </span>
        <div className="footer-content">
          <div className="footer-section about">
            <h2 className="hTwo">About Us</h2>
            <p className="descriptiontext">
            MyFitnessPal <br /> MyFitnessPal is a popular app and website for
              tracking diet and exercise. With a vast database, users log meals,
              activities, and monitor calories for better health.
            </p>
            <div className="footerSocial-icons">
              <Link to="#" className="footerIcon">
                <FaFacebook />
              </Link>
              <Link to="#" className="footerIcon">
                <FaTwitter />
              </Link>
              <Link to="#" className="footerIcon">
                <FaInstagram />
              </Link>
            </div>
          </div>

          <div className="footer-links footer-section links">
            <div>
              <h2>Quick Links</h2>
            </div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/courses">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Feedback</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="footer-links footer-section links">
            <div>
              {" "}
              <h2>Our Services</h2>
            </div>
            <ul>
              <li>
                <Link to="#">Calorie Counter</Link>
              </li>
              <li>
                <Link to="#">API</Link>
              </li>
              <li>
                <Link to="#">Community Guidelines</Link>
              </li>
              <li>
                <Link to="#">Terms Privacy</Link>
              </li>
            </ul>
          </div>

          <div className="footer-links footer-section links">
            <div>
              <h2>Latest News</h2>
            </div>
            <ul>
              <li>
                <Link to="#">New Releases</Link>
              </li>
              <li>
                <Link to="#">Upcoming Events</Link>
              </li>
              <li>
                <Link to="#">Blog Posts</Link>
              </li>
              <li>
                <Link to="#">Latest Opening</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section contact-form">
            <h2>Contact Us</h2>
            <form className="footer-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 MyFitnessPal, All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
