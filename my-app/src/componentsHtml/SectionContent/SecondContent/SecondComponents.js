import './style.css'
export const SecondComponents = (props) =>{
    return(
        <div>
            <div class='TitleContent'><span class='spanTitle'>{props.Number}</span><h5 class='ColorTag'>{props.Title}</h5></div>
            <p class='ParagraphContent'>
                {props.DescriptionContent}
            </p>
        </div>
    )

}