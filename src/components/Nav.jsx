const Nav = () => {
  return (
    <div className="nav">
        <div className="nav-leftside">
            <h1 className="nav-leftside__header">
                PORFOLLIO
            </h1>
        </div>
        <div className="nav-rightside">
            <ul className="nav-rightside__list"> 
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Resume</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Toggle</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Nav