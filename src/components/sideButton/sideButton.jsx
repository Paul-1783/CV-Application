 
export function SideMenuButton({clickedBtnIndex, info, handleClick, newClassName}) {
     return(
         <button className={"sideMenuButton " + newClassName} name={info.sectionName}  onClick={e => {
            const clickInfo = {...e, clickedBtnIndex: clickedBtnIndex }
             handleClick(clickInfo)}}>
            <img src={info.icon} alt={info.sectionName}  />
          </button>
    )
}