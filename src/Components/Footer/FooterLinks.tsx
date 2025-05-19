import Link from 'next/link'
import React from 'react'

const FooterLinks = () => {
  return (
 <div className="footerList-container">
      <h4>Links</h4>
      <div className="footerList-content">
        <p>
          <Link href={"/"}>Home</Link>
        </p>
      </div>
      <div className="footerList-content">
        <p>
          <Link href={"/services"}>Services</Link>
        </p>
      </div>
      <div className="footerList-content">
        <p>
          <Link href={"/about-us"}>About Us</Link>
        </p>
      </div>
      <div className="footerList-content">
        <p>
          <Link href={"/contact-us"}>Contact Us</Link>
        </p>
      </div>
      <div className="footerList-content">
        <p>
          <Link href={"/blog"}>Blog</Link>
        </p>
      </div>
    </div>
  )
}

export default FooterLinks
