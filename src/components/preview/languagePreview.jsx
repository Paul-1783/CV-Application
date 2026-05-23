export function LanguagePreview({languageName, languageLevel}) {
    return (
        <>
            <div className="form-preview">
                <div>
                    <span>Language: </span><span>{languageName}</span>
                </div>
                <div>
                    <span>Knowledge Level: </span><span>{languageLevel}</span>
                </div>
            </div>
         </>
    )
}