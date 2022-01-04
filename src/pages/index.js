import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import '../styles/reset.scss';
import '../styles/main.scss';
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
	<Layout>
		<Seo title="Welcome" />
		<div>Welcome to our project.</div>

		<StaticImage src="../images/project.png" alt="project" aspectRatio={3 / 2}
			width={200}
			transformOptions={{ grayscale: false, rotate: 0 }}
		/>
	</Layout>
)

export default IndexPage
