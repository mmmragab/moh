import { Link } from "react-router-dom"
import Comp3 from "./Comp3"


export default function Home(){
    return (
        <>
            <h1>Welcome to the Home Page</h1>
            <Link to="/Comp1">Comp1</Link>
            <Link to="/Comp2">Comp2</Link>
            <Comp3/>
            
        </>
    )
}