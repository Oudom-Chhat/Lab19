import React from 'react'

function Breadcrump(props) {
  return (
    <div>
      {/* <!--================Home Banner Area =================--> */}
    <section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
        <div className="container">
          <div className="banner_content d-md-flex justify-content-between align-items-center">
            <div className="mb-3 mb-md-0">
              <h2>Shop Category</h2>
              <p>Very us move be blessed multiply night</p>
            </div>
            <div className="page_link">
              <a href="index.html">Home</a>
              <a href="category.html">{props.title}</a>
              <a href="category.html">{props.page}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!--================End Home Banner Area =================--> */}
    </div>
  )
}

export default Breadcrump