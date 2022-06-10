import { Link } from "react-router-dom";

export default function Header({ handleRefreshApp }) {
  let handleLogOut = () => {
    localStorage.removeItem("userTest");
    handleRefreshApp();
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto ">
            <Link to={"/"}>
              <li class="nav-item cursor-pointer mx-4">Home</li>
            </Link>
            <Link to={"/list-product"}>
              <li class="nav-item cursor-pointer mx-4">Product List</li>
            </Link>
          </ul>
          <Link to={"/login"}>
            <span class="nav-item cursor-pointer mx-4">Login</span>
          </Link>
          <Link to={"/login"} onClick={handleLogOut}>
            <span class="nav-item cursor-pointer mx-4">Logout</span>
          </Link>
          <Link to={"/sign-up"}>
            <span class="nav-item cursor-pointer mx-4">Sign up</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
