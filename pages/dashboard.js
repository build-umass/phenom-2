import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Dashboard.module.css"
import clientPromise from "../lib/mongodb"

// https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
export async function getServerSideProps(context) {
	try {
		// client.db() will be the default database passed in the MONGODB_URI
		// You can change the database by calling the client.db() function and specifying a database like:
		// const db = client.db("myDatabase");
		// Then you can execute queries against your database like so:
		// db.find({}) or any of the MongoDB Node Driver commands
		await clientPromise
		return {
			props: { isConnected: true },
		}
	} catch (e) {
		console.error(e)
		return {
			props: { isConnected: false },
		}
	}
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
				<nav className={styles.headerBar}></nav>
			</header>
		</div>
	);
}