import { Helmet } from "react-helmet";

export default function Title({ title, description }) {
	return (
		<Helmet>
			<title> {title + " - Sharjah Wanderers Sports Club"}</title>
			<meta name="description" content={description} />
		</Helmet>
	);
}
