// import TypeIt from "typeit-react";

import React from "react";
import "./Home.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Review from "./Review";
import Slider from "./Slider";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Team from "./Team";
// import Signup from "./Signup";

function Home() {
  const firstOverlap = {
    zIndex: 999,
  };
  const secondOverlap = {
    zIndex: 999,
  };
  return (
    <>
      <div>
        <Navbar style={{firstOverlap}} />
        <Slider style={{secondOverlap}} />
        {/* <NewSlider/> */}
      </div>
      <div>
        {/* <Link to='/login'><button id="btn-explore" type="submit">
      Sign Up
  </button></Link> */}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="grid-heading">
        <h1 className="famous-ghats">Sacred Stairways: India's Ghats</h1>
      </div>
      <div className="grid">
        <div className="grid-item">
          <img
            src="https://images.unsplash.com/photo-1578378377576-2ed7065bdb87?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="highlight-images"
          ></img>
          <Link to='/login'>
          <div className="overlay">
            <div className="text" id="varanasi-text">
              Varanasi
            </div>
          </div>
            </Link>
        </div>

        <div className="grid-item">
          <img
            src="https://www.savaari.com/blog/wp-content/uploads/2023/09/Varanasi_ghats1.webp"
            alt=""
            className="highlight-images"
          />
          <Link to='/login'>
          <div className="overlay">
            <div className="text">Patna</div>
          </div>
          </Link>
        </div>
        <div className="grid-item">
          <img
            src="https://media.easemytrip.com/media/Blog/India/637726618781495393/637726618781495393eqlAxH.jpg"
            alt=""
            className="highlight-images"
          />
          <Link to='/login'>
          <div className="overlay">
            <div className="text" style={{cursor:'pointer'}}>Ujjain</div>
          </div>
          </Link>
        </div>
        <div className="grid-item">
          <img
            src="https://media.easemytrip.com/media/Blog/India/637726618781495393/637726618781495393ZpmtnT.jpg"
            alt=""
            className="highlight-images"
          />
          <Link to='/login'>
          <div className="overlay">
            <div className="text">Haridwar</div>
          </div>
          </Link>
        </div>
      </div>
      <div id="div-morebtn">
        <Link to='/login'><button id="btn-more" type="button">
          More
        </button></Link>
      </div>
      <div id="footer-container">
        <footer id="landing-footer"></footer>
      </div>
      <div id="love-ghats">
        <h1 id="rel-heading">Religious Significance of the Ghats</h1>
      </div>
      <div className="flex-container">
        <div className="item">
          <img
            src="https://media.easemytrip.com/media/Blog/India/637726618781495393/637726618781495393q0l8Kf.jpg"
            alt=""
            className="item-img"
          />
        </div>

        <div className="item">
          <p className="item-para">
            A dip in the holy waters of rivers at the ghats is believed to wash
            away one's sins and attain moksha or liberation from the cycle of
            rebirth. Many pilgrims travel to sacred ghats to bathe during
            auspicious occasions.
          </p>
        </div>

        <div className="item">
          <p className="item-para">
            Morning prayer ceremonies, known as Ganga aartis take place daily at
            ghats like Dasaswamedh Ghat in Varanasi with lamps lit and hymns
            chanted at dawn.
          </p>
        </div>

        <div className="item">
          <img
            src="https://media.easemytrip.com/media/Blog/India/637726618781495393/637726618781495393TXeHOy.jpg"
            alt=""
            className="item-img"
          />
        </div>

        <div className="item">
          <img
            src="https://media.easemytrip.com/media/Blog/India/637726618781495393/637726618781495393hR9wmd.jpg"
            alt=""
            className="item-img"
          />
        </div>

        <div className="item">
          <p className="item-para">
            Ghats like Manikarnika Ghat and Harishchandra Ghat in<br></br> Varanasi are
            site of ancient and continual cremation rituals. Funeral pyres burn
            constantly, with ashes immersed in the river.
          </p>
        </div>

        <div className="item">
          <p className="item-para">
            During major festivals and occasions like Kumbh Mela ghats draw
            thousands of pilgrims for holy dips and prayers.
          </p>
        </div>

        <div className="item">
          <img
            src="https://media.easemytrip.com/media/Blog/India/637726618781495393/637726618781495393HDEwOB.jpg"
            alt=""
            className="item-img"
          />{" "}
        </div>
      </div>
      <div className="container2">
        <Review />
      </div>
      <div className="container3">
        <Footer />
      </div>
    </>
  );
}

export default Home;
