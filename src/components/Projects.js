import React from 'react';
import './projects.css'; // Ensure you import the CSS file

const Projects = () => (
  <div className="container fade-in">
    <h1>Projects</h1>
    <div className="project-list">
      <div className="project-item">
        <h2>Automatic College Bell</h2>
        <p>A system to automate bell ringing at specified times using an ESP8266 microcontroller.</p>
        <ul>
          <li><strong>Hardware:</strong> ESP8266, LED, resistor, breadboard, jumper wires</li>
          <li><strong>Software:</strong> Arduino IDE, ESP8266WiFi, NTPClient, WiFiUdp</li>
          <li><strong>License:</strong> GNU GLP V3</li>
        </ul>
      </div>
      <div className="project-item">
        <h2>Coldfetch</h2>
        <p>System information fetcher with a minimalistic UI, similar to neofetch.</p>
        <ul>
          <li><strong>Dependencies:</strong> bash, lsblk, dmidecode, sensors, etc.</li>
          <li><strong>License:</strong> GNU General Public License v3.0</li>
        </ul>
      </div>
      <div className="project-item">
        <h2>My Portfolio Website</h2>
        <p>Showcases projects, skills, and services in web development and cybersecurity.</p>
        <ul>
          <li><strong>Technologies:</strong> HTML, CSS, JavaScript</li>
          <li><strong>License:</strong> BSD 3-Clause License</li>
        </ul>
      </div>
      <div className="project-item">
        <h2>To-Do List</h2>
        <p>A simple to-do list application with persistent data using Local Storage.</p>
        <ul>
          <li><strong>File Structure:</strong> index.html, styles.css, script.js</li>
        </ul>
      </div>
      <div className="project-item">
        <h2>mr-renamerbot</h2>
        <p>A Telegram bot for file renaming and conversion with support for subscriptions.</p>
        <ul>
          <li><strong>Deployment:</strong> Heroku or local server</li>
          <li><strong>Support:</strong> Open issues on GitHub for problems</li>
        </ul>
      </div>
      <div className="project-item">
        <h2>Simple Login Page</h2>
        <p>A simple login page with client-side validation and password visibility toggle.</p>
        <ul>
          <li><strong>Technologies:</strong> HTML, CSS, JavaScript</li>
          <li><strong>License:</strong> GNU General Public License v2.0</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Projects;
