const Document = ({ title, content, onScroll }) => {
    return (
        <>
            <h1 className="title">{title}</h1>
            <div className="content" onScroll={onScroll} style={{
                "overflow": "scroll",
                "width": "550px",
                "height": "400px"
            }}>{content}</div>
        </>
    )
}

export default Document;