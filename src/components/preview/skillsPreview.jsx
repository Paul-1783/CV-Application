export function SkillsPreview({theoreticalKnowledge, programmingLanguages, framworkName}) {
    return(
        <>
             <div>
                <span>Theoretical Knowledge: </span><span>{theoreticalKnowledge}</span>
            </div>
            <div>
                <span>Programming Languages: </span><span>{programmingLanguages}</span>
            </div>
            <div>
                <span>Name of Framework: </span><span>{framworkName}</span>
            </div>    
        </>
    )
}