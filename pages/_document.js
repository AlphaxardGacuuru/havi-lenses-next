import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {

	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html>
				<Head>
					<meta charset="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="theme-color" content="#232323" />
					<meta name="description" content="Wedding Photography & Videography services in Kenya." />
					<link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
					{/* manifest.json provides metadata used when your web app is installed on a
					user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/ */}
					<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
					{/* Notice the use of %PUBLIC_URL% in the tags above.
					It will be replaced with the URL of the `public` folder during the build.
					Only files inside the `public` folder can be referenced from the HTML.

					Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
					work correctly both with client-side routing and a non-root public URL.
					Learn how to configure a non-root public URL by running `npm run build`. */}
					<title>HAVI Lenses</title>

					{/* <!-- Favicon  --> */}
					<link rel="icon" href="img/core-img/havi logos-6_edited.jpg" />

					{/* <!-- Style CSS --> */}
					<link rel="stylesheet" href="style.css" />

					{/* <!-- Fonts --> */}
					<link rel="dns-prefetch" href="//fonts.gstatic.com" />
					<link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet"></link>
				</Head>
				<body className="antialiased">
					<noscript>
						<center>
							<h2 class="m-5">
								We're sorry but HAVI Lenses doesn't work properly without JavaScript enabled.
								Please enable it to continue.
							</h2>
						</center>
					</noscript>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
