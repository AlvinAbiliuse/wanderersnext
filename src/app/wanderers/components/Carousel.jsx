import "./carouselStyles.css";

import { useState, useEffect } from "react";

export default function Carousel({ img, loading }) {
	if (loading) return <p></p>;
	// <p>Loading...</p>;
	let [n, setN] = useState(0);

	function slideChange(imageList, setState) {
		if (n == imageList.length - 1) {
			setN((n = 0));
		} else {
			setN((n = n + 1));
		}
		setState(imageList[n]);
	}

	let interval;
	function intervalSet(imageList, changeImage) {
		interval = setInterval(() => {
			slideChange(imageList, changeImage);
		}, 5000);
	}
	/*
	function setImage(num, imageList, changeImage) {
		clearInterval(interval);
		setN((n = num));
		changeImage(imageList[n]);
		intervalSet(imageList, changeImage);
	}
	*/

	let [image, changeImage] = useState(img[0]);
	useEffect(() => intervalSet(img, changeImage), []);
	return (
		<div className="carousel">
			<img alt="carousel Image" src={"https:" + image} />
			<div className="numbers">
				{img.map((data, index) => {
					if (index == n) {
						return (
							<div
								onClick={() => setImage(index, img, changeImage)}
								className="current"
								key={index}
							></div>
						);
					} else {
						return (
							<div
								onClick={() => setImage(index, img, changeImage)}
								key={index}
							></div>
						);
					}
				})}
			</div>
		</div>
	);
}
