import { getRedirectStatus } from "next/dist/lib/load-custom-routes";
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Dashboard.module.css"

// function getProgress() {
// 	return {
// 		width: 100,
// 		aria-valuenow: 75,
// 		aria-valuemin: 0,
// 		aria-valuemax: 100
// 	};
// }
function getProgWidth() {
	// TODO: some way to retrieve the width from the database here
	let width = 0; // 1000 will be max width (100%)
	return width > 100 ? 100: width;
}

function getName() {
	// TODO: implement name retrieval
	return "John Smith";
}

function getStatus() {
	// TODO: implement retrieval of 'status': level of contribution
	// Could be along the lines of 'super volunteer' or 'top contributor,' etc.
	return "Status goes here";
}

export default function Dashboard({ isConnected }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Dashboard</title>
				<meta name="description" content="View information on recruited individuals + profile info" />
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<header className={styles.header}>
				<Image className={styles.image} src="/phenomsmallwhite.webp" width="125" height="100" alt="PHENOM Logo"/>
				<nav className={styles.headerBar}>
					<h1 className={styles.headerText}>PHENOM Dashboard</h1>
					<a className={styles.link} href="https://phenomonline.org/">Back to PHENOM Home</a>
				</nav>
			</header>

			
			<div className={styles.milestoneTracker}>
				{/*TODO: implement labeled segments in progress bar*/}
				<h2 className={styles.smallHeaderText}>Your Signup Milestones:</h2>
				<div className="progress" style={{margin: "0 25px 0 25px", width: "35vw", border: "solid black 2px", flex: 1}}>
  				<div className="progress-bar progress-bar-striped" role="progressbar" style={{width: getProgWidth() + "%", ['background-color']: "#6b076b"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{getProgWidth() + '%'}</div>
				</div>
			</div>

			<main className={styles.main}>
				<div className={styles.profileCard}>
					<header className={styles.cardBanner}>
						<h2 className={styles.bannerText}>Your Profile Info:</h2>
					</header>
					<div className={styles.cardRow}>
						<h2 className={styles.smallHeaderText}>{getName()}</h2>
						<div className={styles.statusTag}>
							<h4 className={styles.tagText}>{getStatus()}</h4>
						</div>
					</div>
				</div>
			</main>

		<footer className={styles.footer}>

		</footer>
		</div>
		);
}