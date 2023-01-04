import { useState } from "react"
import Link from 'next/link'

import Img from '../components/Img'

import wedding34 from "../public/img/portfolio-img/Wedding-34.jpg"
import portrait01 from "../public/img/portfolio-img/Portrait-01.jpg"
import kid01 from "../public/img/portfolio-img/Kid-01.jpg"
import wedding35 from "../public/img/portfolio-img/Wedding-35.jpg"
import portrait02 from "../public/img/portfolio-img/Portrait-02.jpg"
import kid02 from "../public/img/portfolio-img/Kid-02.jpg"
import wedding36 from "../public/img/portfolio-img/Wedding-36.jpg"
import portrait03 from "../public/img/portfolio-img/Portrait-03.jpg"
import kid03 from "../public/img/portfolio-img/Kid-03.jpg"
import wedding37 from "../public/img/portfolio-img/Wedding-37.jpg"
import portrait04 from "../public/img/portfolio-img/Portrait-04.jpg"
import kid04 from "../public/img/portfolio-img/Kid-04.jpg"
import wedding38 from "../public/img/portfolio-img/Wedding-38.jpg"
import portrait05 from "../public/img/portfolio-img/Portrait-05.jpg"
import kid05 from "../public/img/portfolio-img/Kid-05.jpg"
import wedding39 from "../public/img/portfolio-img/Wedding-39.jpg"
import portrait06 from "../public/img/portfolio-img/Portrait-06.jpg"
import kid06 from "../public/img/portfolio-img/Kid-06.jpg"
import wedding40 from "../public/img/portfolio-img/Wedding-40.jpg"
import portrait07 from "../public/img/portfolio-img/Portrait-07.jpg"
import kid07 from "../public/img/portfolio-img/Kid-07.jpg"
import wedding41 from "../public/img/portfolio-img/Wedding-41.jpg"
import portrait08 from "../public/img/portfolio-img/Portrait-08.jpg"
import kid08 from "../public/img/portfolio-img/Kid-08.jpg"
import wedding33 from "../public/img/portfolio-img/Wedding-33.jpg"
import portrait09 from "../public/img/portfolio-img/Portrait-09.jpg"
import kid09 from "../public/img/portfolio-img/Kid-09.jpg"
import wedding43 from "../public/img/portfolio-img/Wedding-43.jpg"
import portrait10 from "../public/img/portfolio-img/Portrait-10.jpg"
import kid10 from "../public/img/portfolio-img/Kid-10.jpg"

const Portfolio = () => {

	const [active, setActive] = useState("")

	const showPortfolio = () => {
		document.getElementById("projects").style.display = "block"
		setTimeout(() => {
			window.scrollBy({ top: 200, right: 0, behavior: "smooth" })
		}, 1000)
	}

	// Images array
	const images = [
		wedding34,
		portrait01,
		kid01,
		wedding35,
		portrait02,
		kid02,
		wedding36,
		portrait03,
		kid03,
		wedding37,
		portrait04,
		kid04,
		wedding38,
		portrait05,
		kid05,
		wedding39,
		portrait06,
		kid06,
		wedding40,
		portrait07,
		kid07,
		wedding41,
		portrait08,
		kid08,
		wedding33,
		portrait09,
		kid09,
		wedding43,
		portrait10,
		kid10,
	]

	return (
		<div>
			{/* <!-- ***** Hero Area Start ***** --> */}
			<div className="row">
				<div className="col-sm-6 p-0">
					<img src="img/bg-img/portfolio.jpg" alt="creator" />
				</div>
				<div className="col-sm-6" style={{ backgroundColor: "#232323" }}>
					<div className="mt-5 mb-5 hidden"></div>
					<center>
						<br />
						<br />
						<div className="d-flex justify-content-center mb-3">
							<div className="p-2 ms-5 me-5 hidden">Flex item 1</div>
							<div className="p-5">
								<div className="m-3" style={{ backgroundColor: "white", height: "1px" }}></div>
								<h2 style={{ color: "white" }}>Take a look at my Portfolio</h2>
								<p style={{ color: "white" }}>
									We strive to give you the best products to make your day
									memorable.
								</p>
							</div>
							<div className="p-2 ms-5 me-5 hidden">Flex item 3</div>
						</div>
						<Link href="contact">
							<a className="btn sonar-btn white-btn">contact me</a>
						</Link>
						<br />
						<br />
						<br />
						<br />
						<br />
						<div className="d-flex justify-content-center">
							<div className="mx-2 px-2 p-1 border-bottom border-light"><h6 className="text-light">Pictures</h6></div>
							<div className="mx-2 px-2 p-1"><h6 className="text-light">Videos</h6></div>
						</div>
						<div className="d-flex justify-content-center">
							<div className={`m-2 px-2 p-1 ${active == `` && `border-bottom border-light`}`}
								style={{ cursor: "pointer", transition: "border 3s ease-out" }}
								onClick={() => setActive("")}>
								<h6 className="text-light">All</h6>
							</div>
							<div className={`m-2 px-2 p-1 ${active == `Wedding` && `border-bottom border-light`}`}
								style={{ cursor: "pointer", transition: "border 3s ease-out" }}
								onClick={() => setActive("Wedding")}>
								<h6 className="text-light">Weddings</h6>
							</div>
							<div className={`m-2 px-2 p-1 ${active == `Portrait` && `border-bottom border-light`}`}
								style={{ cursor: "pointer", transition: "border 3s ease-out" }}
								onClick={() => setActive("Portrait")}>
								<h6 className="text-light">Portraits</h6>
							</div>
							<div className={`m-2 px-2 p-1 ${active == `Kid` && `border-bottom border-light`}`}
								style={{ cursor: "pointer", transition: "border 3s ease-out" }}
								onClick={() => setActive("Kid")}>
								<h6 className="text-light">Kids</h6>
							</div>
						</div>
					</center>
				</div>
			</div>
			{/* <!-- ***** Hero Area End ***** --> */}

			{/* <center>
				<button id="show-button" className="sonar-btn m-5" onClick={showPortfolio}>show portfolio</button>
			</center> */}

			{/* Gallery Area Start */}
			<div>
				{images
					.filter((image) => image.src.match(active))
					.reverse()
					.map((image, key) => (
						<span
							key={key}
							className="thumbnail w-50"
							style={{
								borderRadius: "0px",
								display: "inline-block",
								textAlign: "center",
								verticalAlign: "top",
								padding: "2px",
								transition: "display 2s ease"
							}}>
							<a href={image}>
								<Img src={image} />
							</a>
						</span>
					))}
			</div>
			{/* Gallery Area End */}

			{/* <!-- ****** Gallery Area Start ****** --> */}
			<section className="sonar-projects-area" id="projects" style={{ display: "none" }}>
				<div className="container-fluid">
					<div className="row sonar-portfolio">
						{/* <!-- Single gallery Item --> */}
						<div className="col-12 col-sm-6 col-lg-3 single_gallery_item portraits wow fadeInUpBig"
							data-wow-delay="500ms">
							<a className="gallery-img" href="img/portfolio-img/IMG_20210407_211730_563.jpg">
								<img src="img/portfolio-img/IMG_20210407_211730_563.jpg" loading="lazy" alt="" />
							</a>
							{/* <!-- Gallery Content --> */}
							<div className="gallery-content">
								<h4>Gachie, Nairobi</h4>
								<p>Portrait</p>
							</div>
						</div>

						{/* <!-- Single gallery Item --> */}
						<div className="col-12 col-sm-6 col-lg-3 single_gallery_item landscapes studio wow fadeInUpBig"
							data-wow-delay="300ms">
							<a className="gallery-img" href="img/portfolio-img/IMG_20210218_143829_548.jpg">
								<img src="img/portfolio-img/IMG_20210218_143829_548.jpg" loading="lazy" alt="" />
							</a>
							{/* <!-- Gallery Content --> */}
							<div className="gallery-content">
								<h4>Aboretum, Nairobi</h4>
								<p>Portrait</p>
							</div>
						</div>

						{/* <!-- Single gallery Item --> */}
						<div className="col-12 col-sm-6 col-lg-3 single_gallery_item product wow fadeInUpBig"
							data-wow-delay="500ms">
							<a className="gallery-img" href="img/portfolio-img/IMG_20210403_150159_526.jpg">
								<img src="img/portfolio-img/IMG_20210403_150159_526.jpg" loading="lazy" alt="" />
							</a>
							{/* <!-- Gallery Content --> */}
							<div className="gallery-content">
								<h4>Gachie, Nairobi</h4>
								<p>Portrait</p>
							</div>
						</div>

						{/* <!-- Single gallery Item --> */}
						<div className="col-12 col-sm-6 col-lg-3 single_gallery_item landscapes studio wow fadeInUpBig"
							data-wow-delay="700ms">
							<a className="gallery-img" href="img/portfolio-img/IMG_20210406_214053_685.jpg">
								<img src="img/portfolio-img/IMG_20210406_214053_685.jpg" loading="lazy" alt="" />
							</a>
							{/* <!-- Gallery Content --> */}
							<div className="gallery-content">
								<h4>Kikuyu, Nairobi</h4>
								<p>Portrait</p>
							</div>
						</div>

						{/* <!-- Single gallery Item --> */}
						<div className="col-12 col-sm-6 col-lg-3 single_gallery_item landscapes product wow fadeInUpBig"
							data-wow-delay="300ms">
							<a className="gallery-img" href="img/portfolio-img/IMG_20210329_214826_974.jpg">
								<img src="img/portfolio-img/IMG_20210329_214826_974.jpg" loading="lazy" alt="" />
							</a>
							{/* <!-- Gallery Content --> */}
							<div className="gallery-content">
								<h4>Mwiki, Nairobi</h4>
								<p>Wedding</p>
							</div>
						</div>

						{/* <!-- Single gallery Item --> */}
						<div className="col-12 col-sm-6 col-lg-3 single_gallery_item portraits wow fadeInUpBig"
							data-wow-delay="500ms">
							<a className="gallery-img" href="img/portfolio-img/IMG_20210327_142635_314.jpg"><img
								src="img/portfolio-img/IMG_20210327_142635_314.jpg" loading="lazy" alt="" /></a>
							{/* <!-- Gallery Content --> */}
							<div className="gallery-content">
								<h4>Somewhere, Siaya</h4>
								<p>Wedding</p>
							</div>
						</div>

						{/* <!-- Single gallery Item --> */}
						<div className="col-12 col-sm-6 col-lg-3 single_gallery_item landscapes product wow fadeInUpBig"
							data-wow-delay="700ms">
							<a className="gallery-img" href="img/portfolio-img/IMG_20210330_165116_110.jpg"><img
								src="img/portfolio-img/IMG_20210330_165116_110.jpg" loading="lazy" alt="" /></a>
							{/* <!-- Gallery Content --> */}
							<div className="gallery-content">
								<h4>Mirema, Nairobi</h4>
								<p>Wedding</p>
							</div>
						</div>

						{/* <!-- Single gallery Item --> */}
						<div className="col-12 col-sm-6 col-lg-3 single_gallery_item portraits studio wow fadeInUpBig"
							data-wow-delay="900ms">
							<a className="gallery-img" href="img/portfolio-img/IMG_20210330_204636_605.jpg">
								<img src="img/portfolio-img/IMG_20210330_204636_605.jpg" loading="lazy" alt="" />
							</a>
							{/* <!-- Gallery Content --> */}
							<div className="gallery-content">
								<h4>Mirema, Nairobi</h4>
								<p>Wedding</p>
							</div>
						</div>

						{/* <!-- Single gallery Item --> */}
						<div className="col-12 col-sm-6 col-lg-3 single_gallery_item landscapes studio wow fadeInUpBig"
							data-wow-delay="300ms">
							<a className="gallery-img" href="img/portfolio-img/IMG_20210329_143557_416.jpg">
								<img src="img/portfolio-img/IMG_20210329_143557_416.jpg" loading="lazy" alt="" />
							</a>
							{/* <!-- Gallery Content --> */}
							<div className="gallery-content">
								<h4>Kasarani, Nairobi</h4>
								<p>Wedding</p>
							</div>
						</div>

						{/* <!-- Single gallery Item --> */}
						<div className="col-12 col-sm-6 col-lg-3 single_gallery_item portraits wow fadeInUpBig"
							data-wow-delay="500ms">
							<a className="gallery-img" href="img/portfolio-img/IMG_20210328_220224_702.jpg">
								<img src="img/portfolio-img/IMG_20210328_220224_702.jpg" loading="lazy" alt="" />
							</a>
							{/* <!-- Gallery Content --> */}
							<div className="gallery-content">
								<h4>Kasarani, Nairobi</h4>
								<p>Wedding</p>
							</div>
						</div>

						{/* <!-- Single gallery Item --> */}
						<div className="col-12 col-sm-6 col-lg-3 single_gallery_item landscapes wow fadeInUpBig"
							data-wow-delay="700ms">
							<a className="gallery-img" href="img/portfolio-img/IMG_20210329_162511_163.jpg">
								<img src="img/portfolio-img/IMG_20210329_162511_163.jpg" loading="lazy" alt="" />
							</a>
							{/* <!-- Gallery Content --> */}
							<div className="gallery-content">
								<h4>Kasarani, Nairobi</h4>
								<p>Wedding</p>
							</div>
						</div>

						{/* <!-- Single gallery Item --> */}
						<div className="col-12 col-sm-6 col-lg-3 single_gallery_item product wow fadeInUpBig"
							data-wow-delay="900ms">
							<a className="gallery-img" href="img/portfolio-img/IMG_20210330_122032_932.jpg">
								<img src="img/portfolio-img/IMG_20210330_122032_932.jpg" loading="lazy" alt="" />
							</a>
							{/* <!-- Gallery Content --> */}
							<div className="gallery-content">
								<h4>Mirema, Nairobi</h4>
								<p>Wedding</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- ****** Gallery Area End ****** --></br> */}
		</div>
	)
}

export default Portfolio
