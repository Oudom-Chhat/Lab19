import React, {useState, useEffect} from 'react'

function Home() {
  // Products fetched from API
  const [shop, setShop] = useState([]);
  // Filtered products
  const [filteredShop, setFilteredShop] = useState([]);
  // Toggle Product Detail
  const [showDetail, setShowDetail] = useState(false);
  // Detail Page Data
  const [detail, setDetail] = useState({});

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

  // Show product detail
  const detailpage = (product) => {
    setDetail(product);
    setShowDetail(true);
  };

  // Close product detail
  const closedetail = () => {
    setShowDetail(false);
  };

  const Filter = (category) => {
    const filtered = shop.filter((product) =>
      product.category.toLowerCase().includes(category.toLowerCase())
    );
    setFilteredShop(filtered);
  };

  // Show all categories
  const allcatefilter = () => {
    setFilteredShop(shop);
  };

  const threeProducts = filteredShop.slice(0, 3);
  const OneProduct = filteredShop.slice(4,5);
  const newProducts = filteredShop.filter((product) => product.id > 16);
  const eightProducts = filteredShop.slice(7,15);
  return (
    <div>
       {/*================Home Banner Area =================*/}
      <section className="home_banner_area mb-40">
        <div className="banner_inner d-flex align-items-center">
          <div className="container">
            <div className="banner_content row">
              <div className="col-lg-12">
                <p className="sub text-uppercase">men Collection</p>
                <h3><span>Show</span> Your <br />Personal <span>Style</span></h3>
                <h4>Fowl saw dry which a above together place.</h4>
                <a className="main_btn mt-40" href="#">View Collection</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================End Home Banner Area =================*/}

      {/* Start feature Area */}
      <section className="feature-area section_gap_bottom_custom">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-feature">
                <a href="#" className="title">
                  <i className="flaticon-money"></i>
                  <h3>Money back gurantee</h3>
                </a>
                <p>Shall open divide a one</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-feature">
                <a href="#" className="title">
                  <i className="flaticon-truck"></i>
                  <h3>Free Delivery</h3>
                </a>
                <p>Shall open divide a one</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-feature">
                <a href="#" className="title">
                  <i className="flaticon-support"></i>
                  <h3>Alway support</h3>
                </a>
                <p>Shall open divide a one</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-feature">
                <a href="#" className="title">
                  <i className="flaticon-blockchain"></i>
                  <h3>Secure payment</h3>
                </a>
                <p>Shall open divide a one</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End feature Area */}

      {/*================ Feature Product Area =================*/}
      <section className="feature_product_area section_gap_bottom_custom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="main_title">
                <h2><span>Featured product</span></h2>
                <p>Bring called seed first of third give itself now ment</p>
              </div>
            </div>
          </div>
          <div className="row">
            {threeProducts.map((product) => (
                <div className="col-lg-4 col-md-6">
                <div className="single-product">
                  <div className="product-img">
                    <img style={{height: '450px'}} className="img-fluid w-100" src={product.image} alt="" />
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
                      <h4>{product.title}</h4>
                    </a>
                    <div className="mt-3">
                      <span className="mr-4">${product.price}</span>
                      {/* <del>$35.00</del> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="col-lg-4 col-md-6">
              <div className="single-product">
                <div className="product-img">
                  <img className="img-fluid w-100" src="img/product/feature-product/f-p-1.jpg" alt="" />
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
            </div> */}

            {/* <div className="col-lg-4 col-md-6">
              <div className="single-product">
                <div className="product-img">
                  <img className="img-fluid w-100" src="img/product/feature-product/f-p-2.jpg" alt="" />
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
                    <h4>Red women purses</h4>
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
                  <img className="img-fluid w-100" src="img/product/feature-product/f-p-3.jpg" alt="" />
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
                    <h4>Men stylist Smart Watch</h4>
                  </a>
                  <div className="mt-3">
                    <span className="mr-4">$25.00</span>
                    <del>$35.00</del>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/*================ End Feature Product Area =================*/}

      {/*================ Offer Area =================*/}
      <section className="offer_area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="offset-lg-4 col-lg-6 text-center">
              <div className="offer_content">
                <h3 className="text-uppercase mb-40">all men’s collection</h3>
                <h2 className="text-uppercase">50% off</h2>
                <a href="#" className="main_btn mb-20 mt-5">Discover Now</a>
                <p>Limited Time Offer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================ End Offer Area =================*/}

      {/*================ New Product Area =================*/}
      <section className="new_product_area section_gap_top section_gap_bottom_custom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="main_title">
                <h2><span>new products</span></h2>
                <p>Bring called seed first of third give itself now ment</p>
              </div>
            </div>
          </div>

          <div className="row">
            {OneProduct.map((product) => (
              <div className="col-lg-6">
              <div className="new_product">
                <h5 className="text-uppercase">collection of 2024</h5>
                <h3 className="text-uppercase">{product.title}</h3>
                <div className="product-img">
                  <img style={{height: '300px'}} className="img-fluid" src={product.image} alt={product.title} />
                </div>
                <h4>${product.price}</h4>
                <a href="#" className="main_btn">Add to cart</a>
              </div>
            </div>
            ))}
            {/* <div className="col-lg-6">
              <div className="new_product">
                <h5 className="text-uppercase">collection of 2024</h5>
                <h3 className="text-uppercase">Men’s summer t-shirt</h3>
                <div className="product-img">
                  <img className="img-fluid" src="" alt="" />
                </div>
                <h4>$120.70</h4>
                <a href="#" className="main_btn">Add to cart</a>
              </div>
            </div> */}

            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="row">
                {newProducts.map((product) => (
                  <div className="col-lg-6 col-md-6">
                  <div className="single-product">
                    <div className="product-img">
                      <img style={{height: '300px'}} className="img-fluid w-100" src={product.image} alt="" />
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
                {/* <div className="col-lg-6 col-md-6">
                  <div className="single-product">
                    <div className="product-img">
                      <img className="img-fluid w-100" src="img/product/new-product/n1.jpg" alt="" />
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
                        <h4>Nike latest sneaker</h4>
                      </a>
                      <div className="mt-3">
                        <span className="mr-4">$25.00</span>
                        <del>$35.00</del>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* <div className="col-lg-6 col-md-6">
                  <div className="single-product">
                    <div className="product-img">
                      <img className="img-fluid w-100" src="img/product/new-product/n2.jpg" alt="" />
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
                        <h4>Men’s denim jeans</h4>
                      </a>
                      <div className="mt-3">
                        <span className="mr-4">$25.00</span>
                        <del>$35.00</del>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-product">
                    <div className="product-img">
                      <img className="img-fluid w-100" src="img/product/new-product/n3.jpg" alt="" />
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
                        <h4>quartz hand watch</h4>
                      </a>
                      <div className="mt-3">
                        <span className="mr-4">$25.00</span>
                        <del>$35.00</del>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-product">
                    <div className="product-img">
                      <img className="img-fluid w-100" src="img/product/new-product/n4.jpg" alt="" />
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
                        <h4>adidas sport shoe</h4>
                      </a>
                      <div className="mt-3">
                        <span className="mr-4">$25.00</span>
                        <del>$35.00</del>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================ End New Product Area =================*/}

      {/*================ Inspired Product Area =================*/}
      <section className="inspired_product_area section_gap_bottom_custom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="main_title">
                <h2><span>Inspired products</span></h2>
                <p>Bring called seed first of third give itself now ment</p>
              </div>
            </div>
          </div>

          <div className="row">
            {eightProducts.map((product) => (
              <div className="col-lg-3 col-md-6">
              <div className="single-product">
                <div className="product-img">
                  <img style={{height: '250px'}} className="img-fluid w-100" src={product.image} alt={product.title} />
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
            {/* <div className="col-lg-3 col-md-6">
              <div className="single-product">
                <div className="product-img">
                  <img className="img-fluid w-100" src="img/product/inspired-product/i1.jpg" alt="" />
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

            <div className="col-lg-3 col-md-6">
              <div className="single-product">
                <div className="product-img">
                  <img className="img-fluid w-100" src="img/product/inspired-product/i2.jpg" alt="" />
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

            <div className="col-lg-3 col-md-6">
              <div className="single-product">
                <div className="product-img">
                  <img className="img-fluid w-100" src="img/product/inspired-product/i3.jpg" alt="" />
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

            <div className="col-lg-3 col-md-6">
              <div className="single-product">
                <div className="product-img">
                  <img className="img-fluid w-100" src="img/product/inspired-product/i4.jpg" alt="" />
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
            
            <div className="col-lg-3 col-md-6">
              <div className="single-product">
                <div className="product-img">
                  <img className="img-fluid w-100" src="img/product/inspired-product/i5.jpg" alt="" />
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

            <div className="col-lg-3 col-md-6">
              <div className="single-product">
                <div className="product-img">
                  <img className="img-fluid w-100" src="img/product/inspired-product/i6.jpg" alt="" />
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

            <div className="col-lg-3 col-md-6">
              <div className="single-product">
                <div className="product-img">
                  <img className="img-fluid w-100" src="img/product/inspired-product/i7.jpg" alt="" />
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

            <div className="col-lg-3 col-md-6">
              <div className="single-product">
                <div className="product-img">
                  <img className="img-fluid w-100" src="img/product/inspired-product/i8.jpg" alt="" />
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
            </div> */}
          </div>
        </div>
      </section>
      {/*================ End Inspired Product Area =================*/}

      {/*================ Start Blog Area =================*/}
      <section className="blog-area section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="main_title">
                <h2><span>latest blog</span></h2>
                <p>Bring called seed first of third give itself now ment</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="thumb">
                  <img className="img-fluid" src="img/b1.jpg" alt=""/>
                </div>
                <div className="short_details">
                  <div className="meta-top d-flex">
                    <a href="#">By Admin</a>
                    <a href="#"><i className="ti-comments-smiley"></i>2 Comments</a>
                  </div>
                  <a className="d-block" href="single-blog.html">
                    <h4>Ford clever bed stops your sleeping
                      partner hogging the whole</h4>
                  </a>
                  <div className="text-wrap">
                    <p>
                      Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light
                      Forth.
                    </p>
                  </div>
                  <a href="#" className="blog_btn">Learn More <span className="ml-2 ti-arrow-right"></span></a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="thumb">
                  <img className="img-fluid" src="img/b2.jpg" alt=""/>
                </div>
                <div className="short_details">
                  <div className="meta-top d-flex">
                    <a href="#">By Admin</a>
                    <a href="#"><i className="ti-comments-smiley"></i>2 Comments</a>
                  </div>
                  <a className="d-block" href="single-blog.html">
                    <h4>Ford clever bed stops your sleeping
                      partner hogging the whole</h4>
                  </a>
                  <div className="text-wrap">
                    <p>
                      Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light
                      Forth.
                    </p>
                  </div>
                  <a href="#" className="blog_btn">Learn More <span className="ml-2 ti-arrow-right"></span></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog">
                <div className="thumb">
                  <img className="img-fluid" src="img/b3.jpg" alt=""/>
                </div>
                <div className="short_details">
                  <div className="meta-top d-flex">
                    <a href="#">By Admin</a>
                    <a href="#"><i className="ti-comments-smiley"></i>2 Comments</a>
                  </div>
                  <a className="d-block" href="single-blog.html">
                    <h4>Ford clever bed stops your sleeping
                      partner hogging the whole</h4>
                  </a>
                  <div className="text-wrap">
                    <p>
                      Let one fifth i bring fly to divided face for bearing the divide unto seed winged divided light
                      Forth.
                    </p>
                  </div>
                  <a href="#" className="blog_btn">Learn More <span className="ml-2 ti-arrow-right"></span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================ End Blog Area =================*/}
    </div>
  )
}

export default Home