import '../styles/header.css'

const Header = () => {
  return(
    <header>
      <div className="top">
        <div className="interno">
          <div className="logo">
            <img src="https://i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg" alt="" />
          </div>
          <ul>
            <li><i className="fa-solid fa-border-all"></i>Departments</li>
            <li><i className="fa-solid fa-screwdriver-wrench"></i>Services</li>
          </ul>
          <div className="search">
            <input type="text" placeholder="Search everything at Walmart online and in store"/>
            <button><i className="fa-sharp fa-solid fa-magnifying-glass"></i></button>
          </div>
          <ul>
            <li>
              <div className="esquerda">
                <i className="fa-regular fa-heart"></i>
              </div>
              <div className="direita">
                <p>Reorder</p>
                <h2>My Items</h2>
              </div>
            </li>
            <li>
              <div className="esquerda">
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="direita">
                <p>Sign In</p>
                <h2>Account</h2>
              </div>
            </li>
            <li>
              <div className="cart">
                <div className="carrinho">
                  <div className="number"><p>0</p></div>
                  <i className="fa-solid fa-cart-shopping"></i>
                </div>
                <p>$0,00</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="down">
        <div className="interno">
          <div className="esquerda">
            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-ad46/k2-_0a671c38-d307-447c-835e-7904ab143c26.v1.png" alt="" />
            <p><span>How do you want your items? <i className="fa-thin fa-chevron-down"></i></span> | Sacramento, 95829 Sacramento Supercenter</p>
          </div>
          <div className="direita">
            <ul>
              <li><a href="">Deals</a></li>
              <li><a href="">Fathers Day</a></li>
              <li><a href="">Graduation</a></li>
              <li><a href="">National Pet Month</a></li>
              <li><a href="">Grocery & essentials</a></li>
              <li><a href="">Fashion</a></li>
              <li><a href="">Home</a></li>
              <li><a href="">Registry</a></li>
              <li><a href="">Walmart+</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;