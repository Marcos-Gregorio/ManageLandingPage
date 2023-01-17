import './style.css'

export const CardsItem = (props) =>{
    return(
        <div class ='CardsItem'>
            <div id={props.AvatarImg} class = 'ImgCards'>
           
            </div>
            <div class='CardsTexts'>

            <h3 class='TextTitle'>{props.Name}</h3>
            <p>{props.DescriptionCards}</p> 

            </div>
         
            
        </div>
    )
}