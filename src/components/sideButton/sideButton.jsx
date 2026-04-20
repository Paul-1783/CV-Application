 
export function SideMenuButton({clickedBtnIndex, info, handleClick, newClassName}) {
     return(
         <button className={"sideMenuButton " + newClassName} name={info.sectionName} style={newClassName === "clicked-btn" ? {boxShadow: "none"} : {}}  onClick={e => {
            const clickInfo = {...e, clickedBtnIndex: clickedBtnIndex }
             handleClick(clickInfo)}}>
            <img src={info.icon} alt={info.sectionName}  />
          </button>
    )
}