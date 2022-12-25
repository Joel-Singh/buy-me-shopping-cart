import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <Link to="/store">
        <button type='button'>
          BUY ME!
        </ button>
      </Link>
    </div>
  )
}

export default Home;
