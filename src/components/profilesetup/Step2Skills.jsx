import React, { useState } from 'react'

function Step2Skills({data,onUpdate}) {

    const skilldata = [
        {
            id: 1,
            name: "Technology",
            logo:"bi bi-code-slash",
            subskill: ["Web Development", "Mobile Development", "Data Science", "UI/UX Design", "Devops", "Cybersecuirity"]
        },
        {
            id: 2,
            logo:"bi bi-palette",
            name: "Design",
            subskill: ["Graphic Design",
                 "UI/UX",
                "3D Modeling",
                "Animation",
                "Illustration",
                "Branding"]
        },
        {
            id: 3,
             logo:"bi bi-music-note-beamed ",
            name: 'Creative',
            subskill: ["Music Production",
                "Photography",
                "Video Editing",
                "Writing",
                "Drawing",
                "Painting"]
        },
        {
            id: 4,
              logo:"bi bi-graph-up",
            name: 'Business',
            subskill: ["Digital Marketing",
                "Sales",
                "Project Management",
                "Public Speaking",
                "Leadership",
                "Entrepreneurship"]
        },
        {
            id: 5,
              logo:"bi bi-globe",
            name: "Language",
            subskill: ["Spanish",
                "French",
                "German",
                "Mandarin",
                "Japanese",
                "Italian"]
        },
        {
            id: 6,
            logo:"bi bi-heart-fill",
            name: "Lifestyle",
            subskill: ["Cooking",
                "Fitness",
                "Yoga",
                "Meditation",
                "Gardening",
                "Fashion"]
        }
    ]
    //    slected skill store ---------------------
    const [slectedSkill,setSlectedSkill]=useState(skilldata[0]);
          
            //  handle skill click ---------------------------
            const handleskillclick =(skills)=>{
                setSlectedSkill(skills);
            };
// ----------------------------------------------------------------------------------------------

            // to store selected sub skills ---------------------

            
            const [selectedSubskills , setSlectedSubSkill]=useState(data?.teach || []);
            //    handle subclick =============
                const handleSubSkillClick = (sub)=>{
                   
                    // already selected then remove 
                            if(selectedSubskills.includes(sub)){
                                setSlectedSubSkill(selectedSubskills.filter((item)=>item !== sub)
                                
                            );
                        }
                            else{
                                // not selected then add --
                                setSlectedSubSkill([...selectedSubskills, sub]);
                                
                                onUpdate({teach:selectedSubskills});
                            };


                }
                // ------------------------------------------------------------------------------------------
              

    return (
        <div className='flex flex-col bg-[white] px-4 py-5 items-center md:min-w-150 sm:min-w-100  rounded-2xl shadow-xl max-w-[600px] md:min-w-150 sm:min-w-100'>
            <h5>What Can You Teach?</h5>
            <p className='text-[13px] text-center'>Select skills you're comfortable teaching others</p>
       
       {/* slected skills appears here /========================= */}
             
            {selectedSubskills.length > 0 && (
                <div className='w-full mt-4'>
                    <p className='text-sm font-semibold'>Your Teaching Skills ({selectedSubskills.length})</p>
                    <div className='flex flex-wrap gap-2 mt-2'>
                        {selectedSubskills.map((item,index)=>(
                            <div
                            key={index}
                            className='bg-blue-500 text-white px-3 py-1 rounded-full text-[10px]'
                            >
                                    {item}
                            </div>
                        ))}
                    </div>
                </div>
            )}



                {/* ----------------------------------------------------------------------- */}

            {/* skills grid wrapper ---------------------------    */}
            <div>
                <p className='text-[10px] font-bold'>Browse Skills by Category</p>

                {/* skill grid -------------------------------- */}
                <div className='grid md:grid-cols-3 sm:grid-cols-2 md:grid-rows-2 gap-2 grid-cols-2 py-1'>
                          
                          {/* skill Category maping  */}

                  {skilldata.map((skills)=>(
                      <div key={skills.id} onClick={()=>handleskillclick(skills)}
                       className={`flex flex-col items-center  md:px-3 px-5 py-2 justify-center rounded-3xl h-[70px] hover:shadow-[inset_0_1px_5px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-pointer
                       ${slectedSkill?.id === skills.id ? 
                        "bg-blue-100 border-blue-800 border-2" :"border"
                       }
                       `}>
                        <i className={`${skills.logo} text-2xl transition-all duration-300
                          ${slectedSkill?.id === skills.id ? "text-blue-800" :"text-black"}
                        `}></i>
                        <span className='text-[10px]'>{skills.name}</span>
                       

                    </div>
                  ))}
                </div>
            {/* subskill grid wrapper-------------------- */}
               
                 <div className="mt-4 w-full ">
                   {slectedSkill && (
                <>
                   <p>{slectedSkill.name}</p>
                    <div className="flex flex-wrap   gap-[8px] mt-2">
                       {slectedSkill.subskill.map((sub,index)=>(
                        <div key={index} onClick={()=> handleSubSkillClick(sub)}

                         className={` border text-[10px] text-center py-1 px-1 rounded-[4px] w-[120px] cursor-pointer hover:drop-shadow-sm duration-300 md:hover:scale-[1.03] ${
                            selectedSubskills.includes(sub)? "bg-blue-700 text-white":"border bg-white"
                         }`}>{sub}</div>
                        
                       ))}
                    </div>
                </>
                   )}
                 </div>
            </div>




        </div>
    )
}

export default Step2Skills