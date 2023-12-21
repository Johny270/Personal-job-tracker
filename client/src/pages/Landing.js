import { Logo } from '../components'
import main from '../assets/images/main-alternative.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>job <span>tracking</span> app</h1>
          <p>
            I'm baby brunch hoodie viral single-origin coffee, Brooklyn lomo you probably haven't heard of them shabby chic same 8-bit cronut literally. Tacos mumblecore scenester, retro health goth single-origin coffee readymade chicharrones copper mug irony neutral milk hotel gorpcore.
          </p>
          <Link to='/register' className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing