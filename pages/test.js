import { check_login, set_login } from "../components/variables/user";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { useState } from "react";
import { fetch_data } from "../components/variables/api";

export default function test() {
  let json = {
    "action": "list",
    "table": "tx_hdr_user"
  }
  const [username, setUsername] = useState();
  fetch_data("POST", "http://localhost/bootcam-api/list", json).then(function (result) {
    console.log(result);
  });

  return (
    <>
      testing
    </>
  );
}
