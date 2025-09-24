import "./membershipStyles.css";

let data1 = {
	title: "MEMBERSHIP INFO",
	paragraphs: [
		"Membership to our club gives you complete access to the club facilities, Unrestricted access to the clubhouse, Fitness classes*, unique events and special members only offers.",
		"You get to be part of a unique expat community within Sharjah, with like-minded community members and community engagement within our exclusive private club.",
		"Work, Train, Play and Pamper yourself within our club. Your Home away from Home.",
	],
	disclaimer: "*Members fitness classes only. Private Training not included.",
};

let data2 = {
	title: "Perks of Being a Wanderer.",
	benefits: [
		"Unrestricted Club Access.",
		"Members Fitness Classes",
		"Discounted Facilities & Venue Hire",
		"Members-Only social events.",
		"Private & Exclusive access.",
	],
};

function Card1() {
	let n = 0;
	let paragraphs = data1.paragraphs.map((e) => {
		return <p key={n++}>{e}</p>;
	});

	return (
		<div className="first card">
			<h2>{data1.title}</h2>
			{paragraphs}
			<p className="disclaimer">{data1.disclaimer}</p>
		</div>
	);
}

function Card2() {
	let n = 0;
	let paragraphs = data2.benefits.map((e) => {
		return (
			<p className="perks" key={n++}>
				<img alt="tick" src="/tick.png" />
				<span>{e}</span>
			</p>
		);
	});

	return (
		<div className="second card">
			<h3>
				Perks of Being a <span>Wanderer</span>.
			</h3>
			{paragraphs}
		</div>
	);
}

import CTA from "../components/CTA.jsx";

function Card3() {
	return (
		<div className="membershipDetails">
			<div className="membershipCard">
				<h3>Membership</h3>
				<p>
					Become part of the club, explore unique offers, and enjoy unparalleled
					access to our exclusive club.
				</p>
				<button onClick={CTA}>get membership</button>
			</div>
			<div className="membershipFees">
				<h3>MEMBERSHIP FEES</h3>
				<table>
					<thead>
						<tr>
							<th>DURATION</th>
							<th>INDIVIDUAL</th>
							<th>FAMILY</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>3 MONTH</td>
							<td>AED 950</td>
							<td>AED 1900</td>
						</tr>
						<tr>
							<td>6 MONTH</td>
							<td>AED 1450</td>
							<td>AED 2900</td>
						</tr>
						<tr>
							<td>12 Month</td>
							<td>AED 2300</td>
							<td>AED 4600</td>
						</tr>
					</tbody>
				</table>
				<p>Installment options available.</p>
			</div>
		</div>
	);
}

export default function Membership() {
	return (
		<>
			<div id="membership">
				<Card1 />
				<Card2 />
			</div>
			<Card3 />
		</>
	);
}
