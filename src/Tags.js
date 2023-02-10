export const Tags = (props) => {
    return (
        <ul className="tags">
            {props.tags.map((tag, index) => {
                return <li key={ index } className="tag">{"# " +  tag }</li>
            })}
        </ul>
    )
}