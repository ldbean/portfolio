import React from "react";
import Thumbnail from "../thumbnail/thumbnail";

function Projects(props) {
    return (
      <div className="Projects">
        <h1>Projects</h1>
        <Thumbnail
          link="/pierced"
          image="https://picsum.photos/300/300"
          title="Pierced"
          category="Sculpts"
        />
        <Thumbnail
          link="/cathedral"
          image="https://picsum.photos/300/300"
          title="Cathedral"
          category="Apps"
        />
        <Thumbnail
          link="/"
          image="https://picsum.photos/300/300"
          title="Pierced"
          category="Sculpts"
        />
        <Thumbnail
          link="/pierced"
          image="https://picsum.photos/300/300"
          title="Pierced"
          category="Sculpts"
        />
      </div>
    );
  }
  
  export default Projects;