import './navbar.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../../authentication'
export default function Navbar(){

  const auth = useAuth()
    return (
      <>
         <nav>
          <div className='navbar'>
          <div className='navbar-fdiv'>
            <h3 className='heading'>Easy Resume</h3>
            
              <ul className='navbar-list'>
                <div className='navbar-list-item'>
                  <li>
                    <Link to='/displaytemplates'>templates</Link>
                  </li>
                </div>
                <div className='navbar-list-item'>
                  <li>
                    <Link to='/resumes'>Resumes</Link>
                  </li>
                </div>
              </ul>
            </div>
            <div className='navbar-list-item'>
              <button  onClick={auth.logOut}>logout</button>
              
            </div>
          </div>
         </nav>
      </>
    )
}