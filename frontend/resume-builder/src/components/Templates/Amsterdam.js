export default function TemplateAmsterdam({ formData }) {

    return (
        <>
            <section className="jsx-64b7b46d76bb68b2 mx-auto h-screen   w-full">
                <div id="template" className="jsx-2314366192 w-a4W bg-white mx-auto h-a4H my-5 relative">
                    <div className="jsx-2314366192 absolute left-44 top-5 border-[3px] border-gray-500 h-40 w-96 bg-white text-center">
                        <h1 className="jsx-2314366192 mt-6 font-extrabold text-[24px] capitalize px-1 tracking-[3px]">
                            {formData && formData.fullname}
                        </h1>
                        <h1 className="jsx-2314366192 mt-3"></h1>
                    </div>


                    <div className="jsx-2314366192 flex">
                        <div className="jsx-2314366192 w-[40%] h-[296mm] bg-gray-200">
                            <div className="jsx-2314366192 mt-52 mx-10 flex flex-col">

                                <div className="jsx-2314366192">
                                    <h4 className="jsx-2314366192 font-bold tracking-[2px] text-[16px] heading">Contacts</h4>
                                    <hr className="jsx-2314366192 w-[100%] h-1 bg-black my-2" />
                                    <div className="jsx-2314366192 text-[11px]">
                                        <li className="jsx-2314366192 font-semibold my-2">{formData && formData.email}</li>
                                        <li className="jsx-2314366192 font-semibold">{formData && formData.phone}</li>
                                    </div>
                                </div>


                                <h4 className="jsx-2314366192 font-bold tracking-[2px] text-[16px] mt-2 heading">Education</h4>
                                <hr className="jsx-2314366192 w-[100%] h-1 bg-black my-1" />
                                <div className="jsx-2314366192 flex flex-col mt-2 text-[12px]">
                                    {formData.educations && formData.educations.length > 0 &&
                                        formData.educations.map(education => {
                                            return (
                                                <>
                                                    <div className="jsx-2314366192 flex justify-between">
                                                        <li className="jsx-2314366192 text-black font-semibold">{education.institution}</li>
                                                    </div>
                                                    <div className="jsx-2314366192 font-semibold">
                                                        <div className="jsx-2314366192 text-[10px]">{education.startyear}-{education.endyear}</div>
                                                        <div className="jsx-2314366192">{education.degree}</div>
                                                    </div>
                                                    <span className="jsx-2314366192">{education.feildOfStudy}</span>
                                                    <span className="jsx-2314366192">
                                                        <h1 className="jsx-2314366192">Score:{education.grade}</h1>
                                                    </span>
                                                </>
                                            )
                                        })}


                                </div>
                            </div>


                            <div className="jsx-2314366192 mx-10 flex flex-col mt-2">
                                <div className="jsx-2314366192">
                                    <h4 className="jsx-2314366192 font-bold tracking-[2px] text-[16px] heading">Skills</h4>
                                    <hr className="jsx-2314366192 w-[100%] h-1 bg-black my-1" />
                                    {formData.skills && formData.skills.length > 0 &&
                                        formData.skills.map(skill => {
                                            return (
                                                <div className="jsx-2314366192 flex justify-between mt-2 text-[12px]">
                                                    <li className="jsx-2314366192 font-semibold">{skill.name}</li>
                                                    <span className="jsx-2314366192">{skill.level}</span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>


                            <div className="jsx-2314366192 mx-10 flex flex-col mt-2">
                                <div className="jsx-2314366192">
                                    <h4 className="jsx-2314366192 font-bold tracking-[2px] text-[16px] heading">Languages</h4>
                                    <hr className="jsx-2314366192 w-[100%] h-1 bg-black my-1" />
                                    {formData.languages && formData.languages.length > 0 &&
                                        formData.languages.map(language => {
                                            return (
                                                <div className="jsx-2314366192 text-[12px] flex justify-between mt-2">
                                                    <li className="jsx-2314366192 font-semibold">{language.name}</li>
                                                </div>
                                            )
                                        })

                                    }
                                </div>
                            </div>


                            <div className="jsx-2314366192 mx-10 flex flex-col mt-2">
                                <div className="jsx-2314366192">
                                    <h4 className="jsx-2314366192 font-bold tracking-[2px] text-[16px] heading">Interests</h4>
                                    <hr className="jsx-2314366192 w-[100%] h-1 bg-black my-1" />
                                    {formData.hobbies && formData.hobbies.length > 0 &&
                                        formData.hobbies.map(hobbie => {
                                            return (
                                                <div className="jsx-2314366192 text-[12px] mt-2">
                                                    <li className="jsx-2314366192 font-semibold">{hobbie}</li>
                                                </div>
                                            )
                                        })

                                    }
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="jsx-2314366192 w-[60%] h-auto mt-52 mx-10">

                            <div className="jsx-2314366192">
                                <h2 className="jsx-2314366192 font-bold tracking-[2px] heading">Objective</h2>
                                <hr className="jsx-2314366192 w-[100%] h-1 bg-black my-1" />
                                <p className="jsx-2314366192 my-4 text-[13px] markdown text-justify">
                                    {formData.objective}
                                </p>
                            </div>


                            <div className="jsx-2314366192">
                                <h2 className="jsx-2314366192 font-bold text-[16px] mt-2 tracking-[2px] heading">Professional Experience</h2>
                                <hr className="jsx-2314366192 w-[100%] h-1 bg-black my-1" />
                                <div className="jsx-2314366192 text-[12px]">
                                    {formData.internships && formData.internships.length > 0 &&
                                        formData.internships.map(internship => {
                                            return (
                                                <div className="jsx-2314366192 flex flex-col" key={internship.company}>
                                                    <div className="jsx-2314366192 flex mt-3 justify-between">
                                                        <span className="jsx-2314366192 text-black text-[13px] font-bold">{internship.company}</span>
                                                        {/* <h1 className="jsx-2314366192">
                                                        <span className="jsx-2314366192 font-semibold text-[10px]">Sep 13, 2024 - Sep 27, 2024</span>
                                                    </h1> */}
                                                    </div>
                                                    <h1 className="jsx-2314366192 text-justify markdown">
                                                        <p>{internship.summary}</p>
                                                    </h1>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>


                            <h2 className="jsx-2314366192 font-bold tracking-[2px] text-[16px] mt-2 heading">Projects</h2>
                            <hr className="jsx-2314366192 w-[100%] h-1 bg-black my-1" />
                            <div className="jsx-2314366192 mt-1">
                                <div className="jsx-2314366192 text-[12px]">
                                    {formData.projects && formData.projects.length > 0 &&
                                        formData.projects.map(project => {
                                            return (
                                                <div className="jsx-2314366192 mt-3">
                                                    <div className="jsx-2314366192 flex justify-between">
                                                        <span className="jsx-2314366192 text-black text-[13px] font-bold">
                                                            {project.title}
                                                        </span>
                                                        {/* <h1 className="jsx-2314366192">
                                                            <span className="jsx-2314366192 text-black text-[10px] font-semibold">Feb 18, 2024 - Feb 21, 2024</span>
                                                        </h1> */}
                                                    </div>
                                                    <h1 className="jsx-2314366192 text-justify markdown">
                                                        <p>{project.summary}</p>
                                                    </h1>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>


                            <div className="jsx-2314366192">
                                <h2 className="jsx-2314366192 font-bold tracking-[2px] text-[16px] mt-2 heading">Certifications</h2>
                                <hr className="jsx-2314366192 w-[100%] h-1 bg-black my-1" />
                                <div className="jsx-2314366192 text-[12px]">
                                    {formData.certificates && formData.certificates.length > 0 &&
                                        formData.certificates.map(certification => {
                                            return (
                                                <div className="jsx-2314366192 flex flex-col">
                                                    <div className="jsx-2314366192 flex justify-between mt-2">
                                                        <p className="jsx-2314366192 text-black font-bold">{certification.title}</p>
                                                        {/* <p className="jsx-2314366192 font-semibold text-[10px]">[2023-11-01]</p> */}
                                                    </div>
                                                    <span className="jsx-2314366192 text-black font-semibold mx-4">{certification.issuer}</span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>


                            <div className="jsx-2314366192">
                                <h4 className="jsx-2314366192 font-bold tracking-[2px] text-[16px] heading">Awards</h4>
                                <hr className="jsx-2314366192 w-[100%] h-1 bg-black my-1" />
                                {formData.awards && formData.awards.length > 0 &&
                                    formData.awards.map(award => {
                                        return (
                                            <div className="jsx-2314366192 text-[12px] mt-2">
                                                <div className="jsx-2314366192 flex justify-between">
                                                    <h1 className="jsx-2314366192 font-semibold">{award.title} - {award.awarder}</h1>
                                                    {/* <h1 className="jsx-2314366192 font-bold">September 14, 2024</h1> */}
                                                </div>
                                                <h1 className="jsx-2314366192 markdown text-justify">
                                                    <p>{award.summary}</p>
                                                </h1>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}