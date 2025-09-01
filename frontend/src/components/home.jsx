import { Link } from "react-router-dom"

function Home() {
  return <div className="bg-orange-600 h-screen">

    <div className="text-center text-white px-10 py-20 space-y-8">
        <h1 className="text-4xl font-bold">Welcome Click The Button To receive your message</h1>
        <p className="w-[60%] ml-56">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis inventore voluptates nemo cum tempora officia maxime culpa sequi. Saepe, odio! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia officia pariatur magnam cumque doloribus deserunt sint ipsa ipsam dolorem veritatis?</p>
        <Link to={"/addinfo"}><button className="bg-white text-2xl font-bold px-8 py-2 rounded-lg text-black mt-8">Click Here</button></Link>
    </div>
  </div>
  
}
export default Home