import { data } from 'autoprefixer'
import React, { useEffect ,useState} from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://github.com/users/mohsinkkc`)
        .then(response => response.json())
        .then(data => {setData(data)})
    },[])
  return (
    <div className='text-center m-4 text-white bg-gray-600 p-4 text-3xl'>Github Folllowers : {data.followers} </div>
  )
}

export default Github