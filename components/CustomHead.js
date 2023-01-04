import Head from "next/head"

const CustomHead = () => {
	return (
		<Head>
			<title>HAVI Lenses</title>

			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="theme-color" content="#232323" />
			<meta name="description" content="Wedding Photography & Videography services in Kenya." />
			<link rel="apple-touch-icon" href="logo192.png" />
			{/* manifest.json provides metadata used when your web app is installed on a
					user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/ */}
			<link rel="manifest" href="manifest.json" />
			{/* Notice the use of %PUBLIC_URL% in the tags above.
					It will be replaced with the URL of the `public` folder during the build.
					Only files inside the `public` folder can be referenced from the HTML.

					Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
					work correctly both with client-side routing and a non-root public URL.
					Learn how to configure a non-root public URL by running `npm run build`. */}

			{/* <!-- Favicon  --> */}
			<link rel="icon" href="img/core-img/havi logos-6_edited.jpg" />

			{/* <!-- Fonts --> */}
			<link rel="dns-prefetch" href="//fonts.gstatic.com" />
			<link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet"></link>
		</Head>
	)
}

export default CustomHead