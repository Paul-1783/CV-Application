 
export function SideMenuButton({clickedBtnIndex, info, handleClick}) {


     return(
         <button className="sideMenuButton" name={info.sectionName}  onClick={e => {
            const clickInfo = {...e, clickedBtnIndex: clickedBtnIndex}
             handleClick(clickInfo)}}>
            <img src={info.icon} alt={info.sectionName}  />
          </button>
    )
}