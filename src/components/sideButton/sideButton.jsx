 
export function SideMenuButton({info}) {

    console.log("info ", info)
    return(
         <button className="sideMenuButton" name={info.sectionName}>
            <img src={info.icon} alt={info.sectionName} />
          </button>
    )
}