import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import '../styles/reset.scss';
import '../styles/main.scss';

const SecondPage = () => (
	<Layout>
		<Seo title="About" />
		<div>This is a cool site.</div>
	</Layout>
)

export default SecondPage
