import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import clientPromise from '../lib/mongodb'

export default function Signup({ isConnected }) {
    return (
        <div className='signup-page'>
          <div className='header ml-3'>
                <div className='logo'>
                  <Image src='/../public/phenomsmallwhite.webp' alt='hi' width={100} height={100}></Image>
                </div>
                <div className='line'>
                  <hr className='line'></hr>
                </div>
            </div>
          <div className='signup-box bg-white'>
            <div className='title'>
              <h1 className='px-3 pt-1'>Create a New Account</h1>
            </div>
            <form>
              <div className='name-zip d-flex justify-content-around mt-4'>
                <div className='name d-flex flex-column w-35'>
                  <label htmlFor="name"><b><h5 className='m-0'>Name</h5></b></label>
                  <input type="text" name="name" required></input>
                </div>
                <div className='zip d-flex flex-column w-35'>
                  <label htmlFor="zip"><b><h5 className='m-0'>Zip</h5></b></label>
                  <input type="text" name="zip" required></input>
                </div>
              </div>
              <div className='email-pass d-flex flex-column mt-3'>
                <label htmlFor="email"><b><h5 className='m-0'>Email</h5></b></label>
                <input className='email-pass-text' type="text" name="email" required></input>
              </div>
              <div className='email-pass d-flex flex-column mt-3'>
                <label htmlFor="password"><b><h5 className='m-0'>Password</h5></b></label>
                <input className='email-pass-text' type="text" name="password" required></input>
              </div>
              <div className='click-options mt-1'>
                <p className='option fw-lighter'>Login</p>
                <p className='option fw-lighter'>Forget Password</p>
              </div>
              <div className='submit text-white m-auto mt-4 d-flex d-flex justify-content-center align-items-center'>
                <input className='submit-button bg-none' type="submit" value="Submit"></input>
              </div>
            </form>
          </div>
        </div>
    )
}

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