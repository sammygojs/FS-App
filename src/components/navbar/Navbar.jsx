import React from 'react'
import Link from "next/link"

import Links from "./links/Links"

export default function Navbar() {
  return (
    <div>
        <div>Logo</div>
        <div>
            <Links/>
            {/* <Link href="/">Homepage</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link> */}
        </div>
    </div>
  )
}
