import { Link } from "react-router-dom"
import './Header.scss'

type Props = {}

const Header = (props: Props) => {
  return (
   <nav>
    <div className="contianer">
    <ul className="nav-weapper">
      <li>
        <Link to='/' >Home</Link>
      </li>
      <li>
        <Link to='/' >About</Link>
      </li>
      <li>
        <Link to='/' >Contact</Link>
      </li>
    </ul>
    </div>
   </nav>
  )
}

export default Header