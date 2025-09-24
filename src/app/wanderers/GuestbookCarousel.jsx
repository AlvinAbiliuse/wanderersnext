"use client";

import { getGuestbookInfo } from "./contentful.js";

import { useState, useEffect } from "react";

function CardData({ cards, loading, n }) {
	if (loading) return <p></p>;
	//<p>Loading...</p>;
	return cards.map((e, index) => {
		return (
			<div
				style={{ transform: "translateX(-" + n * 100 + "%)" }}
				key={index}
				className="guest"
			>
				<p className="title">{e.fields?.title}</p>
				<p className="status">MEMBER</p>
				<p className="review">{e.fields?.review}</p>
				<p className="reviewerName">{e.fields?.name}</p>
			</div>
		);
	});
}

let slides;

export default function Carousel() {
	let [n, setN] = useState(0);
	let [data, setData] = useState([]);
	let [loading, setLoading] = useState(true);
	let [max, setMax] = useState(0);

	function changeSlides() {
		slides = setInterval(() => {
			console.log(n);
			if (n === max - 1) {
				setN((n = 0));
			} else {
				setN((n = n + 1));
			}
		}, 5000);
	}

	function reset(curr) {
		clearInterval(slides);
		setN((n = curr));
		changeSlides();
	}

	console.log(n);
	/*
	useEffect(() => {
		getGuestbookInfo().then((e) => {
			setData(e);
			setLoading(false);
			setMax((max = e.length));
			console.log(max);
			changeSlides(n, max, setN);
		});
	}, []);
	*/

	return (
		<div className="guestbook">
			<h3>GUESTBOOK</h3>
			<div className="guestbookCarousel">
				<CardData cards={data} loading={loading} n={n} />
			</div>
			<div className="numbersContainer">
				{data.map((e, index) => {
					if (index === n) {
						return (
							<div
								onClick={() => reset(index)}
								key={index}
								className="number current"
							></div>
						);
					} else {
						return (
							<div
								onClick={() => reset(index)}
								key={index}
								className="number"
							></div>
						);
					}
				})}
			</div>
			<p>Learn More about our Membership benefits</p>
		</div>
	);
}
