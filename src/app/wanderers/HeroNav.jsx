import "./heroStyles.css";
import Nav from "./components/Nav.jsx";
import CTA from "./components/CTA.jsx";
import "./mouseScroll.css";

function HeroSection() {
	return (
		<>
			<div className="heroSection">
				<div className="heroLeft">
					<h2>
						A private{" "}
						<span className="heroSpecial">
							<em>Oasis </em>
						</span>
						for all wanderers in Sharjah.
					</h2>
					<p>Be part of the club, become a member today!</p>
					<div className="bg-blur">
						<a onClick={CTA}>Become a member</a>
					</div>
					<div className="bg-blur">
						<a href="events">Explore offers, or attend an event?</a>
					</div>
				</div>
				<div className="heroRight"></div>
			</div>
			<div className="mouse_scroll">
				<p>Scroll for more</p>
				<div className="mouse">
					<div className="wheel"></div>
				</div>
				<div>
					<span className="m_scroll_arrows unu"></span>
					<span className="m_scroll_arrows doi"></span>
					<span className="m_scroll_arrows trei"></span>
				</div>
			</div>
		</>
	);
}

export default function HeroNav() {
	return (
		<div
			className="heroNav"
			style={{ backgroundImage: 'url("/heroImage.svg")' }}
		>
			<Nav />
			<HeroSection />
		</div>
	);
}
