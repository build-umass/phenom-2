import { getRedirectStatus } from "next/dist/lib/load-custom-routes";
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Dashboard.module.css"


// TODO: consolidate these functions within getServerSideProps()
function getProgWidth() {
	// TODO: some way to retrieve the width from the database here
	let width = 75;
	return width > 100 ? 100 : width;
}

function getName() {
	// TODO: implement name retrieval
	return "John Smith";
}

function getStatus() {
	// TODO: implement retrieval of 'status': level of contribution
	// Could be along the lines of 'super volunteer' or 'top contributor,' etc.
	return "Status";
}

function getTags() {
	// return jsx tag elements based on user's tags (no implementation yet)
	let tagCount = 0;
	let tags = ["tag1", "tag2", "tag3"]; // sample tags - will be retrieved from data in future
	return tags;
}

function getPhone() {
	return "555-555-5555";
}

function getEmail() {
	return "someemail@email.com";
}

// this will be refactored to 
function getAddress() {
	return {
		road: "123 Somewhere Rd",
		unit: "Apt 1",
		city: "Cityville",
		state: "MA",
		zip: "01234"
	}
}

function getDistrict() {
	return {
		houseDistrict: {
			district: 1,
			rep: "Richard Neal",
			tier: "X",
			tierColor: "#81c781",
			supports: true
		},
		senateDistrict: {
			district: "4th Middlesex",
			rep: "Cindy Friedman",
			tier: "X",
			tierColor: "#cfcf23",
			supports: false
		}
	}
}

// function for table debugging purposes
function getRow() {
	return {
		name: "Jane Smith",
		phone: "555-555-5555",
		email: "someemail@email.com",
		district: "4"
	}
}

function generateRows() {
	let rows = [];
	// number of rows will be replaced by number of volunteers
	for (let i = 0; i < 50; ++i) {
		let row = getRow();
		rows.push(
			<tr>
				<th scope="row">{row.name}</th>
				<td>{row.phone}</td>
				<td>{row.email}</td>
				<td>{row.district}</td>
			</tr>
		)
	}
	return rows;
}

let address = getAddress();
let district = getDistrict();

export default function Dashboard({ isConnected }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Dashboard</title>
				<meta name="description" content="View information on recruited individuals + profile info" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className={styles.header}>
				<nav className={styles.headerBar}>
					<h1 className={styles.headerText}>Dashboard</h1>
					<a className={styles.link} href="https://phenomonline.org/">Back to PHENOM Home</a>
				</nav>
			</header>

			<main className={styles.main}>
				<div className={styles.profileCard}>
					<div className={styles.cardRow}>
						<h2 className={styles.smallHeaderText}>{getName()}</h2>
						<div className={styles.tag} style={{ backgroundColor: "#81c781" }}>
							<h4 className={styles.tagText}>{getStatus()}</h4>
						</div>
					</div>
					<div className={styles.cardRow}>
						<h3 className={styles.text}>Your tags:</h3>
						{/* sample tags, will be cleaner in final build */}
						<li className={styles.tag} style={{ backgroundColor: "#a1a1a1" }}>
							<h4 className={styles.tagText}>tag1</h4>
						</li>
						<li className={styles.tag} style={{ backgroundColor: "#a1a1a1" }}>
							<h4 className={styles.tagText}>tag2</h4>
						</li>
						<li className={styles.tag} style={{ backgroundColor: "#a1a1a1" }}>
							<h4 className={styles.tagText}>tag3</h4>
						</li>
					</div>
					<div className={styles.cardRow} style={{ marginTop: 15 }}>
						<div className={styles.verticalWrapper}>
							<h3 className={styles.text}>Phone:<br /><h4 className={styles.subText}>{getPhone()}</h4></h3>
							<h3 className={styles.text}>Email:<br /><h4 className={styles.subText}>{getEmail()}</h4></h3>
						</div>
						<div className={styles.verticalWrapper} style={{ marginLeft: 50 }}>
							<h3 className={styles.text}>
								Address:
								{/* will be refactored */}
								<h4 className={styles.subText}>{address.road}<br />{address.unit}<br />{address.city}, {address.state}<br />{address.zip}<br /></h4>
							</h3>
						</div>
					</div>
					<div className={styles.cardRow} style={{ marginTop: 20 }}>
						<div className={styles.verticalWrapper}>
							<div className={styles.cardRow}>
								<h3 className={styles.text}>House District</h3>
								<li className={styles.tag} style={{ backgroundColor: district.houseDistrict.tierColor, alignSelf: "flex-start", marginTop: 3 }}><h4 className={styles.tagText}>Tier: {district.houseDistrict.tier}</h4></li>
								{district.houseDistrict.supports ? (
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#81c781" className="bi bi-check" viewBox="0 0 16 16">
										<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
									</svg>
								) : (
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#c91a1a" className="bi bi-x" viewBox="0 0 16 16">
										<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
									</svg>
								)}
							</div>
							<h4 className={styles.subText}>District: {district.houseDistrict.district}<br />Representative: {district.houseDistrict.rep}</h4>
						</div>
					</div>
					<div className={styles.cardRow} style={{ marginTop: 20 }}>
						<div className={styles.verticalWrapper}>
							<div className={styles.cardRow}>
								<h3 className={styles.text}>Senate District</h3>
								<li className={styles.tag} style={{ backgroundColor: district.senateDistrict.tierColor, alignSelf: "flex-start", marginTop: 3 }}><h4 className={styles.tagText}>Tier: {district.senateDistrict.tier}</h4></li>
								{district.senateDistrict.supports ? (
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#81c781" className="bi bi-check" viewBox="0 0 16 16">
										<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
									</svg>
								) : (
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#c91a1a" className="bi bi-x" viewBox="0 0 16 16">
										<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
									</svg>
								)}
							</div>
							<h4 className={styles.subText}>District: {district.senateDistrict.district}<br />Representative: {district.senateDistrict.rep}</h4>
						</div>
					</div>
					<div className={styles.cardRow} style={{ marginTop: 20 }}>
						<div className={styles.verticalWrapper}>
							<h3 className={styles.text}>Actions Taken:</h3>
							<ul>
								<li className={styles.subText}>Volunteer Drive</li>
								<li className={styles.subText}>Super Contributor</li>
								<li className={styles.subText}>Top Petitioner</li>
							</ul>
						</div>
						{/* fix margin for button */}
					</div>
					<div style={{display: 'flex', alignContent: 'flex-end', justifyContent: 'flex-end', flex: 1}}>
							<button type="button" className="btn btn-primary" style={{ backgroundColor: "#6b076b", height: 40, borderRadius: 10, marginTop: 'auto', marginBottom: 10 }}>Edit Profile Info</button>
						</div>
				</div>

				<div className={styles.verticalWrapper}>
					<div className={styles.milestoneTracker}>
						{/*TODO: implement labeled segments in progress bar*/}
						<h2 className={styles.smallHeaderText}>Your Signup Milestones:</h2>
						<div className="progress" style={{ margin: "0 25px 0 25px", width: "40vw", border: "solid black 2px", flex: 1 }}>
							<div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: getProgWidth() + "%", backgroundColor: "#6b076b" }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">{getProgWidth() + '%'}</div>
						</div>
					</div>
					<div className={styles.volunteerCard}>
						<h2 className={styles.smallHeaderText}>Your Volunteer List</h2>
						<table className={styles.fixedHeader}>
								<thead>
									<tr>
										<th>Name</th>
										<th>Phone</th>
										<th>Email</th>
										<th>House District</th>
									</tr>
								</thead>
							<tbody>
								{generateRows()}
							</tbody>
						</table>
					</div>
				</div>
			</main>

			{/* <footer className={styles.footer}>
				<div className={styles.imageWrapper}>
					<Image className={styles.image} src="/phenomsmallwhite.webp" width="105" height="78" alt="PHENOM Logo" />
				</div>
			</footer> */}
		</div>
	);
}