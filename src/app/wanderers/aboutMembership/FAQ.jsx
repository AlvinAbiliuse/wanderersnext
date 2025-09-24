"use client";

let info = [
	{
		id: 0,
		title: "What are the membership requirements?",
		cardInfo:
			"Every prospective member should first apply to be a member by clicking the link above. We will require your valid Emirates ID to verify your identity and may request you to schedule a meeting in person if required prior to granting membership to our club.  A membership fee should be paid upon approval prior to use of our facilities. We are strict with the membership criteria, and no exceptions can be granted for any specific individuals. We expect our members to be in good standing with our club to maintain continued status and eligibility to reapply.",
	},
	{
		id: 1,
		title: "What are the membership benefits?",
		cardInfo:
			"Every member gets access to the club facilities, unrestricted access to the clubhouse and discounted rates for venue and pitch hires as well as events. Members are also provided with Fitness Classes, and You get a unified membership with a discounted rate with the diving club, inquire with us to check if you qualify for the unified membership with SWSC and The Diving Club.",
	},
	{
		id: 2,
		title: "Membership pricing?",
		cardInfo:
			"We offer membership pricings for Single Adults and Family Memberships, for the period of 3 months, 6 months, and 12 months membership. Installment payments can be provided for all membership tiers. Refer to the Membership Pricing Chart above.",
	},
	{
		id: 3,
		title: "Membership for Diving Club?",
		cardInfo:
			"You get a unified membership with a discounted rate with the diving club, inquire with us to check if you qualify for the unified membership with SWSC and BSAC diving club.",
		link: "http://bsac406.com/",
	},
];

import "./faqStyles.css";

function toggleClass(e) {
	let curr;
	if (
		e.target.nodeName.toLowerCase() == "button" ||
		e.target.nodeName.toLowerCase() === "h3"
	) {
		curr = e.target.parentNode;
	} else {
		curr = e.target;
	}
	let parentContainer =
		curr.parentNode.parentNode.querySelectorAll(".card .cardUpper");
	let contains;
	if (curr.classList.contains("open")) {
		contains = false;
	} else {
		contains = true;
	}
	let currButton = curr.querySelector("button");
	let currButtonText = currButton.textContent;

	parentContainer.forEach((e) => {
		e.classList.remove("open");
		e.querySelector("button").textContent = "+";
	});

	if (contains) {
		curr.classList.add("open");
	} else {
		curr.classList.remove("open");
	}

	if (currButtonText === "+") {
		currButton.textContent = "−";
	} else if (currButtonText === "−") {
		currButton.textContent = "+";
	}
}

function ReturnCards() {
	const cards = info.map((i) => {
		return (
			<div key={i.id} className="card">
				<div onClick={toggleClass} className="cardUpper">
					<h3>{i.title}</h3>
					<button>+</button>
				</div>
				<div className="cardInfo hiddenCard">
					<p>{i.cardInfo}</p>
				</div>
			</div>
		);
	});
	return (
		<div id="FAQ">
			<h2>Frequently asked questions</h2>
			<div className="cardContainer">{cards}</div>
		</div>
	);
}

export default function FAQ() {
	return (
		<>
			<ReturnCards />
		</>
	);
}
