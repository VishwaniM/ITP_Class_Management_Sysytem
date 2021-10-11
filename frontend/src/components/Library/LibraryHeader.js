import React from "react";
import './header.css'

function LibraryHeader() { 
    return (  <div>
      <center>
      <ul class="menu-bar">
          <li><a className="nav-item nav-link" href="/dd" ><font color="black"> Home</font></a></li>
          <li><a className="nav-item nav-link" href="/listUL" ><font color="black">SEARCH BOOK</font></a></li>
          <li><a className="nav-item nav-link" href="/add1" ><font color="black">ADD BOOKS</font></a></li>
          <li><a className="nav-item nav-link" href="/listL"><font color="black">EDIT BOOKS</font></a></li>
          <li><a className="nav-item nav-link" href="/add2"><font color="black">ADD BORROWERS</font></a></li>
          <li><a className="nav-item nav-link" href="/listB"><font color="black">EDIT BORROWERS</font></a></li>
          
      </ul>
      </center>
  </div>
    )
} 

export default LibraryHeader;