
import { NavContent } from './TopNav/TopNav.js'
import { LeftSection } from './HeaderSection/LeftSection.js';
import { RigthSection } from './HeaderSection/RigthSection.js';

import './style.css';

export const HeaderContent = () =>{
    return(
        <header class='HeaderContent'>
        <NavContent/>
        <section class='PostHeader'>
        <LeftSection/><RigthSection/>
        </section>
        </header>
    )
}