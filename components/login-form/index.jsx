import { login, signup } from "@/app/login/action";
import "./loginSignUp.css";
import Link from "next/link";

export default function LoginSignUpForm({ page }) {
  return (
    <div className="loginContainer">
      {page == "login" ? <h2>Login Form</h2> : <h2>Signup Form</h2>}
      <form>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Email Address"
        />
        <input
          id="password"
          name="password"
          type="password"
          required
          placeholder="Password"
        />
        {page == "login" ? (
          <button formAction={login}>Log in</button>
        ) : (
          <button formAction={signup}>Sign up</button>
        )}
      </form>
      {page == "login" ? (
        <div className="signupbtnContainer">
          <p>Not a member?</p>
          <Link href="/sign-up" className="signupbtn">
            Signup Now
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
