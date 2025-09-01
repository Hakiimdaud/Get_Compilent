import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Dashbord() {
  const [data, setData] = useState([])

  // fetch data marka la load gareeyo
  const handLeReadData = () => {
    axios.get("http://localhost:9000/read/userinfo")
      .then((res) => {
        setData(res.data)
        console.log("Data loaded successfully")
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    handLeReadData()
  }, [])

  const handleDaleTe = (id) => {
    axios.delete(`http://localhost:9000/delete/userinfo/${id}`)
      .then(() => {
        alert("success to delete")
        handLeReadData()
      })
      .catch(err => console.error(err))
  }

  return (
    <div className="flex text-white">
      {/* sidebar */}
      <div className="bg-orange-500 w-64 h-screen px-10 py-20 space-y-6 font-bold text-2xl">
        <Link to={"/"}><div className="flex items-center">
          <i className="fa-solid fa-briefcase"></i>
          <h1 className="pl-3">Dashboard</h1>
        </div></Link>
        <div className="flex items-center cursor-pointer">
          <i className="fa-solid fa-message"></i>
          <button onClick={handLeReadData} className="pl-3">Messages</button>
        </div>
      </div>

      {/* content */}
      <div className="ml-44 p-6 grid grid-cols-3 gap-6">
        {data.length > 0 ? data.map((item) => (
            <div className="bg-orange-500 rounded-xl p-6">
              <p className="font-bold">Name: <span className="font-semibold">{item.name}</span></p>
              <p className="font-bold">Email: <span className="font-semibold">{item.email}</span></p>
              <h3 className="font-bold mt-2 text-center">Message</h3>
              <p>{item.message}</p>
              <p className="border-[1px] border-white mt-5"></p>

              <button className="text-white mt-3"onClick={() => handleDaleTe(item._id)}>
                <i className="fa-solid fa-trash"></i>
                </button>
            </div>
          ))
          :
          <h1 className="text-gray-600 text-xl">There's No data</h1>
        }
      </div>
    </div>
  )
}

export default Dashbord
