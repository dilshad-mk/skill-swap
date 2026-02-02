import  { useState } from 'react'
import Navbar from "../../components/Navbar";
import Headder from '../../components/Headder';
import How_it_works from '../../components/How_it_works';
import Skills_mentors from '../../components/Skills_mentors';


function Page1() {
  const users=[
    {
    image:"images/Sarah_Johnson.jpg",
    name:"Sarah Johnson",
    level:"Expert",
    teaching:"Web Development",
    want_to_learn:"Spanish",
    rating: 4.9
  },
    {
    image:"images/James_Taylor.jpg", 
    name:"James Taylor",
    level:"Expert",
    teaching:"Public Speaking",
    want_to_learn:"Writing",
    rating: 4.9
  },
    {
    image:"images/Michael_Chen.jpg",  
    name:"Michael Chen",
    level:"Intermediate",
    teaching:"Graphic Design",
    want_to_learn:"Photography",
    rating: 4.8
  },
    {
    image:"images/Emma_Williams.jpg",  
    name:"Emma Williams",
    level:"Expert",
    teaching:"Content Writing",
    want_to_learn:"Video Editing",
    rating: 5
  },
    {
    image:"images/David_Rodriguez.jpg",  
    name:"David Rodriguez",
    level:"Expert",
    teaching:"Digital Marketing",
    want_to_learn:"UI/UX Design",
    rating: 4.9
  },
    {
    image:"images/Lisa_Anderson.jpg",  
    name:"Lisa Anderson",
    level:"Intermediate",
    teaching:"Photography",
    want_to_learn:"Music Production",
    rating: 4.7
  }
]
  return (
    <>
      <Navbar />
      <Headder />
      <How_it_works/>
      <Skills_mentors userData={users} />

    </>
  )
}

export default Page1