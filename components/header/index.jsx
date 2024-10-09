import Link from "next/link";
import "./header.css";
import { LogOutIcon } from "@/helpers/icons";
import { createClient } from "@/utils/supabase/server";
import { signOut } from "@/action/auth";
import LogoutButton from "../logout-button";

export default async function Header() {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  console.log(user);

  return (
    <div className="headerContainer">
      <h1>
        <Link href="/">LOGO</Link>
      </h1>
      <ul>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
      {user ? (
        <>
          <div className="loginPage">
            <p>{user?.email}</p>
            <LogoutButton />
          </div>
        </>
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
