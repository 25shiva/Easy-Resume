

export default function TemplateStockholm({formData}) {

  


  return (
    <>
    <section className="jsx-64b7b46d76bb68b2 mx-auto h-screen  py-5 w-full">
      <div id="template" className="w-a4W bg-white mx-auto h-a4H my-5 ">
        <div className="px-14 py-8">

          <div className="w-full border-b-2 border-gray-300 py-2 text-center">
            <span className="text-4xl not-italic font-bold text-gray-700">{formData  && formData.fullname}</span>
          </div>


          <div className="w-full border-gray-200 py-1 text-center mb-5">
            <div className="text-md italic font-semibold text-gray-700 flex justify-evenly">
              <div><span>{formData && formData.email}</span></div>
              <div><span>{formData && formData.phone}</span></div>
            </div>
          </div>

          {formData && formData.educations && formData.educations.length > 0 &&
            <div className="w-full">
              <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-3 bg-white text-2xl italic font-bold text-gray-700">Education</span>
                </div>
              </div>

              <ul>
                {formData.educations.map((education, index) => 
                  <li key={education.feildOfStudy}>
                    <div className="flex justify-between items-start mb-3 mt-2">
                      <div className="leading-4">
                        <h3 className="text-[13.5px] font-semibold tracking-wide">{education.institution}</h3>
                        <span className="text-[13px]">{`${education.feildOfStudy}`}·{`${education.grade}`}</span>
                      </div>
                      <span className="text-xs font-bold tracking-wide">{`${education.startyear}`}-{`${education.endyear}`}</span>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          }


          {formData && formData.projects && formData.projects.length > 0 &&
            <div className="mt-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-3 bg-white text-2xl italic font-bold text-gray-700">Projects</span>
                </div>
              </div>

              <ul>
                {formData.projects.map((project, index) => 
                  <li key={project.title}>
                    <div className="mb-2">
                      <div>
                        <div className="flex justify-between">
                          <div className="text-[15px] font-semibold">{project.title}</div>
                        </div>
                        <div className="markdown text-xs">
                          {project.summary}
                        </div>
                      </div>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          }

          {formData && formData.certificates && formData.certificates.length > 0 &&
            <div className="mt-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-3 bg-white text-2xl italic font-bold text-gray-700">Certification</span>
                </div>
              </div>


              <ul>
                {formData.certificates.map((certificate, index) => 
                  <li key={certificate.title}>
                    <div className="relative mb-2">
                      <div className="text-[15px] font-semibold">{certificate.title}, <span className="text-[12px] font-base text-gray-500">{certificate.issuer}</span></div>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          }

          {formData && formData.skills && formData.skills.length > 0 &&
            <div className="w-full">
              <div>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="px-3 bg-white text-2xl italic font-bold text-gray-700">Skills</span>
                  </div>
                </div>
                <ul>
                  
                  {
                    formData.skills.map((skill, index) => 

                      <li key={skill.name}>
                        <div className="flex justify-between items-center my-1">
                          <h4 className="text-[15px] capitalize font-semibold">{skill.name}</h4>
                          <h4 className="text-xs capitalize font-semibold">{skill.level}</h4>
                        </div>
                      </li>
                    )
                  }
                </ul>

              </div>
            </div>
          }

          {formData  && formData.languages && formData.languages.length > 0 &&
            <div className="w-full">
              <div>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="px-3 bg-white text-2xl italic font-bold text-gray-700">Languages</span>
                  </div>
                </div>

                <ul className="list-group">
                  {
                    formData.languages.map((language, index) => 
                      <li key={language.language} className="list-group-item">
                        <div className="flex justify-between items-center my-1">
                          <h4 className="text-[15px] capitalize font-semibold">{language.language}</h4>
                        </div>
                      </li>

                    )
                  }
                </ul>

              </div>
            </div>
          }


        </div>
      </div>
    </section>
    </>
  

  )
}