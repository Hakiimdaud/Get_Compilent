import axios from "axios"
import { useState } from "react"
import { Link, useNavigate} from "react-router-dom"
import swal from "sweetalert2"


function AddInfo() {

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [message,setMessage]=useState("")


    const navigate = useNavigate()
    const handLePostData = (e) => {
        e.preventDefault()
        axios.post("http://localhost:9000/create/userinfo",{
            "name":name,
            "email":email,
            "message":message
        }).then(() => {
            swal.fire({
                icon: "success",
                title: "success",
                text: "mahadsanid wuu Aragney Cabashadaada ",
                confirmButtonText: "ok"
            })
            navigate("/dash")
        })
        
    }




    return <div className="flex justify-center items-center h-screen bg-orange-600">
        <form className="bg-orange-400 w-[45%] h-96 rounded-2xl p-10 pl-40">
            <input value={name} onChange={(e)=> setName(e.target.value)} className="w-80 h-10 rounded-lg text-2xl pl-3" type="text" placeholder="enter name" /> <br /> <br />
            <input value={email} onChange={(e)=> setEmail(e.target.value)}className="w-80 h-10 rounded-lg text-2xl pl-3" type="text" placeholder="enter email" /><br /> <br />
            <input value={message} onChange={(e)=> setMessage(e.target.value)}className="w-full h-[10vh] rounded-lg text-2xl pl-3" type="text" placeholder="enter the Message " /><br /> <br />
            <Link to={"/dash"}><button onClick={handLePostData} className="bg-white px-12 py-2 rounded-lg my-6 text-black">send</button></Link>

        </form>
    </div>
    
}
export default AddInfo