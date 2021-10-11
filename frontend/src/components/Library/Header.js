import React from "react";

function Header(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/dd">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/listUL">SEARCH BOOK </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/add1">ADD BOOKS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/listL">EDIT BOOKS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/add2">ADD BORROWERS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/listB">EDIT BORROWERS</a>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>
</div>
    )
}
export default Header;