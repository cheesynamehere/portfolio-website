"use client"

import React from 'react'
import { useState, useEffect } from 'react'
import Webring from './components/Webring'
import { motion } from "motion/react"
import { Carousel } from "./components/Carousel"


// import Image from "next/image";
// framer motion
// react animated

export default function Home() {

  const [subtitle, setSubtitle] = useState("");
  const hobbyList = ["Computer Engineer", "Student Leader", "Manga Reader", "Gamer", "SOCC Liaison"];
  let index = 0;

  const bgList = ["/assets/samuraichamploo_op.mp4", "/assets/jojo_op.mp4", "/assets/mob_op.mp4", "/assets/onepiece_op.mp4"];
  const [vidBackground, setVidBackground] = useState(bgList[Math.floor(Math.random() * bgList.length)]);

  function changeBg() {
    const nextBg = bgList[Math.floor(Math.random() * bgList.length)]

    if (nextBg == vidBackground)
      return changeBg()

    setVidBackground(nextBg);

    console.log(vidBackground);
  }

  function changeSubtitle() {
    setSubtitle(hobbyList[index % hobbyList.length]);

    index++;

    setTimeout(changeSubtitle, 1000);
  }

  useEffect(() => {
    changeSubtitle();
  }, [])

  return (

    <div>

      <div className="flex flex-col justify-center items-center h-screen text-black">
        <p className="text-[110px] font-semibold pb-1"> Jarred Ramos </p>
        <p className="text-3xl pb-5">{subtitle}</p>
        <button className="py-4 px-4 bg-[#E5D0AC] hover:bg-[#ad836a] hover:scale-110 rounded-xl transition-all" onClick={changeBg}>
          Change the Opening!
        </button>
        <video className="fixed -z-10 opacity-5 w-screen h-screen object-cover" key={vidBackground} preload="metadata" playsInline autoPlay muted loop disablePictureInPicture>
          <source src={vidBackground} type="video/mp4"></source>
        </video>
      </div>
      <div className="h-screen">
        <Carousel> </Carousel>
      </div>

      <Webring url="https://raw.githubusercontent.com/Google-Developer-Groups-Skyline-College/clubwebring/refs/heads/master/webring.json" title="" current="jarred"></Webring>
    </div>

  )
}