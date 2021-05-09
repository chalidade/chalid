import AtomText from "../components/atoms/text";
import AtomButton from "../components/atoms/button";
import { list_product } from "../components/variables/product";
import { useRouter } from "next/router";
import MoleculeProductList from "../components/molecules/product_list";
import OrganismNav from "../components/organisms/nav";
import Link from "next/link";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { fetch_data } from "../components/variables/api";
import { useState, useEffect } from "react";

let json = {
  username: "Rico test",
  password: "123",
  email: "chalid",
  address: "testing",
  phone: "085784566522",
};

export default function test() {
  const products = list_product();
  const router = useRouter();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch_data("GET", "http://localhost/bootcam-api/user", json).then(function (
      result
    ) {
      setUserData(result);
    });
  }, []);

  console.log(userData);

  return (
    <>
      <OrganismNav />
      <center>
        <div className="row container mt-5">
          <div className="col text-left">
            <AtomText value="Peduli Digital Market" size="36px" weight="bold" />
            <AtomText
              value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
              size="14px"
            />
            <div className="row mt-5">
              <div className="col-5">
                <AtomButton
                  background="#0086CF"
                  value="Browse All Products"
                  color="#FFF"
                  border="none"
                  icon="/beranda/arrow_white.svg"
                />
              </div>
              <div className="col">
                <AtomButton
                  background="#F0F0F0"
                  value="Follow This Board"
                  border="none"
                />
              </div>
            </div>
          </div>
          <div className="col">
            <img src="/beranda/img_beranda.svg" />
          </div>
        </div>
        <div
          className="mt-5 pt-5"
          style={{ width: "100%", height: "512px", background: "#F9F9F9" }}
        >
          <center>
            <div className="row container">
              <div className="col-12 text-left">
                <a href="page" />
                <AtomText value="Forever bag" size="24px" weight="bold" />
                {/*userData.map((user) => {
                  return (
                    <>
                      <p>{user.USER_NAME}</p>
                      <p>{user.USER_PASSWORD}</p>
                    </>
                  );
                })*/}
              </div>
              {products.map((product, index) => {
                return (
                  <>
                    <div className="col-md-3 mt-3">
                      <MoleculeProductList
                        image={product.image[0]}
                        name={product.name}
                        category={product.category}
                        price={product.price}
                        id={product.id}
                        index={index}
                        href="/product/[id]"
                      />
                    </div>
                  </>
                );
              })}
            </div>
          </center>
        </div>
      </center>
    </>
  );
}
