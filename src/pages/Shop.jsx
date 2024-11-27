import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Breadcrump from '../components/Breadcrump'

function Shop() {
  // Products fetched from API
  const [shop, setShop] = useState([]);
  // Filtered products
  const [filteredShop, setFilteredShop] = useState([]);
  const [maxPrice, setMaxPrice] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch products from Fake Store API
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setShop(data);
      setFilteredShop(data); // Initialize with all products
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // // Show product detail
  // const detailpage = (product) => {
  //   setDetail(product);
  //   setShowDetail(true);
  // };

  // // Close product detail
  // const closedetail = () => {
  //   setShowDetail(false);
  // };

  const Filter = (category) => {
    const filtered = shop.filter((product) =>
      product.category.toLowerCase().includes(category.toLowerCase())
    );
    setFilteredShop(filtered);
  };

 // Handle price filter
//  const handleFilter = () => {
//   const price = parseFloat(maxPrice);

//   if (isNaN(price) || price <= 0) {
//     alert("Please enter a valid maximum price.");
//     return;
//   }

//   const filtered = filteredShop.filter((product) => product.price <= price);
//   setFilteredProducts(filtered);
// };


  // Show all categories
  const allcatefilter = () => {
    setFilteredShop(shop);
  };
  return (
    <div>
      <Breadcrump title="Fake Store" page="Shop"/>

      {/*================Category Product Area =================--> */}
    <section className="cat_product_area section_gap">
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-lg-9">
            <div className="product_top_bar">
              <div className="left_dorp">
                <select className="sorting">
                  <option value="1">Default sorting</option>
                  <option value="2">Default sorting 01</option>
                  <option value="4">Default sorting 02</option>
                </select>
                <select className="show">
                  <option value="1">Show 12</option>
                  <option value="2">Show 14</option>
                  <option value="4">Show 16</option>
                </select>
              </div>
            </div>
            
            <div className="latest_product_inner">
              <div className="row">
              {filteredShop.map((product) => (
                <div className="col-lg-4 col-md-6">
                  <div className="single-product">
                    <div className="product-img">
                      <img
                        style={{height: "300px"}}
                        className="card-img"
                        src={product.image}
                        alt={product.title}
                      />
                      <div className="p_icon">
                        <a href={`/shop/${product.id}`}>
                          <i className="ti-eye"></i>
                        </a>
                        <a href="#">
                          <i className="ti-heart"></i>
                        </a>
                        <a href="#">
                          <i className="ti-shopping-cart"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-btm">
                      <a href="#" className="d-block">
                        <h4>{product.title}</h4>
                      </a>
                      <div className="mt-3">
                        <span className="mr-4">${product.price}</span>
                        <del>${String((Number(product.price) + 10).toFixed(2))}</del>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              </div>
              {/* <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="single-product">
                    <div className="product-img">
                      <img
                        className="card-img"
                        src="img/product/inspired-product/i1.jpg"
                        alt=""
                      />
                      <div className="p_icon">
                        <a href="#">
                          <i className="ti-eye"></i>
                        </a>
                        <a href="#">
                          <i className="ti-heart"></i>
                        </a>
                        <a href="#">
                          <i className="ti-shopping-cart"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-btm">
                      <a href="#" className="d-block">
                        <h4>Latest men’s sneaker</h4>
                      </a>
                      <div className="mt-3">
                        <span className="mr-4">$25.00</span>
                        <del>$35.00</del>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="single-product">
                    <div className="product-img">
                      <img
                        className="card-img"
                        src="img/product/inspired-product/i2.jpg"
                        alt=""
                      />
                      <div className="p_icon">
                        <a href="#">
                          <i className="ti-eye"></i>
                        </a>
                        <a href="#">
                          <i className="ti-heart"></i>
                        </a>
                        <a href="#">
                          <i className="ti-shopping-cart"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-btm">
                      <a href="#" className="d-block">
                        <h4>Latest men’s sneaker</h4>
                      </a>
                      <div className="mt-3">
                        <span className="mr-4">$25.00</span>
                        <del>$35.00</del>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="single-product">
                    <div className="product-img">
                      <img
                        className="card-img"
                        src="img/product/inspired-product/i3.jpg"
                        alt=""
                      />
                      <div className="p_icon">
                        <a href="#">
                          <i className="ti-eye"></i>
                        </a>
                        <a href="#">
                          <i className="ti-heart"></i>
                        </a>
                        <a href="#">
                          <i className="ti-shopping-cart"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-btm">
                      <a href="#" className="d-block">
                        <h4>Latest men’s sneaker</h4>
                      </a>
                      <div className="mt-3">
                        <span className="mr-4">$25.00</span>
                        <del>$35.00</del>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="single-product">
                    <div className="product-img">
                      <img
                        className="card-img"
                        src="img/product/inspired-product/i4.jpg"
                        alt=""
                      />
                      <div className="p_icon">
                        <a href="#">
                          <i className="ti-eye"></i>
                        </a>
                        <a href="#">
                          <i className="ti-heart"></i>
                        </a>
                        <a href="#">
                          <i className="ti-shopping-cart"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-btm">
                      <a href="#" className="d-block">
                        <h4>Latest men’s sneaker</h4>
                      </a>
                      <div className="mt-3">
                        <span className="mr-4">$25.00</span>
                        <del>$35.00</del>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="single-product">
                    <div className="product-img">
                      <img
                        className="card-img"
                        src="img/product/inspired-product/i5.jpg"
                        alt=""
                      />
                      <div className="p_icon">
                        <a href="#">
                          <i className="ti-eye"></i>
                        </a>
                        <a href="#">
                          <i className="ti-heart"></i>
                        </a>
                        <a href="#">
                          <i className="ti-shopping-cart"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-btm">
                      <a href="#" className="d-block">
                        <h4>Latest men’s sneaker</h4>
                      </a>
                      <div className="mt-3">
                        <span className="mr-4">$25.00</span>
                        <del>$35.00</del>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="single-product">
                    <div className="product-img">
                      <img
                        className="card-img"
                        src="img/product/inspired-product/i6.jpg"
                        alt=""
                      />
                      <div className="p_icon">
                        <a href="#">
                          <i className="ti-eye"></i>
                        </a>
                        <a href="#">
                          <i className="ti-heart"></i>
                        </a>
                        <a href="#">
                          <i className="ti-shopping-cart"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-btm">
                      <a href="#" className="d-block">
                        <h4>Latest men’s sneaker</h4>
                      </a>
                      <div className="mt-3">
                        <span className="mr-4">$25.00</span>
                        <del>$35.00</del>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="single-product">
                    <div className="product-img">
                      <img
                        className="card-img"
                        src="img/product/inspired-product/i7.jpg"
                        alt=""
                      />
                      <div className="p_icon">
                        <a href="#">
                          <i className="ti-eye"></i>
                        </a>
                        <a href="#">
                          <i className="ti-heart"></i>
                        </a>
                        <a href="#">
                          <i className="ti-shopping-cart"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-btm">
                      <a href="#" className="d-block">
                        <h4>Latest men’s sneaker</h4>
                      </a>
                      <div className="mt-3">
                        <span className="mr-4">$25.00</span>
                        <del>$35.00</del>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="single-product">
                    <div className="product-img">
                      <img
                        className="card-img"
                        src="img/product/inspired-product/i8.jpg"
                        alt=""
                      />
                      <div className="p_icon">
                        <a href="#">
                          <i className="ti-eye"></i>
                        </a>
                        <a href="#">
                          <i className="ti-heart"></i>
                        </a>
                        <a href="#">
                          <i className="ti-shopping-cart"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-btm">
                      <a href="#" className="d-block">
                        <h4>Latest men’s sneaker</h4>
                      </a>
                      <div className="mt-3">
                        <span className="mr-4">$25.00</span>
                        <del>$35.00</del>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="single-product">
                    <div className="product-img">
                      <img
                        className="card-img"
                        src="img/product/inspired-product/i2.jpg"
                        alt=""
                      />
                      <div className="p_icon">
                        <a href="#">
                          <i className="ti-eye"></i>
                        </a>
                        <a href="#">
                          <i className="ti-heart"></i>
                        </a>
                        <a href="#">
                          <i className="ti-shopping-cart"></i>
                        </a>
                      </div>
                    </div>
                    <div className="product-btm">
                      <a href="#" className="d-block">
                        <h4>Latest men’s sneaker</h4>
                      </a>
                      <div className="mt-3">
                        <span className="mr-4">$25.00</span>
                        <del>$35.00</del>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          <div className="col-lg-3">
            <div className="left_sidebar_area">
              <aside className="left_widgets p_filter_widgets">
                <div className="l_w_title">
                  <h3>Browse Categories</h3>
                </div>
                <div className="widgets_inner">
                  <ul className="list">
                    <li onClick={allcatefilter}><a href="#">All</a></li>
                    <li onClick={() => Filter("electronics")}><a href="#">Electronic</a></li>
                    <li onClick={() => Filter("jewelery")}><a href="#">Jewelry</a></li>
                    <li onClick={() => Filter("men's clothing")}><a href="#">Men's Clothing</a></li>
                    <li onClick={() => Filter("women's clothing")}><a href="#">Women's Clothing</a></li>
                    {/* <li>
                      <a href="#">Meat Alternatives</a>
                    </li>
                    <li>
                      <a href="#">Meat</a>
                    </li> */}
                  </ul>
                </div>
              </aside>

              {/* <aside className="left_widgets p_filter_widgets">
                <div className="l_w_title">
                  <h3>Product Brand</h3>
                </div>
                <div className="widgets_inner">
                  <ul className="list">
                    <li>
                      <a href="#">Apple</a>
                    </li>
                    <li>
                      <a href="#">Asus</a>
                    </li>
                    <li className="active">
                      <a href="#">Gionee</a>
                    </li>
                    <li>
                      <a href="#">Micromax</a>
                    </li>
                    <li>
                      <a href="#">Samsung</a>
                    </li>
                  </ul>
                </div>
              </aside> */}

              {/* <aside className="left_widgets p_filter_widgets">
                <div className="l_w_title">
                  <h3>Color Filter</h3>
                </div>
                <div className="widgets_inner">
                  <ul className="list">
                    <li>
                      <a href="#">Black</a>
                    </li>
                    <li>
                      <a href="#">Black Leather</a>
                    </li>
                    <li className="active">
                      <a href="#">Black with red</a>
                    </li>
                    <li>
                      <a href="#">Gold</a>
                    </li>
                    <li>
                      <a href="#">Spacegrey</a>
                    </li>
                  </ul>
                </div>
              </aside> */}

              {/* <aside className="left_widgets p_filter_widgets">
                <div className="l_w_title">
                  <h3>Price Filter</h3>
                </div>
                <div className="widgets_inner">
                  <div className="range_item">
                    <div id="slider-range"></div>
                    <div className="">
                      <label for="amount">Price : </label>
                      <input type="number"
                        id="maxPrice"
                        placeholder="e.g., 50"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)} />
                        <button onClick={handleFilter}>Filter Products</button>
                    </div>
                  </div>
                </div>
              </aside> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ================End Category Product Area =================--> */}

    </div>
  )
}

export default Shop