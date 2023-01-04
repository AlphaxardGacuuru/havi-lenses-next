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
				<Head />
				<body className="antialiased">
					<noscript>
						<center>
							<h2 className="m-5">
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
