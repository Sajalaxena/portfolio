import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Main = () => {
  return (
    
       <>
       <section className=' flex flex-col mt-2 mx-40 relative z-30 '>

      <div className="summary flex flex-row">
        <div className='mt-4'><strong>Hey! I'm</strong></div>  <Image src="/me.gif" alt="logo" width={94} height={29}    />
      </div>
     <Link href = "/"> 
     <div className='title'>Sajal Saxena</div>
     </Link>

      <p className="summary">
        I am a postgraduate from the <strong>National Institute of Technology Patna, </strong>
        graduating with a <strong>Master's</strong> in Computer Applications in
        2023.
      </p>
      <p className="summary">
        In the coding universe, I'm a software engineer juggling both <strong>front-end </strong>
        finesse and <strong>back-end </strong> brawn. "From debugging the streets of 
        Delhi to capturing the perfect shot of a serene sunrise in Chennai, I'm the <strong>tech-savvy explorer </strong>
        who solves puzzles both in code and in real life. With a knack for troubleshooting 
        and a passion for <strong>photography</strong>, I'm the adventurous <strong>problem-solver </strong> you want on your team."
      </p>
    {/* <Resume/> */}
    
    
       </section>
    </>
    
  )
}

export default Main
