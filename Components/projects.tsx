import React from 'react'
import Image from 'next/image';

const projects = ({ imageUrl, name, githubLink, liveLink }:any) => {


    
  return (
    <div className=" my-2 mx-40">
        <div className="max-w-sm max-h-64 rounded overflow-hidden shadow-lg">
      <Image src={imageUrl} alt="Project Image" className="w-full" width={400} height={250} />
      <div className="px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-xl mb-2">{name}</div>
        <div className="flex space-x-4">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <Image src="/github-d.png" alt="GitHub Logo" width={24} height={24} />
          </a>
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <Image src="/live-svgrepo-com.svg" alt="Live Logo" width={24} height={24} />
          </a>
        </div>
      </div>
    </div>
    </div>
  
  )
}

export default projects
