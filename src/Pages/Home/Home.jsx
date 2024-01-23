import {Link} from "react-router-dom";
export default function Home(){

    return <div>
        <Link to="/tweets">
        <button style={{background: "plum"}}>Tweets
        </button> 
        </Link>
        <br />
        <Link to="/users">
        <button style={{background: "lightblue"}}>Users
        </button> 
        </Link>
    </div>
}