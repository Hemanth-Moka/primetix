import React, { useState } from 'react';
import "./styles/Home.css";
import Footer from './Footer';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className={darkMode ? "dark" : ""}> {/* Apply dark mode class */}
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          {/* <button className="dark-mode-btn" onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button> */}
           <a href="/customerlogin" className="hero-btn">Login</a>
            <a href="/customerRegistration" className="hero-btn">Register Now</a>
            <br />
            <br />

          <h2>Book Your Tickets Hassle-Free!</h2>
          <p>Movies, Events, and Travel – all in one place.<br />Easy booking, best prices, and secure payments.</p>
          <a href="/customerlogin" className="hero-btn">Book Now</a>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="booking">
        <h3>Book Your Ticket</h3>
        <div className="booking-options">
          <a href="/movies">🎬 Movies</a>
          <a href="/travel">🚗 Travel</a>
          <a href="/events">🎟️ Events</a>
        </div>
      </section>

      {/* Popular Movies & Events */}
      <section id="popular">
        <h3>Popular Movies & Events</h3>
        <div className="popular-list">
          <div className="item">
            <img src="https://blog.flicks.co.nz/wp-content/uploads/50-guy-movies-collage.jpg" alt="Movie 1" />
            <p>Movie Title</p>
          </div>
          <div className="item">
            <img src="https://images.stockcake.com/public/6/6/f/66f13779-0e3f-4ee8-a98e-85920f40c232_large/live-concert-energy-stockcake.jpg" alt="Concert" />
            <p>Live Concert</p>
          </div>
          <div className="item">
            <img src="https://preview.redd.it/which-tier-2-3-movie-are-you-excited-for-this-year-v0-v61stp9oqgie1.jpg?width=640&crop=smart&auto=webp&s=7715b6add2bda79565b2a8fd23fe8fdde90430d1" alt="HIT 3" />
            <p>HiT Third case</p>
          </div>
          <div className="item">
            <img src="https://upload.wikimedia.org/wikipedia/en/8/80/Kingdom_2025_Film_Poster.jpg" alt="Concert" />
            <p>Kingdom</p>
          </div>
          <div className="item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFXXUI4A2IDxh5qnWebhL8TIoFZ5n6NlFLBQ&s" alt="Concert" />
            <p>Stand Up Comedy</p>
          </div>
          <div className="item">
            <img src="https://media.istockphoto.com/id/1201711320/vector/indian-festival-of-colors-happy-holi-celebration-holi-club-party-of-colors-can-use-for.jpg?s=612x612&w=0&k=20&c=rh0ltoD-JwL1GJnuCXQcedeGFhB6gQkGV4Qn04TlMM4=" alt="Concert" />
            <p> Culturals</p>
          </div>
          
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works">
        <h3>How It Works</h3>
        <div className="steps">
          <div className="step">1️⃣ Choose your event, movie, or trip</div>
          <div className="step">2️⃣ Select your seats or ticket type</div>
          <div className="step">3️⃣ Make a secure payment</div>
          <div className="step">4️⃣ Get your e-ticket instantly</div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <h3>What Our Customers Say</h3>
        <blockquote>"This platform is amazing! Booking tickets is so easy!"</blockquote>
        <cite>- Rahul Sharma</cite>
      </section>

      {/* Description Section */}
      <section id="description" className="bg-slate-100 py-12 text-center">
        <p className="text-lg text-slate-700 mb-4 max-w-2xl mx-auto">
          We provide an easy and secure way to book your favorite tickets online.
        </p>
        <p className="text-lg text-slate-700 max-w-2xl mx-auto">
          Enjoy a seamless experience with multiple payment options and instant e-tickets.
        </p>
      </section>

      {/* Contact & Support Section */}
      <section id="contact">
        <div className="contact-container">
          <h3>Need Help?</h3>
          <p>Describe your issue below, and our team will assist you as soon as possible.</p>
          <form>
            <input type="text" id="query" name="query" placeholder="Enter your query..." required />
            <button type="submit" className="hero-btn">Submit & Contact Support</button>
          </form>
        </div>
      </section>

      {/* Footer should be at the bottom */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;