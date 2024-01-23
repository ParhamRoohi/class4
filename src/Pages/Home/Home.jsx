import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Home() {
  const [tweets, setTweets] = useState([]);

  const loadTweets = async () => {
    const data = await fetch("http://localhost:3000/tweets").then((response) =>
      response.json()
    );
    setTweets(data);
  };

  useEffect(() => {
    loadTweets();
  }, []);

  return <div>
      <Link to="/tweets">
        {/* <button style={{background: "plum"}}>
        Tweets
        </button>  */}
        Tweets
      </Link>
      <br />
      <Link to="/users">
        {/* <button style={{background: "lightblue"}}>Users
        </button>  */}
        Users
      </Link>
      <div style={{ display: "flex", flexDirection: "column", background: 'red' }}>
        {tweets.map((t) => (
          <div key={t.id}>
            {t.text} {t.createdBy}
          </div>
        ))}
      </div>
    </div>
  
}
