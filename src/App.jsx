import { useState, useEffect } from 'react'


const App = () => {
  const [data, setData] = useState([])
  const urlApiStore = 'http://localhost:8080/apistore'

  const fetchData = async () => {
    try {
      const response = await fetch(urlApiStore)
      const resData = await response.json()
      setData(resData)
      
    } catch (error) {
      console.log(error)
      
    }
  }
  
  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <>
    {console.log(data)}
    </>
  )
}


export default App;
