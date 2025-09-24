"use client";

import "./navStyles.css";

function openWindow() {
	let open = document.querySelector(".openWindow");
	open.classList.remove("hidden");
	document.querySelector("html").classList.add("stopScroll");
}

function closeWindow() {
	let open = document.querySelector(".openWindow");
	open.classList.add("hidden");
	document.querySelector("html").classList.remove("stopScroll");
}

export default function Navbar() {
	return (
		<div className="navBar">
			<div className="whatsapp-fixed">
				<p>Contact us!</p>
				<a
					href="https://api.whatsapp.com/send/?phone=971585311419&text=Thank+you+for+contacting+Sharjah+Wanderers+Sports+Club%2C+how+can+we+help+you%3F&type=phone_number&app_absent=0"
					target="_blank"
				>
					<img alt="whatsapp logo" src="/whatsapp.svg" />
				</a>
			</div>
			<dialog id="fullWindow"></dialog>
			<div className="openWindow hidden">
				<div className="closeDiv">
					<div></div>
					<button onClick={closeWindow} className="close">
						<img alt="multiply sign" src="/multiply.svg" />
					</button>
				</div>
				<ul>
					<li>
						<a href="/">
							<img alt="website logo" src="/logo.svg" />
						</a>
					</li>
					<li>
						<a href="/">HOME</a>
					</li>
					<li>
						<a href="/wanderers/aboutMembership">ABOUT</a>
					</li>
					<li onClick={closeWindow}>
						<a href="/wanderers/aboutMembership#membership">MEMBERSHIP</a>
					</li>
					<li>
						<a href="/events">EVENTS & OFFERS</a>
					</li>
					<li>
						<a href="/restaurant">RESTAURANT & BAR</a>
					</li>
					<li>
						<a href="/facilities">FACILITIES</a>
					</li>
					<li>
						<a href="/salonspa">SPA & SALON</a>
					</li>
					<li>
						<a href="/contact">CONTACT</a>
					</li>
				</ul>
				<a href="http://sharjahwanderers.clubm.mobi/">MEMBERS LOGIN</a>
				<p>Sharjah Wanderers Sports Club</p>
			</div>
			<div className="mobileNav">
				<a href="/">
					<img alt="home" className="logo" src="/logo.svg" />
				</a>
				<button onClick={openWindow} className="hamburgerMenu">
					&#9776;
				</button>
			</div>
			<div className="desktopNav">
				<div className="topNav">
					<a href="/">
						<img alt="home" src="/home.png" />
					</a>
					<div className="rightNavContents">
						<a href="http://sharjahwanderers.clubm.mobi/">
							members login
							<img alt="enter logo" src="/enter.svg" />
						</a>
						<a href="/contact">contact</a>
					</div>
				</div>
				<div className="bottomNav">
					<ul>
						<li>
							<a href="/wanderers/aboutMembership">ABOUT</a>
						</li>
						<li>
							<a href="/wanderers/aboutMembership">MEMBERSHIP</a>
						</li>
						<li>
							<a href="/events">EVENTS & OFFERS</a>
						</li>
						<li>
							<a href="/">
								<img alt="logo" className="logo" src="/logo.svg" />
							</a>
						</li>
						<li>
							<a href="/restaurant">RESTAURANT & BAR</a>
						</li>
						<li>
							<a href="/facilities">FACILITIES</a>
						</li>
						<li>
							<a href="/salonspa">SPA & SALON</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
