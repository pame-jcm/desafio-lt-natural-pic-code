import { useContext } from "react";
import Context from "../Context";
import Heart from "../components/Heart";

export default function Favoritos() {

  const { fotos, setFotos } = useContext(Context);

  const quitarImagen = (id) => {
    
    const photos = fotos.map(f => {
      if(f.id === id){
        f.favorito = !f.favorito;
      }
      return f;
    });

    setFotos(photos);
  };

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
      {fotos.filter(f=> f.favorito === true).map(({id, src, desc, favorito}) => (
          <div className="foto" 
            key={id} 
            onClick={() => quitarImagen(id)}
            >
              <Heart filled={favorito}/>
              <img src={src}/>
              <p>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
