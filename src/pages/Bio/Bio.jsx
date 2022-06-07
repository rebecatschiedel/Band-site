import React from "react";
import About from "../../components/About/About";
import Hero from "../../components/Hero/Hero";
import Gallery from "../../components/Photo-gallery/Gallery";
import Comments from "../../components/Comments/Comments";

export default function Bio() {
  return (
    <main>
      <Hero />
      <About />
      <Gallery />
      <Comments />
    </main>
  );
}
