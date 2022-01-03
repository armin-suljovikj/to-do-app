import React from 'react'
import './../CSS/List.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move'

function List(props) {

    const items = props.items;
    const listItems = items.map(item => {
        return <div className="list" key={item.id}>
            <p>{item.text}
                <span>
                    <FontAwesomeIcon onClick={() => props.deleteItem(item.id)} className="faicons" icon='trash'></FontAwesomeIcon>
                </span>
            </p>
        </div>
    })

    return (
        <FlipMove duration={500} easing="ease-in-out">
            {listItems}
        </FlipMove>
    )
}

export default List
