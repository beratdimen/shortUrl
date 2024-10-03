import "../header/header.css";

export default function Header() {
  return (
    <div className="headerContainer">
      <h1>LOGO</h1>
      <ul>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>

      <div className="btnGroups">
        <button>Login</button>
        <button className="sign">Sign Up</button>
      </div>
    </div>
  );
}
