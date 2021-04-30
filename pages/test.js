import { check_login, set_login } from "../components/variables/user";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { useState } from "react";

export default function test() {
  const [cekLogin, setCekLogin] = useState();

  const handleLogin = () => {
    set_login(true);
    setCekLogin(check_login());
  };
  const handleLogout = () => {
    set_login(false);
    setCekLogin(check_login());
  };
  return (
    <>
      <h1>{ cekLogin ? "Anda Login" : "Anda Belum Login" }</h1>
      <div className="mt-4">
        <button className="btn btn-success" onClick={handleLogin}>
          Login
        </button>
        <button className="btn btn-danger ml-3" onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
}
