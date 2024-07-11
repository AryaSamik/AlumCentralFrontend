import Foot from "./Foot";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function NotFound(){
    const navigate = useNavigate();
    return (
        <>
            <Navbar/>
            <div style={{
                height:'20rem',
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center',
            }}>
                <h1 style={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    fontSize:'2rem',
                    color:'red',
                }}>
                    <span>Page Does Not Exist</span>
                </h1>
                <button style={{
                    padding:'0.3rem',
                    borderRadius:'1rem'
                }} onClick={()=>{
                    navigate('/');
                }}>Back to Home</button>
            </div>

            <Foot/>
        </>
    )
}