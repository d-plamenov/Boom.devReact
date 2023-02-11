import { useState } from "react";

const Document = ({ title, content }) => {
    const [complete, setComplete] = useState(false)
    const handleScroll = (e) => {
        const div = e.target;
        if (div.scrollTop >= (div.scrollHeight - div.offsetHeight)) {
            setComplete(true)
        }
    }
    return (
        <>
            <h1 className="title">{title}</h1>
            <div className="content" onScroll={handleScroll} style={{
                "overflow": "scroll",
                "width": "550px",
                "height": "500px"
            }}>{content}</div>
            <button disabled={!complete}>I Agree</button>
        </>
    )
}

export default Document;