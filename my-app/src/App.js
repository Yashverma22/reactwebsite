// import logo from './logo.svg';
import './App.css';
// import box1 from './imgvid/boxes.jpg'
import MayankImage from './imgvid/Mayank.jpeg'
import instagram from './imgvid/instagram.png'
import envelop from './imgvid/envelop.png'
import spotify from './imgvid/spotify.png'
import youtube from './imgvid/Youtube.png'
import doorie from './imgvid/Doorie.jpg'
import play from './imgvid/newplay.png'
import udaan from './imgvid/Udaan.jpg'
import Aise from './imgvid/Aise aazmaat.jpg'
import AAkhri from './imgvid/AAkhrisawal.jpg'
import dewaana from './imgvid/valentine.jpg'


function App() {
  window.addEventListener('scroll', function () {
    // Get the background element
    const background = document.getElementById('background');

    // Get the scroll position
    const scrollPosition = window.scrollY;

    // Set the speed factor for the movement (e.g., 0.2 to slow down movement)
    const speedFactor = 3;

    // Calculate the new background position based on scroll position and speed factor
    const newTop = -scrollPosition * speedFactor; // Move background up as you scroll down

    // Apply the new position to the background
    background.style.backgroundPosition = `center ${newTop}px`;
  });


  function toggleDropdown() {
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');
    
    // Toggle the active class on the button
    dropbtn.classList.toggle('active');
    
    // Toggle the show class on the dropdown content
    dropdownContent.classList.toggle('show');
  }
  
  


  return (
    <>
      <div id="background"></div>
      <div className="box1">
        <img id='mayanki' src={MayankImage} alt="mayank" />
      </div>

      <div className="textpara1">
        Mayank verma
        <br />
        <p id='text'> I am Mayank Verma, an Indian Independent artist hailing from Delhi, and I wear multiple hats as a music
          producer, composer, and singer-songwriter. Rooted in Saharanpur, Uttar Pradesh, my musical style blends
          acoustic hues, keys, and guitar, crafting a captivating narrative that resonates with heartfelt emotions.
        </p>
      </div>

      <div className="icons">
        <a href="https://www.instagram.com/mynksings/"><img src={instagram} alt="" /></a>
        <a href="mailto:officialmayankmusic@gmail.com"><img src={envelop} alt="" /></a>
        <a href="https://www.youtube.com/c/MayankVermaYT"><img src={youtube} alt="" /></a>
        <a href="https://open.spotify.com/artist/4ggn0ATomtGYDyZ61oscV4?si=80OYcjmCTBeVAg5fRyrEvQ&nd=1&dlsi=4d1e7757d6a8436c"><img src={spotify} alt="" /></a>
      </div>

      <div className="textpara2">
        Harmonizing life's highs and lows through the language of music.
        <br />
        <br />
        <br />
        <br />
        Here we go...
      </div>

      <div className="container2">
        <p>My recent releases</p>
        <hr />
        <a href="https://www.youtube.com/watch?time_continue=3&v=iPWIzNJwilI&embeds_referring_euri=https%3A%2F%2Fwww.hopp.bio%2F&embeds_referring_origin=www.hopp.bio&source_ve_path=Mjg2NjY"><img src={doorie} alt="doorie song" /></a>
        <img id='playbutton' src={play} alt="" />
      </div>

      <div className="container3">
        <p>My Originals</p>
        <hr />

        <div className="fourcontainer">
          <div className="box"> <a href="https://www.youtube.com/watch?v=edsTfNfgzBk"><img src={AAkhri} alt="" /><p>AAkhri Sawal (original)~ Mayank Verma</p></a> </div>
          <div className="box"><a href="https://www.youtube.com/watch?v=Oqjeyqep8eI"><img src={udaan} alt="" /><p>Ek Ummeed (Original) ~ Mayank Verma</p></a></div>
          <div className="box"><a href="https://www.youtube.com/watch?si=_Br6Petmtc0puOPv&v=KlsFNtvc4UI&feature=youtu.be"><img src={dewaana} alt="" /><p>DEWANA TERA (Original)~ Manyank Verma</p></a></div>
          <div className="box"><a href="https://www.youtube.com/watch?v=U8X0O9fcmn8"><img src={Aise} alt="" /><p>Kaise Aazmaate (Original)~Mayank Verma</p></a></div>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn" onClick={toggleDropdown}><p>Support</p><span className="arrow">&#9660;</span></button>
        <div className="dropdown-content">
            <h2>I Need Your Support !</h2>
            <p>The time and effort I put into my art are fueled by your passion and engagement. To continue creating new
                pieces like this, consider showing your support through a financial contribution. Together, we can bring
                even more creativity to life</p>
                <br/>
                <p id="upi"><b>UPI-</b> vermamayank321-1@oksbi</p>
        </div>
    </div>
      
      <div className="button2"><a href="https://open.spotify.com/artist/4ggn0ATomtGYDyZ61oscV4?si=80OYcjmCTBeVAg5fRyrEvQ&nd=1&dlsi=4d1e7757d6a8436c">Visit my spotify directly</a></div>
    </>
  )
}

export default App;
