import React from "react";
import "./body.css";

const Body = () => {
  return (
    <div>
      {/* <div id="poster_div"> */}
      <img id="poster" src="/assets/hero.svg" alt="Kaaba Image" />
      {/* </div> */}
      <section id="home" class="content-section">
        <h1 id="home-head">WELCOME TO ABU FATIMA ZOHRA TRAVEL AND TOURS</h1>
        <h2 id="home">Specialists in Hajj, umarah tours</h2>
        <p class="arabic-text">
          عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ أَنَّ النَّبِيَّ صَلَّى
          اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ لَا تُشَدُّ الرِّحَالُ إِلَّا إِلَى
          ثَلَاثَةِ مَسَاجِدَ الْمَسْجِدِ الْحَرَامِ وَمَسْجِدِي هَذَا
          وَالْمَسْجِدِ الْأَقْصَى
        </p>
        <p class="hadith-ref">Sahih Bukhari 1132</p>
      </section>
      <section id="about-us" class="content-section">
        <h2>About Us</h2>
        {/* <!--<p>We offer exceptional travel and tour services with a deep understanding of our clients’ needs and a passion for making their journeys memorable.</p>--> */}
        <p class="company-info">
          At Abu Fatima Zohra Travel and Tours, we understand that each traveler
          has their unique priorities and needs. We offer exceptional services
          to ensure your spiritual journeys are enriching and hassle-free.
          Whether you're embarking on Hajj, Umrah tour, we strive to provide the
          highest level of care and expertise. Our competitive rates and
          personalized service are designed to make your travel experience
          seamless and memorable.
        </p>
        <p class="company-info">
          Ready to take the next step? Get in touch with us to plan your
          journey, and let us handle the details so you can focus on what
          matters most. Our dedicated team is here to help, whether it's a
          pilgrimage to Hajj or umarah.
        </p>
      </section>
      {/* <!-- <section id="contact-us" class="content-section">
        <h2>Contact Us</h2>
        <p>Feel free to reach out for any inquiries.</p>
    </section> -->
    <!-- <section id="faqs" class="content-section">
        <h2>Frequently Asked Questions (FAQs)</h2>
        <p>Answers to common questions about our services.</p>
    </section> --> */}
      <section id="packages" class="contact-section">
        <div class="package-container">
          <div class="package-box">
            <h2>Basic Package</h2>
            <p>This package includes basic features for personal use.</p>
            <p class="price">$29/month</p>
            <button>Register Now</button>
          </div>
          <div class="package-box">
            <h2>Premium Package</h2>
            <p>Best for businesses with advanced features.</p>
            <p class="price">$59/month</p>
            <button>Register Now</button>
          </div>
        </div>
      </section>
      <section id="routes" class="content-section">
        <h2 id="routes-heading">Routes</h2>
        <table class="routes-table">
          <thead>
            <tr>
              <th>Cars or Equivalent</th>
              <th>4 Seater</th>
              <th>7 Seater</th>
              <th>Bus (49 Seater)</th>
              <th>Route</th>
              <th>Trip Duration</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hyundai H1 or Equivalent</td>
              <td>150</td>
              <td>250</td>
              <td>300</td>
              <td>Jeddah Airport to Jeddah Hotel or Vice Versa</td>
              <td>---</td>
              <td>150 | 250 | 300 | 550</td>
            </tr>
            <tr>
              <td>GMC or Equivalent</td>
              <td>550</td>
              <td>650</td>
              <td>800</td>
              <td>Jeddah Hotel to Jeddah Desert (Up & Down)</td>
              <td>5 Hours</td>
              <td>550 | 650 | 800 | 1100</td>
            </tr>
            <tr>
              <td>---</td>
              <td>650</td>
              <td>750</td>
              <td>900</td>
              <td>Makkah Hotel to Jeddah City (Up & Down)</td>
              <td>5 Hours</td>
              <td>650 | 750 | 900 | 1300</td>
            </tr>
            <tr>
              <td>---</td>
              <td>750</td>
              <td>850</td>
              <td>1100</td>
              <td>Jeddah Hotel to Taif City (Up & Down)</td>
              <td>---</td>
              <td>750 | 850 | 1100 | 1400</td>
            </tr>
            {/* <!-- Add more rows here as needed --> */}
          </tbody>
        </table>
      </section>
      {/* <!-- booking section --> */}
      <section class="booking-section">
        <div class="form-container">
          <h1>Find Your Best Umrah Package</h1>
          <p>Find the world's largest collection of Hajj & Umrah Packages</p>
          <form>
            <div class="elem-group">
              <label for="name">Name</label>
              <input type="text" placeholder="Full Name" />
            </div>
            <div class="elem-group">
              <label for="email">Email Address</label>
              <input type="email" placeholder="Email Id" />
            </div>
            <div class="elem-group">
              <label for="contact">Contact</label>
              <input type="tel" placeholder="Contact No." />
            </div>
            <br></br>
            <div class="elem-group">
              <label for="departure-airport">Departure</label>
              <input type="text" placeholder="Departure Airport" />
            </div>
            <div class="elem-group">
              <label for="arrival">Arrival</label>
              <input type="text" placeholder="Arrival Airport" />
            </div>
            <div class="elem-group">
              <label for="makkah-nights">Makkah Nights</label>
              <input type="text" placeholder="Makkah Nights" />
            </div>
            <div class="elem-group">
              <label for="madinah-nights">Madinah Nights</label>
              <input type="text" placeholder="Madinah Nights" />
            </div>
            <div class="elem-group">
              <label for="travel-date">Travel Date</label>
              <input type="date" placeholder="Travel Date" />
            </div>
            <div class="elem-group">
              <label for="room-selection">Room Preference</label>
              <select id="room-selection" name="room_preference" required>
                <option value="">Choose a Room from the List</option>
                <option value="single">Single Room</option>
                <option value="double">Double Room</option>
                <option value="suite">Suite</option>
              </select>
            </div>
            <div class="elem-group">
              <label for="checkin-date">Check-in Date</label>
              <input type="date" id="checkin-date" name="checkin" required />
            </div>

            <div class="elem-group">
              <label for="checkout-date">Check-out Date</label>
              <input type="date" id="checkout-date" name="checkout" required />
            </div>
            {/* <!-- <div class="elem-group">
                <input type="date" placeholder="Travel Date">
            </div> -->
            <!-- <div class="elem-group">
                <input type="text" placeholder="Accommodation">
            </div> --> */}
            <div class="elem-group">
              <label for="adult">Adults</label>
              <input type="number" placeholder="Adult 12+" />
            </div>
            <div class="elem-group">
              <label for="child">Children</label>
              <input type="number" placeholder="Child" />
            </div>
            <div class="elem-group">
              <label for="infant">Infant</label>
              <input type="number" placeholder="Infant below 2" />
            </div>
            <div class="elem-group">
              <button type="submit">Book Now</button>
            </div>
          </form>
        </div>
      </section>
      <section id="faqs" class="content-section">
        <div class="faq-container">
          <h1>Frequently Asked Questions</h1>
          <div class="faq-buttons">
            <a href="#" class="faq-btn">
              Hajj FAQs
            </a>
            <a href="#" class="faq-btn">
              Umrah FAQs
            </a>
            <a href="#" class="faq-btn">
              Packages FAQs
            </a>
          </div>
        </div>
        {/* <!-- Hajj FAQ Section --> */}
        <div id="hajj" class="faq-section">
          <h2>Hajj FAQs</h2>
          <p>Here you can add detailed questions and answers about Hajj.</p>
        </div>
        {/* <!-- Umrah FAQ Section --> */}
        <div id="umrah" class="faq-section">
          <h2>Umrah FAQs</h2>
          <p>Here you can add detailed questions and answers about Umrah.</p>
        </div>
        {/* <!--packages FAQ section--> */}
        <div id="package" class="faq-section">
          <h2>Packages FAQs</h2>
          <p>Here you can add detailed questions and answers about Packages.</p>
        </div>
      </section>
      {/* <!-- Contact Us Section --> */}
      <div class="about-us-section">
        <section id="contact-us" class="content-section">
          {/* <!-- <div class="about-us-section"> -->
            <!-- Call to Action --> */}
          <h2>Contact Us</h2>
          <p>Feel free to reach out for any inquiries.</p>
          <a
            href="mailto:abufatimatravelandtour@gmail.com"
            class="contact-link"
          >
            Contact us today
          </a>{" "}
          and begin your journey with us!
          {/* <!-- Optional Contact Button (floating) --> */}
          <div class="contact-button">
            <a href="mailto:abufatimatravelandtour@gmail.com">Contact Us</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Body;
