"use client";

import "./footerStyles.css";
import "./endQuoteStyles.css";

function LeftContents() {
	return (
		<div className="footerLeft">
			<a href="/">
				<img alt="website logo" src="/logo.svg" />
			</a>
			<div>
				<h2 className="footerBold">Sharjah Wanderers Sports Club</h2>
				<p>Samman,</p>
				<p>Harwan Suburb, Sharjah,</p>
				<p>United Arab Emirates</p>
			</div>
			<div className="contact">
				<h3>Get in touch</h3>
				<p>
					<img alt="phone" src="/phone.svg" /> : +971 65 662 105
				</p>
				<p>
					<img alt="whatsapp" src="/whatsapp.svg" /> : +971 58 531 1419
				</p>
				<p>
					<img alt="email" src="/mail.svg" /> : info@Sharjahwsc.com
				</p>
			</div>
			<div className="map">
				<h3>Find us.</h3>
				<div className="iframeDiv">
					<img
						alt="placeholder map"
						onClick={() =>
							window.open("https://maps.app.goo.gl/UgQXD1eHRTmpYSSg7")
						}
						className="placeholderMap"
						src="/placeholderMap.png"
					/>

					<iframe
						title="map of sharjah wanderers club"
						onLoad={(e) => {
							document.querySelector(".placeholderMap").classList.add("hidden");
						}}
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7211.932917234021!2d55.4157314745558!3d25.338906525947866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5969efe4f7b9%3A0x97e652f434bbab95!2sSharjah%20Wanderers%20Sports%20Club!5e0!3m2!1sen!2sus!4v1748784679349!5m2!1sen!2sus"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						resizable="yes"
					></iframe>
				</div>
				<a href="https://maps.app.goo.gl/UgQXD1eHRTmpYSSg7" target="_blank">
					Get directions <span>&#9654;</span>
				</a>
			</div>
		</div>
	);
}

function RightContents() {
	return (
		<div className="footerRight">
			<div className="socials">
				<div className="links">
					<a
						href="https://www.facebook.com/pages/Sharjah%20Wanderers%20Sports%20Club/1185589958271563/?http_ref=eyJ0cyI6MTc1NzYzODUzMTAwMCwiciI6Imh0dHBzOlwvXC93d3cuZ29vZ2xlLmNvbVwvIn0%3D"
						target="_blank"
					>
						<img alt="facebook" src="/facebook.svg" />
					</a>
					<a href="https://www.instagram.com/sharjahwanderers/" target="_blank">
						<img alt="instagram" src="/instagram.svg" />
					</a>
				</div>
				<p>Follow us on social media</p>
			</div>
			<div className="cards">
				<div>
					<a href="/">HOME</a>
					<a href="/aboutMembership">ABOUT</a>
					<a href="/aboutMembership">MEMBERSHIP</a>
					<a href="/events">EVENTS & OFFERS</a>
					<a href="/restaurant">RESTAURANT & BAR</a>
					<a href="/salonspa">SALON & SPA</a>
					<a href="/facilities">FACILITIES</a>
					<a href="/contact">CONTACT</a>
				</div>
				<div>
					<p>FACILITIES</p>
					<a href="/facilities">RUGBY FIELD</a>
					<a href="/facilities">SWIMMING POOL</a>
					<a href="/facilities">FOOTBALL FIELD</a>
					<a href="/facilities">TENNIS COURT</a>
					<a href="/facilities">GYM</a>
					<a href="/facilities">TRAINING & CLASSES</a>
				</div>
				<div>
					<p>RESTAURANT</p>
					<a href="/restaurant">DINE-IN</a>
					<a href="/restaurant">DELIVERY</a>
					<a href="/restaurant">CATERING</a>
				</div>
			</div>
			<form action="#" method="POST">
				<p>Subscribe to our newsletter</p>
				<input type="text" placeholder="name@email.com"></input>
				<button type="submit">SUBSCRIBE</button>
			</form>
		</div>
	);
}

export default function Footer() {
	return (
		<>
			<div className="endQuote">
				<p>Not all those who wander are lost,</p>
				<a href="https://maps.app.goo.gl/UgQXD1eHRTmpYSSg7" target="_blank">
					Pay us a Visit.
				</a>
			</div>

			<div className="footer">
				<div className="footerCards">
					<LeftContents />
					<RightContents />
				</div>
				<p>SHARJAH WANDERERS SPORTS CLUB</p>
			</div>
		</>
	);
}
