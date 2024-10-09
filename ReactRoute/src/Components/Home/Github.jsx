import { data } from 'autoprefixer'
import React, { useEffect ,useState} from 'react'
// import { useLoaderData } from 'react-router-dom'

function Github() {
    // const data = useLoaderData()
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://github.com/users/mohsinkkc')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)})
    },[])
  return (
    <div className='text-center m-4 text-white bg-gray-600 p-4 text-3xl'>Github Folllowers : {data.followers} 
    {/* <img src={data.avatar_url} alt="git Piture" width={300} /> */}
    </div>
    
  )
}

export default Github

// export const Githubloader = async() => {
//     const response = await fetch("https://github.com/users/mohsinkkc")
//     return response.json()
// }