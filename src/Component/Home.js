import { Link } from "react-router-dom"
import Comp1 from "./Comp1"


export default function Home(){
    return (
        <>
            <h1>Welcome to the Home Page</h1>
            <Link to="/Comp1">Comp1</Link>
            <Link to="/Comp2">Comp2</Link>
            
        </>
    )
}