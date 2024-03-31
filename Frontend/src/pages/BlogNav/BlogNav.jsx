
import "./BlogNavFooter.css";
import logo from "../../Images/fitnesslogo.png";
import * as Icons from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BlogNav = () => {
	const navigate = useNavigate();
	return (
		<div>
			<div className="homeicondiv">
				<Link to="/">
					<Icons.FaHome className='homeicon'/>
				</Link>
			</div>
			<div
				style={{ textAlign: "center", cursor: "pointer", width: "20%",
				margin: "auto" }}
				onClick={() => navigate("/myHome")}
			>
				<img src={logo} alt="" />
			</div>
			<div className="socialMediaIconDiv">
				<Icons.FaFacebookSquare className="socialMediaIconFB" />
				<Icons.FaTwitterSquare className="socialMediaIconTwitter" />
				<Icons.FaInstagram className="socialMediaIconInsta" />
				<Icons.FaPinterest className="socialMediaIconPin" />
				<hr />
				<Icons.FaSearch className="socialMediaIconSearch" />
			</div>
			<div className="SubHeader_Container">
				<div style={{ cursor: "pointer" }} onClick={() => navigate("/recipes")}>
					RECIPES
				</div>
				<div>NUTRITION</div>
				<div>WEIGHT LOSS</div>
				<div>FITNESS</div>
				<div>INSPIRATION</div>
				<div>ESSENTIALS</div>
				<div>VIDEO</div>
			</div>
		</div>
	);
};

export default BlogNav;
