import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
    <div className="flex gap-4 mx-40 mt-6 relative z-30 py-5">
             <Link href="https://github.com/Sajalaxena">
        <Image src="/github-d.png" alt="logo" width={19} height={19} />
      </Link>
      <Link href="https://www.linkedin.com/in/sajal--saxena/">
        <Image src="/linkedin-d.png" alt="logo" width={19} height={19} />
      </Link>
    </div>
   
    </>
    
    
  )
}

export default Footer
