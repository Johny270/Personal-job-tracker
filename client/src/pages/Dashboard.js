import { useEffect } from "react"

const Dashboard = () => {
  const fetchData = async () => {
    try {
      const response = await fetch('/data.json')
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>Dashboard Page</div>
  )
}

export default Dashboard