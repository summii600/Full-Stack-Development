/* TITLE: Creating a Single Page website using the concepts in React like Hooks, Router, Props and States.
  NAME: Mirza Sumaiya
  BRANCH: AI & Data Science (2nd Year)
*/
// --- 1. Navbar.js ---
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#f0f0f0' }}>
            <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
            <Link to="/about" style={{ marginRight: '15px' }}>About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
}
export default Navbar;

// --- 2. Home.js ---
import React from 'react';

function Home() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Welcome to the React SPA!</h2>
            <p>This is the Home page.</p>
        </div>
    );
}
export default Home;

// --- 3. About.js (Using Props) ---
import React from 'react';

function About({ info }) {
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>About the Developer</h2>
            <p><strong>Name:</strong> {info.name}</p>
            <p><strong>Profession:</strong> {info.profession}</p>
            <p><strong>Email:</strong> {info.email}</p>
        </div>
    );
}
export default About;

// --- 4. Contact.js (Using Hooks & State) ---
import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({ name: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Contact Us</h2>
            {!submitted ? (
                <form onSubmit={handleSubmit}>
                    <div><input name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} required /></div>
                    <div style={{ margin: '10px 0' }}><textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required /></div>
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <p>Thank you, {formData.name}! Your message has been received.</p>
            )}
        </div>
    );
}
export default Contact;

// --- 5. App.js (Main Logic & Routing) ---
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
    const developerInfo = {
        name: 'Jane Doe',
        profession: 'Frontend Developer',
        email: 'jane@example.com'
    };

    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About info={developerInfo} />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
}
export default App;
