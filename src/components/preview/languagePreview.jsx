export function LanguagePreview({languageName, languageLevel}) {
    return (
        <>
            <div className="form-preview">
                <div>
                    <span>languageName: </span><span>{languageName}</span>
                </div>
                <div>
                    <span>Language Level: </span><span>{languageLevel}</span>
                </div>
            </div>
         </>
    )
}