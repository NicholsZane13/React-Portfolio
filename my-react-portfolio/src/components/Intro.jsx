import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
        <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Zane Nichols</h1>
         <p className="text-base md:text-xl mb-3 font-medium">MERN Stack Web Developer</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
            I'm a Junior MERN Stack Web Developer and Co-Owner of All Caked Up, LLC.
            The programming world is a fresh, new playground that I have been immersed in and
            enjoyed learning to build exciting projects on! The next step of the journey is to join a strong team who
            meshes well together and wants to conquer the world of coding together.
            <br />
            Here is my Github, if you would like to check out more of my projects outside of the highlighted ones in this project.{' '}
            <a
               href="https://github.com/NicholsZane13"
               target="_blank"
               className="text-red-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
               rel="noreferrer noopener"
            >
               Github Profile!
            </a>{' '}
         </p>
        </div>
    )
}

export default Intro;