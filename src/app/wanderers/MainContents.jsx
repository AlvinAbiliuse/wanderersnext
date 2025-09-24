"use client";

import { useEffect, useState } from "react";
import { RenderPromoCards } from "./components/RenderPromoCards.jsx";
import { getPromotionalCards } from "./contentful.js";
import GuestbookCarousel from "./GuestbookCarousel.jsx";
import "./mainContentStyles.css";

const data = {
	cardOne: {
		title: "EAT",
		paraOne:
			"Let our internationally trained chefs provide you with the comfort of Classic British fare and popular modern dishes at our clubhouse restaurant & bar.",
		paraTwo: "Delivery and Catering available.",
	},
	cardTwo: {
		title: "PLAY",
		paraOne:
			"Train at our fully equipped gym, swim at our pool, play at our football field, padel court and tennis court.",
		paraTwo:
			"Learn to play your favorite sport or train with our certified trainers.",
	},
	cardThree: {
		title: "INDULGE",
		paraOne:
			"Pamper yourself at our best in class spa facilities, get a makeover at our Wandies Salon & Spa.",
		paraTwo: "Enjoy a complimentary coffee while you get rejuvenated!",
	},
};

const aboutData = {
	title: "About the Club",
	content:
		"Founded in 1977, when expats residing in Sharjah required a home away from home, the Sharjah Wanderer’s club were established, commonly known as the “British Club”.",
	link: "",
	list: ["Fully licensed bar", "Swimming pool", "Spa and Salon"],
};

const guestBook = {
	para1: "Amazing staff, exellent trainers.",
	para2: "MEMBER",
	para3:
		"Consectetur animi ipsam aut cumque accusantium Deserunt sint porro minima eos optio. Maiores est ex qui dolorum quasi! Nulla quia accusamus quibusdam perferendis tempore itaque.",
	name: "MARK S.",
};

function About() {
	return (
		<div id="about">
			<div className="leftCard">
				<h1>EXPLORE</h1>
				<div>
					<div>
						<h3>{aboutData.title}</h3>
						<p>{aboutData.content}</p>
						<a href="/aboutMembership">
							Learn more by going to the about membership page
						</a>
					</div>
					<div>
						<div></div>
						<ul>
							<li>
								<img alt="tick" className="tick" src="/tick.svg" />
								{aboutData.list[0]}
							</li>
							<li>
								<img alt="tick" className="tick" src="/tick.svg" />
								{aboutData.list[1]}
							</li>
							<li>
								<img alt="tick" className="tick" src="/tick.svg" />
								{aboutData.list[2]}
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="rightCard"></div>
		</div>
	);
}

function Experience() {
	return (
		<div id="experience">
			<h2>EXPERIENCE</h2>
			<div className="cardContainer">
				<div className="card">
					<div>
						<h2>{data.cardOne.title}</h2>
						<p>{data.cardOne.paraOne}</p>
						<p>{data.cardOne.paraTwo}</p>
					</div>
					<a href="/restaurant" aria-label="link for restaurant page">
						EXPLORE
					</a>
				</div>
				<div className="card">
					<div>
						<h2>{data.cardTwo.title}</h2>
						<p>{data.cardTwo.paraOne}</p>
						<p>{data.cardTwo.paraTwo}</p>
					</div>
					<a href="/facilities" aria-label="link for facilities page">
						EXPLORE
					</a>
				</div>
				<div className="card">
					<div>
						{" "}
						<h2>{data.cardThree.title}</h2>
						<p>{data.cardThree.paraOne}</p>
						<p>{data.cardThree.paraTwo}</p>
					</div>{" "}
					<a href="/salonspa" aria-label="link for salon and spa page">
						EXPLORE
					</a>
				</div>
			</div>
		</div>
	);
}
/*

function Guestbook() {
	return (
		<div className="guest">
			<h3>GUESTBOOK</h3>
			<div>
				<p>{guestBook.para1}</p>
				<p>{guestBook.para2}</p>
				<p>{guestBook.para3}</p>

				<h3 className="guestName">{guestBook.name}</h3>
			</div>
			<p>Learn More about our Membership benefits</p>
		</div>
	);
}
*/

import CTA from "./components/CTA.jsx";
function Membership() {
	return (
		<div className="membership">
			<h3>Membership</h3>
			<p>
				Become part of the club, explore unique offers, and enjoy unparalleled
				access to our exclusive club.
			</p>
			<button onClick={CTA}>get membership</button>
		</div>
	);
}

function GuestbookMembership() {
	return (
		<div id="guestbookMembership">
			<GuestbookCarousel />
			<Membership />
		</div>
	);
}

export default function MainContents() {
	const [promoCards, setPromoCards] = useState([]);
	const [isLoading, setLoading] = useState(true);
	/* 
	useEffect(() => {
		getPromotionalCards().then((data) => {
			setPromoCards(data);
			setLoading(false);
		});
	}, []);

	*/
	return (
		<>
			<div className="mainContainer">
				<About />
				<Experience />
				<div id="offerevents">
					<h2>OFFERS & EVENTS</h2>
					<div className="eventContainer">
						<RenderPromoCards promoCards={promoCards} isLoading={isLoading} />
					</div>
				</div>
				<GuestbookMembership />
			</div>
		</>
	);
}
