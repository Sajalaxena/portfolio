import Link from "next/link"
import Image from "next/image"
import ChatBot from "./chatbot"

const Footer = () => {
  return (
   <div className="flex flexBetween mx-40">

    <div className="flex gap-4  mt-3 relative z-30 py-5">
             <Link href="https://github.com/Sajalaxena">
        <Image src="/github-d.png" alt="logo" width={19} height={19} />
      </Link>
      <Link href="https://www.linkedin.com/in/sajal--saxena/">
        <Image src="/linkedin-d.png" alt="logo" width={19} height={19} />
      </Link>
    </div>
     <div className="float-right ">
               <ChatBot />
     </div>

       </div>
  )
}

export default Footer
