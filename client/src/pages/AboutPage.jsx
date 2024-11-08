// AboutPage.jsx
import React from "react";
import "./styles/AboutPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutPage = () => (
  <div>
  <div className="about-page">
    <Header />
    <section className="about-hero">
      <img
        src="https://scontent.fotp7-2.fna.fbcdn.net/v/t1.18169-9/11226_10151311438532971_1775624136_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEHhUjXrDCNFHD1To8ffpasg2v1g7OpqF-Da_WDs6moX14TdbXffqdLgyu6OrJKztSnT_NDkAiKAxUd_H-ymjeh&_nc_ohc=Evm4TPjmVXcQ7kNvgGRbRvd&_nc_zt=23&_nc_ht=scontent.fotp7-2.fna&oh=00_AYDKe0ej27ySPQnTu-s2DyWDzJnHb4HbQQDUx5Jnley8pA&oe=67545A70"
        alt="Dr. [Name]"
        className="about-image"
      />
      <div className="about-text">
        <h1>Meet Dr. Oana Curca </h1>
        <p>
          Dr. [Name] has dedicated over [X years] to advancing dental health
          through implantology and patient-centered care. With specialized
          training in dental implants, she has helped countless patients regain
          their smiles and confidence.
        </p>
      </div>
    </section>

    <section className="about-qualifications">
      <h2>Qualifications & Expertise</h2>
      <ul>
        <li>DDS, [University, Graduation Year]</li>
        <li>
          Certification in Dental Implantology from [Certification Institution]
        </li>
        <li>Member of [Professional Organizations]</li>
        <li>Over [X] successful implant procedures performed</li>
      </ul>
    </section>

    <section className="about-philosophy">
      <h2>Patient Care Philosophy</h2>
      <p>
        Dr. [Name] believes that each patient’s journey is unique and
        prioritizes comfort, precision, and understanding in her approach. Her
        goal is to ensure that every patient not only receives high-quality care
        but also feels informed and at ease throughout the process.
      </p>
    </section>

    <section className="about-image-section">
      <h2>Discover more about Dr. Oana</h2>
      <img
        src="https://roger24.de/sites/default/files/userimages/doctors/oanairinacurca.jpg"
        alt="Dr. [Name] Portrait"
        className="discover-image"
      />
    </section>

    <section className="gallery-section">
      <h2>Gallery</h2>
      <div className="image-gallery">
        <img
          src="https://scontent.fotp7-2.fna.fbcdn.net/v/t1.18169-9/11071720_10153829946337971_8019900621391806897_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeH32aAWElEY76KKBQSbqs6KHwdKMYVFPPcfB0oxhUU89wwviLpsQ7YxBJ0887lJyvnnU-PmOkbewO8HURRKp8sS&_nc_ohc=fp6krEGXWJEQ7kNvgFyOm0L&_nc_zt=23&_nc_ht=scontent.fotp7-2.fna&oh=00_AYBVQ5WHkAL-eVcZ4GrkJW5kdx33E1DvFCApNAOU5n3JXg&oe=67543262"
          alt="Dr. [Name] 1"
        />
        <img
          src="https://scontent.fotp7-2.fna.fbcdn.net/v/t31.18172-8/14047362_10154879506647971_3515762886525120156_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeG1YHH9Fl30MSpfVWP9p1X49iPzM1yk22b2I_MzXKTbZhh5j03x4241XDe4M7Wh6IoxVcPZrSfD3w7ebSECMGC9&_nc_ohc=TeOUzNBUjuEQ7kNvgF-dITY&_nc_zt=23&_nc_ht=scontent.fotp7-2.fna&_nc_gid=AAAJNBpyg5BT8w2JlABB5bI&oh=00_AYAbcvH_MdFN1gR5u-f6xMwyJ2EKvc67LZ2-PqgtCrqsYw&oe=6754402A"
          alt="Dr. [Name] 2"
        />
        <img
          src="https://scontent.fotp7-2.fna.fbcdn.net/v/t39.30808-6/310380881_10160712698652971_671512141960716499_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGSM7XgTDEq7A-6x7RsnuoRHd1LXFG194Id3UtcUbX3gsFoCbBYf_u-Gj2OU2LvAwx_H2H2u621TAxPwhBCaz1S&_nc_ohc=bTlQy5p9XMkQ7kNvgEx3Z4f&_nc_zt=23&_nc_ht=scontent.fotp7-2.fna&_nc_gid=AtrKiyPR0NbB6RJ0v8oEH0N&oh=00_AYAC1Mnril40xHJfDoUZNFXI8sBiUen5OoMr6X_NJ5hvlA&oe=6732A506"
          alt="Dr. [Name] 3"
        />
        <img
          src="https://scontent.fotp7-2.fna.fbcdn.net/v/t1.18169-9/11226_10151311438532971_1775624136_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEHhUjXrDCNFHD1To8ffpasg2v1g7OpqF-Da_WDs6moX14TdbXffqdLgyu6OrJKztSnT_NDkAiKAxUd_H-ymjeh&_nc_ohc=Evm4TPjmVXcQ7kNvgGRbRvd&_nc_zt=23&_nc_ht=scontent.fotp7-2.fna&oh=00_AYDKe0ej27ySPQnTu-s2DyWDzJnHb4HbQQDUx5Jnley8pA&oe=67545A70"
          alt="Dr. [Name] 4"
        />
      </div>
    </section>
  </div>

<Footer />
</div>
);

export default AboutPage;
