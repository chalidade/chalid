import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import {
  Button,
  Navbar,
  Nav,
  Form,
  FormControl,
  Popover,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import AtomImage from "../atoms/image";
import AtomText from "../atoms/text";
import { useRouter } from "next/router";

export default function nav() {
  let user;
  const router = useRouter();
  if (typeof Storage !== "undefined") {
    user = JSON.parse(localStorage.getItem("user_id"));
  }

  const handleLogout = () => {
    localStorage.removeItem("user_id");
    router.push("/signin");
  }

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );

  const popUpUser = (
    <Popover id="popover-basic" style={{ width: "200px" }}>
      <Popover.Content>
        <AtomText value={user ? user.USER_NAME : "User Name"} size="13px" weight="600" />
        <AtomText value="Logout" onClick={handleLogout} size="10px" marginTop="-10px" />
      </Popover.Content>
    </Popover>
  );

  const popover = (
    <Popover id="popover-basic" style={{ width: "250px" }}>
      <Popover.Title as="h3">Cart</Popover.Title>
      <Popover.Content>
        <table width="100%">
          <tr>
            <td width="30%">
              <AtomImage
                image={"/products/product_1.svg"}
                width="50px"
                height="50px"
                size="80%"
              />
            </td>
            <td style={{ padding: "10px" }}>
              <AtomText value="Product B" size="15px" weight="600" />
              <AtomText value="Forever Shoes" size="10px" marginTop="-10px" />
            </td>
            <td>
              <AtomImage
                image={"/beranda/icon_trash_red.svg"}
                width="20px"
                height="20px"
                size="80%"
                border="none"
                margin="-10px 0px 0px 0px"
              />
            </td>
          </tr>
        </table>
      </Popover.Content>
    </Popover>
  );

  return (
    <>
      <Navbar style={{ background: "#0086CF" }}>
        <Navbar.Brand href="#home">
          <Link href="/">
            <img src="/beranda/logo.svg" />
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link className="text-light" href="#home">
            Tren
          </Nav.Link>
          <Nav.Link className="text-light" href="#features">
            Collection
          </Nav.Link>
          <Nav.Link className="text-light" href="#features">
            Explore
          </Nav.Link>
          <Nav.Link className="text-light" href="#pricing">
            About Us
          </Nav.Link>
        </Nav>
        <Form inline>
          <Link href="/billing">
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={popover}
            >
              <img className="mr-4" src="/beranda/logo_cart.svg" />
            </OverlayTrigger>
          </Link>
          {user ? (
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={popUpUser}
            >
              <img className="mr-4" src="/beranda/logo_user.svg" />
            </OverlayTrigger>
          ) : (
            <Link href="/signin">
                <img className="mr-4" src="/beranda/logo_user.svg" />
            </Link>
          )}
        </Form>
      </Navbar>
    </>
  );
}
