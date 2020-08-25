import React from 'react'

import { FetchData } from '../Utils/getUserData'

import UserNames from '../Components/UserNames'

function Teste({ data }) {
    return (
        <div>         
            <UserNames data={data}/>
        </div>
    )
}

export async function getServerSideProps() {
    const data = await FetchData()    
    return {
        props: { data }
    }
}

export default Teste
