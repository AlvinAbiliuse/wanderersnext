import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { getAnnouncements } from "/src/contentful.js";
import { useState, useEffect } from "react";

import "./announcementStyles.css";

export default function Announcement({ pageTitle }) {
	let [info, setInfo] = useState("");

	useEffect(() => {
		getAnnouncements().then((e) => {
			e.map((e) => {
				if (e.fields?.title === pageTitle) {
					setInfo((info = e));
				}
			});
		});
	}, []);
	if (info != false) {
		return (
			<div className="announcementCard">
				<p>
					<span>ANNOUNCEMENT:</span>
				</p>
				<div
					dangerouslySetInnerHTML={{
						__html: documentToHtmlString(info.fields?.announcementField),
					}}
				/>
				<p className="smallName">The Sharjah Wanderers Sports Club </p>
			</div>
		);
	}
}
