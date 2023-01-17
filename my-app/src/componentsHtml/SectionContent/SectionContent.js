import './styles.css'
import { FirstContent } from './FirstContent/FirstContent'
import { SecondContent } from './SecondContent/SecondContent'
export const SectionContent = () =>{
    return(
        <section class='SectionContent'>
            <FirstContent /><SecondContent />
        </section>
      
    )
}