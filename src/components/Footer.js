import Pagelinks from "./Pagelinks";
import Sociallink from "./Sociallink";
import { socialLinks } from "../data";

const Footer = () => {
   return (
      <footer className="section footer">
         <Pagelinks parentClass='footer-links' itemClass='footer-link' />

         <ul className='footer-icons'>
            {socialLinks.map((socialLink) => {
               return <Sociallink key={socialLink.id} {...socialLink} itemClass='footer-icon'/>
            })}
         </ul>

         <p className="copyright">
            copyright &copy; Backroads travel tours company
            <span id="date">{new Date().getFullYear()}</span> all rights reserved
         </p>
      </footer>
   )
}
export default Footer