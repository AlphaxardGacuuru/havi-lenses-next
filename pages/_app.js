import "/styles/style.css"
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {

	/*
	*
	* Register service worker */
	if (typeof window !== "undefined" && window?.location.href.match(/https/)) {
		if ('serviceWorker' in navigator) {
			window.addEventListener('load', () => {
				navigator.serviceWorker.register('/sw.js')
				// .then((reg) => console.log('Service worker registered', reg))
				// .catch((err) => console.log('Service worker not registered', err));
			})
		}
	}

	return (
		<>
			<Head>
				<title>HAVI Lenses</title>
			</Head>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	)
}

export default MyApp
