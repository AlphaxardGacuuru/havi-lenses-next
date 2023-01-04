import { useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

const Header = () => {

	const router = useRouter()

	const path = router.pathname

	const open = () => document.getElementById("MyElement").className = "menu-open"
	const close = () => document.getElementById("MyElement").classList.remove("menu-open")

	const handleScroll = () => {
		window.onscroll = () => {
			if (window.pageYOffset > 0) {
				document.getElementById("header-area").classList.add("sticky")
			} else {
				document.getElementById("header-area").classList.remove("sticky")
			}
		}
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [])


	return (
		<div id="MyElement">
			{/* <!-- ***** Header Area Start ***** --> */}
			<header id="header-area" className="header-area">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<div className="menu-area d-flex justify-content-between">
								{/* <!-- Logo Area  --> */}
								<div className="logo-area">
									<Link href="/">HAVI Lenses</Link>
								</div>

								<div className="menu-content-area d-flex align-items-center">
									{/* <!-- Header Social Area --> */}
									<div className="header-social-area d-flex align-items-center">
										<a href="tel:0700364446" data-toggle="tooltip" data-placement="bottom" title="Phone">
											<i className="fa fa-phone" aria-hidden="true"></i>
										</a>
										<a href="sms:0700364446" data-toggle="tooltip" data-placement="bottom" title="SMS">
											<i className="fa fa-comment-o" aria-hidden="true"></i>
										</a>
										<a href="https://wa.me/+2540700364446" data-toggle="tooltip" data-placement="bottom" title="WhatsApp">
											<i className="fa fa-whatsapp" aria-hidden="true"></i>
										</a>
										<a href="mailto:alphaxardgacuuru47@gmail.com?subject = Photography&body = Enquiry" data-toggle="tooltip" data-placement="bottom" title="Email">
											<i className="fa fa-envelope-o" aria-hidden="true"></i>
										</a>
										<a href="https://www.instagram.com/alphaxard_gacuuru" data-toggle="tooltip"
											data-placement="bottom" title="Instagram">
											<i className="fa fa-instagram" aria-hidden="true"></i>
										</a>
										<a href="https://www.facebook.com/alphaxard.gacuuru" data-toggle="tooltip"
											data-placement="bottom" title="Facebook">
											<i className="fa fa-facebook" aria-hidden="true"></i>
										</a>
									</div>
									{/* <!-- Menu Icon --> */}
									<span className="navbar-toggler-icon" id="menuIcon" onClick={open}></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			{/* <!-- ***** Header Area End ***** --> */}

			{/* <!-- ***** Main Menu Area Start ***** --> */}
			<div className="mainMenu d-flex align-items-center justify-content-between">
				{/* <!-- Close Icon --> */}
				<div className="closeIcon" onClick={close}>
					<i className="ti-close" aria-hidden="true"></i>
				</div>
				{/* <!-- Logo Area --> */}
				<div className="logo-area">
					<Link href="/">HAVI Lenses</Link>
				</div>
				{/* <!-- Nav --> */}
				<div className="sonarNav wow fadeInUp" data-wow-delay="1s">
					<nav>
						<ul>
							<li className="nav-item">
								<Link href="/">
									<a className="nav-link"
										style={{ opacity: path == "/" ? 1 : 0.2 }}
										onClick={close}>
										Home
									</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/about">
									<a className="nav-link"
										style={{ opacity: path == "/about" ? 1 : 0.2 }}
										onClick={close}>
										About Me
									</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/services">
									<a className="nav-link"
										style={{ opacity: path == "/services" ? 1 : 0.2 }}
										onClick={close}>
										Services
									</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/portfolio">
									<a className="nav-link"
										style={{ opacity: path == "/portfolio" ? 1 : 0.2 }}
										onClick={close}>
										Portfolio
									</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/contact">
									<a className="nav-link"
										style={{ opacity: path == "/contact" ? 1 : 0.2 }}
										onClick={close}>
										Contact
									</a>
								</Link>
							</li>
						</ul>
					</nav>
					{/* Added to create margin */}
					<div className="mt-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis exercitationem eum repellendus. Similique, quo quaerat nam consequuntur saepe omnis, dolorum quibusdam at, consectetur perferendis cupiditate sint minima quas nihil quasi.
					</div>
				</div>
			</div>
			{/* <!-- ***** Main Menu Area End ***** --> */}
		</div>
	)
}

export default Header
