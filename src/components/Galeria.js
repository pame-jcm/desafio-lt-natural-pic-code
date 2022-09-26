import "../assets/css/galeria.css";

import { useContext } from "react";
import Context from "../Context";

import Heart from "./Heart";

export default function Home() {

  const { fotos, setFotos } = useContext(Context);
  
  const agregarImagen = (id) => {
    
    const photos = fotos.map(f => {
      if(f.id === id){
        f.favorito = !f.favorito;
      }
      return f;
    });

    setFotos(photos);
  };

  return (
    <div className="galeria grid-columns-5 p-3">
      {fotos.map(({id, src, desc, favorito}) => (
          <div className="foto" 
            key={id} 
            onClick={() => agregarImagen(id)}
            >
              <Heart filled={favorito}/>
              <img src={src}/>
              <p>{desc}</p>
          </div>
        ))}
    </div>
  );
}
