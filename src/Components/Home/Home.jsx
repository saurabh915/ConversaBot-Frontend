import React from 'react';
import './Home.css'
function Home() {
  return (
    <body>
      <nav class="navbar">
        <div class="navbar-brand">
          {/* <img src="icon.png" alt="icon" class="navbar-icon"> */}
          <span class="navbar-name">ConversaBot</span>
        </div>
        <div class="navbar-links">
          <a href="#home" class="navbar-link">Home</a>
          <a href="#about" class="navbar-link">About Us</a>
          <a href="#contact" class="navbar-link">Contact</a>
        </div>
        <div class="navbar-buttons">
          <a href="Login.html" class="btn">Login</a>
          <a href="signup.html" class="btn">Sign Up</a>
        </div>
      </nav>

      <div id="home" class="content-one">
        <h2>Home</h2>
        <p>This is the home page content.</p>
      </div>

      <div id="about" class="content-two">
        <h2>About Us</h2>
        <p>This is the about us page content.</p>
      </div>

      <div id="contact" class="content-three">
        <h2>Contact Us</h2>
        <form id="contact-form">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label for="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
          <button type="submit">Send</button>
        </form>
        {<div class="social-media-icons">
          <a href="#"><img src="facebook-icon.png" alt="Facebook" /></a>
          <a href="#"><img src="twitter-icon.png" alt="Twitter" /></a>
          <a href="#"><img src="instagram-icon.png" alt="Instagram" /></a>
        </div>}
      </div>

      <footer class="footer">
        <div class="footer-inner">
          <div class="footer-left">
            <p>&copy; 2024 ConversaBot. All rights reserved.</p>
          </div>
          {/* <div class="footer-right">
            <ul class="footer-menu">
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div> */}
        </div>
      </footer>
      <script src="scripts.js"></script>
    </body>

  );
}

export default Home;
