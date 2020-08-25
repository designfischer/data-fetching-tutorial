import React from 'react'

function UserNames({ data }) {
    return (
        <>
            <h1>Usuários</h1>
            {data && data.map(item => <h2 key={item.id}>{item.name}</h2>)}
        </>
    )
}

export default UserNames
