import React, { useState } from "react";
import "../../assets/components/Home/Home.scss";
import Navbar from "./Navbar/Navbar";
import LocaleBtn from "./LocaleButton/localeBtn";
import { useResponsive } from "../../hooks/useResponsive";
import { LocaleProvider, useLocaleContext } from "../../contexts/localeContext";
import { useLocale } from '../../hooks/useLocale';

const Home = () => {
	const { isMobile, antiSkillsBoxCollision } = useResponsive();
	const [githubActivityShow, setGithubActivityShow] = useState(false);
	const [activePage, setActivePage] = useState("");

	const handleGithubActivityShow = () => {
		setGithubActivityShow(!githubActivityShow);
	};

	
	const { localeData } = useLocale('Home')
	const { locale, setLocale } = useLocaleContext()

	if(!localeData) return null

	return (
		<section className={activePage === "" ? "home" : "home noanim"}>
			<LocaleBtn locale={locale} hndlLocaleChange={(locale) => setLocale(locale)} />
			<Navbar
				isMobile={isMobile}
				antiSkillsBoxCollision={antiSkillsBoxCollision}
				githubActivityShow={githubActivityShow}
				handleGithubActivityShow={handleGithubActivityShow}
				activePage={activePage}
				setActivePage={setActivePage}
			/>

			<div className="home-intro-container">
				<h1 className="home-intro-h1">{localeData?.HomeIntroH1}</h1>
				<div className="home-intro">
					<span>
						{localeData.HomeIntroSpan.split("\n").map((text, index) => (
							<React.Fragment key={index}>
								{text}
								{index < localeData.HomeIntroSpan.split("\n").length - 1 && (
									<br />
								)}
							</React.Fragment>
						))}
					</span>
				</div>
			</div>
		</section>
	);
};

const HomePage = () => {
	return (
		<LocaleProvider path="Home">
			<div className="wrapper" />
			<Home />
		</LocaleProvider>
	);
};

export default HomePage;
