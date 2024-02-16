import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="p-4 bg-white md:p-8 lg:p-10 ">
            <div className="mx-auto max-w-screen-xl text-center">
                <Link to="/" className="flex justify-center items-center text-2xl font-semibold text-teal-700">
                    Build With Innovation
                </Link>
                <ul className="flex flex-wrap justify-center items-center my-6 text-teal-500">
                    <li>
                        <Link to="/" className="mr-4 hover:underline md:mr-6 ">About</Link>
                    </li>
                    <li>
                        <Link to="/" className="mr-4 hover:underline md:mr-6">Premium</Link>
                    </li>
                    <li>
                        <Link to="/" className="mr-4 hover:underline md:mr-6 ">Campaigns</Link>
                    </li>
                    <li>
                        <Link to="/" className="mr-4 hover:underline md:mr-6">Blog</Link>
                    </li>
                    <li>
                        <Link to="/" className="mr-4 hover:underline md:mr-6">Affiliate Program</Link>
                    </li>
                    <li>
                        <Link to="/" className="mr-4 hover:underline md:mr-6">FAQs</Link>
                    </li>
                    <li>
                        <Link to="/" className="mr-4 hover:underline md:mr-6">Contact</Link>
                    </li>
                </ul>
                <span className="text-sm text-teal-300 sm:text-center ">© 2024-2025 <Link to="#" className="hover:underline">Innovation™</Link>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer