"use client";

import Link from "next/link";
import "./header.css";
import Cookies from "js-cookie";

export default function Header() {
  const userCookie = Cookies.get("user");
  const user = userCookie ? JSON.parse(userCookie) : null;

  return (
    <div className="headerContainer">
      <h1>LOGO</h1>
      <ul>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
      {user ? (
        user?.email
      ) : (
        <div className="btnGroups">
          <Link href={"/login"}>Login</Link>
          <Link href={"/sign-up"} className="sign">
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
}
