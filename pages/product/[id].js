import OrganismsNav from "../../components/organisms/nav";
import AtomText from "../../components/atoms/text";
import AtomButton from "../../components/atoms/button";
import AtomImage from "../../components/atoms/image";
import { list_product } from "../../components/variables/product";
import { useRouter } from "next/router";

export default function detail() {
  const router = useRouter();
  const products = list_product();
  const product = products[router.query.id];
  return (
    <>
      <OrganismsNav />
      <center>
        <div className="row container mt-5">
          <div className="col">
            <AtomImage
              image={
                product ? product.image[0] : "/products/product_2.svg"
              }
              width="360px"
              height="360px"
              size="55%"
            />
            <div className="row mt-3" style={{ width: "75%" }}>
              <div className="col">
                <AtomImage
                  image={
                    product
                      ? product.image[1]
                      : "/products/product_2.svg"
                  }
                />
              </div>
              <div className="col">
                <AtomImage
                  image={
                    product
                      ? product.image[2]
                      : "/products/product_2.svg"
                  }
                />
              </div>
              <div className="col">
                <AtomImage
                  image={
                    product
                      ? product.image[3]
                      : "/products/product_2.svg"
                  }
                />
              </div>
            </div>
          </div>
          <div className="col text-left">
            <AtomText
              value={product ? product.name : "Judul"}
              size="28px"
              weight="bold"
            />
            <AtomText value={`Stock : ${product ? product.stock : "0"}`} size="18px" color="9D9D9D" />
            <AtomText
              value={product ? product.price : "$0"}
              size="36px"
              weight="bold"
              marginTop="-15px"
            />
            <AtomText
              value={product ? product.desc : ""}
              size="14px"
            />
            <AtomButton
              customClass="mt-5"
              value="Add to Cart"
              background="#0086CF"
              color="#FFF"
              padding="5px 30px"
              border="none"
              radius="10px"
            />
          </div>
        </div>
      </center>
    </>
  );
}
