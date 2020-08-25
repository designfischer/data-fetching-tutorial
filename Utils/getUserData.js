import axios from 'axios'

export async function FetchData() {
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users') 
        console.log(data)       
        return data
    } catch(err) {
        console.log(err)
    }    
}