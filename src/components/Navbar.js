import logo from '../images/logo.svg';
import Pagelinks from './Pagelinks';
import Sociallink from './Sociallink';
import { socialLinks } from "../data";

const Navbar = () => {
   return (
      <nav className="navbar">
         <div className="nav-center">
            <div className="nav-header">
               <img src={logo} className="nav-logo" alt="backroads" />
               <button type="button" className="nav-toggle" id="nav-toggle">
                  <i className="fas fa-bars"></i>
               </button>
            </div>

            <Pagelinks parentClass='nav-links' itemClass='nav-link' />

            <ul className='nav-icons'>
               {socialLinks.map((socialLink) => {
                  return <Sociallink key={socialLink.id} {...socialLink} itemClass='nav-icon'/>
               })}
            </ul>
         </div>
      </nav>
   );
};
export default Navbar