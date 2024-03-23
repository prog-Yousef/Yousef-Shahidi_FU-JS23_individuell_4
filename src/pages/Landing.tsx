import { Link } from 'react-router-dom';
import logo from "../logos/airbeanlogo.png"
import "../abstracts/Landing.scss"

const Landing = () => {
  return (
  <Link to="/menu" className="link">
    <div className='Landing_background'>
    <div className="container">
      <div className='landing_logo_wrapper'>
      <img className="img" src={logo} alt="no picture found" />
      </div>
      <h1 className='header_Landing'>AIR BEAN</h1>
      <p className='text_Landing'>DRONEDELIVERED COFFEE</p>
        
    </div>
    </div>
    </Link>
  )
}

export default Landing