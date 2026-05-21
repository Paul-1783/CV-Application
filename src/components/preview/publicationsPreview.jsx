export function PublicationsPreview({publicationTitle, journalName, publicationDate}){
    return(
        <>
            <div>
                <span>Publication Title: </span><span>{publicationTitle}</span>
            </div>
            <div>
                <span>Journal Name: </span><span>{journalName}</span>
            </div>
            <div>
                <span>Publication Date: </span><span>{publicationDate}</span>
            </div>
        </>
    )
}