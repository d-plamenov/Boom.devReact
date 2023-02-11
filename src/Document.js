import { useState } from "react";

const Document = ({ title, content }) => {
    const [complete, setComplete] = useState(false);

    const handleScroll = (e) => {
        const div = e.target;
        if (div.scrollTop >= div.scrollHeight - div.offsetHeight) {
          setComplete(true);
        }
    }
    
    return (
        <section>
            <h1 className="title">{title}</h1>
            <div className="content" style={{

               width: "400px",height: "300px", overflow: "auto"
    
            }} onScroll={handleScroll}>{content}</div>
            <button disabled={ !complete } >I Agree</button>
        </section>
    )
}

export default Document;