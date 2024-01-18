const Language = (props) => {
    const { name, votes } = props.languageInfo;
    return (
        <>
        <span>{votes}</span>
        <span>{name}</span>
        </>
    )

}

export default Language;