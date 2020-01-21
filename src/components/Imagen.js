import React from "react";
import { FaRegThumbsUp, FaEye } from "react-icons/fa";

const Imagen = props => {
  const { largeImageURL, likes, previewURL, tags, views } = props.imagen;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-md-lg3 mb-4">
      <div className="card">
        <img src={previewURL} alt={tags} className="card-img-top" />
        <div className="card-body">
          <p className="card-text">
            {likes} Me gusta <FaRegThumbsUp />
          </p>
          <p className="card-text">
            {views} Vistas <FaEye />{" "}
          </p>

          <a
            href={largeImageURL}
            target="blank"
            className="btn btn-primary btn-block "
          >
            {" "}
            Ver Imagen
          </a>
        </div>
      </div>
    </div>
  );
};

export default Imagen;
