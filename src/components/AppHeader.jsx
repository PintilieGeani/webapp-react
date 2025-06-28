import { NavLink } from "react-router-dom";


const AppHeader = () =>{
    const headerLinks = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Movies",
      url: "/movies",
    },
  ];

    return (
        <header>
            <div className="header">
                <div className="logo">GeMovies</div>
                <ul>{headerLinks.map((curLink) => (
                <li><NavLink to={curLink.url}>{curLink.title}</NavLink></li>
            ))}</ul></div>
        </header>
    )
}

export default AppHeader