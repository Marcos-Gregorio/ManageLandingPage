import { SecondComponents } from "./SecondComponents"
import './style.css'

export const SecondContent = ()=>{
    return(
        <div class='SecondContent'>
            <SecondComponents
             Number = '01'
             Title ='Track company-wide progress'
             DescriptionContent = ' See how your day-to-day tasks fit into the wider vision. Go from  tracking progress at the milestone level all the way done to the  smallest of details. Never lose sight of the bigger picture again.'
             />
            
            <SecondComponents
             Number = '02'
             Title ='Advanced built-in reports'
             DescriptionContent = 'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.'
             />
            
            <SecondComponents
             Number = '03'
             Title =' Everything you need in one place'
             DescriptionContent = 'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.'
             />

             
        </div>
    )
}