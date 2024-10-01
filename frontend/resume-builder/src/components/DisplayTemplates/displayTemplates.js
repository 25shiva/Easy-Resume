import './displayTemplates.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../../authentication'
import { useState,useEffect } from 'react'

export default function DisplayTemplates() {

    const navigate = useNavigate()
    const auth = useAuth()
    const templates = [
        { name: 'Stockholm', url: 'https://res.cloudinary.com/de9q0s6tt/image/upload/v1655571130/stockholm_bzrpo0.png?w=1080&q=75' },
        { name: 'Amsterdam', url: 'https://res.cloudinary.com/dzn2bzqmt/image/upload/v1706173140/amsterdam_fbqlrr.png?w=1080&q=75' },
        { name: 'Assymmetric', url: 'https://res.cloudinary.com/dzn2bzqmt/image/upload/v1706175487/Screenshot_2024-01-25_150748_gmkykt.png?w=1080&q=75' },
        { name: 'Berlin', url: 'https://res.cloudinary.com/dzn2bzqmt/image/upload/v1706173142/berlin_wyzvs0.png?w=1080&q=75' },
        { name: 'Blue', url: 'https://res.cloudinary.com/dzn2bzqmt/image/upload/v1706176915/Screenshot_2024-01-25_153134_px0qz4.png?w=1080&q=75' }
    ]

    const [resumeName, setResumeName] = useState('')
    const [selectedTemplate, setSelectedTemplate] = useState(null)
    const [showCreate, setShowCreate] = useState(false)

    const generateResume = async () => {
        try {
            const response = await axios.post("http://localhost:2523/formdata/",
                JSON.stringify({ name: resumeName, email: auth.email, type: selectedTemplate }),
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            const { id } = response.data
            navigate(`/fillresume/${id}`)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showCreate && !document.querySelector('.modal-container').contains(event.target)) {
                setShowCreate(false)
            }
        }

        if (showCreate) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [showCreate])

    return (
        <>
            {showCreate && <div className="modal-overlay" ></div>}

            <div className={`page ${showCreate ? 'fade' : ''}`}>
                <div className="page-heading">
                    <h1>Select a Template</h1>
                </div>
                <div className='template-div'>
                    <ul className="template-list">
                        {templates.map((template) => (
                            <div key={template.name} onClick={() => { setSelectedTemplate(template.name); setShowCreate(true) }}>
                                <div className="template-item">
                                    <li>
                                        <div className='template-img'>
                                            <img src={template.url} alt={template.name} />
                                        </div>
                                        <div className='template-name'>
                                            <h2>{template.name}</h2>
                                        </div>
                                    </li>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>

        
            {showCreate &&
                <div className="modal-container">
                    <div className='name'>{selectedTemplate}</div>
                    <div >
                    <input className='modal-inp' type='text'
                        placeholder='Resume name'
                        value={resumeName}
                        onChange={(e) => setResumeName(e.target.value)}
                    />
                    </div>
                    <div>
                    <button className='modal-btn' type='submit' onClick={generateResume}>Create</button>
                    </div>
                </div>
            }
        </>
    )
}
