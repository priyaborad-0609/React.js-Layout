import Navbar from "./Navbar"
import Footer from "./Footer"

function App(){
    return(
        <div className="container" style={{ backgroundColor: "aqua", height: "575px", width: "100%" }}>
    <div className="main" style={{ backgroundColor: "white", height: "400px", width: "50%", margin: "auto", position: "relative", top: "18%" }}>
        <Navbar />
      <div className="img">
        <img src="https://img.freepik.com/premium-vector/house-plant-black-pot-isolated-white_134830-539.jpg" style={{ height: "300px", position: "absolute", top: "70px" }} />
      </div>
      <div className="content">
        <h2 style={{ position: "relative", left: "50%", fontWeight: "normal", top:"100px"}}>CLASSIC PEACE LILY</h2>
        <h5 style={{ position: "relative", left: "50.5%",  fontWeight: "normal", top:"80px"}}>POPULAR HOUSE PLANT</h5>
        <p style={{ position: "relative", left: "50%",  fontSize: "35px" ,top:"55px"}}>$ 18</p>
        <p style={{ position: "relative", left: "50%", fontSize: "16px",top:"40px" }}>Classis peace lily is a sparthphylium floor plant <br />
          arrenged in a bamboo plant with a blue <br />
          and red and butterfly pick.</p>
          <button style={{position: "relative", left: "50%",height:"40px",top:"40px"}}>ADD TO CART</button>
          <button style={{position: "relative", left: "55%",height:"40px",width:"15%",top:"40px"}}>WISHLIST</button>
      </div>
          <Footer />
    </div>
  </div>
    )
}

export default App