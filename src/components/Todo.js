import React from 'react'

function Todo({cars}) {
    return (
        <div className ="car">
            <p className ="carname">{cars.carname}</p>
            <p className="carnmbr">{cars.carnumber}</p>
        </div>
    )
}

export default Todo
