import context from "../context";
import { useContext } from "react";
import {useNavigate} from 'react-router-dom';

const Card = () => {
  const { pizzas } = useContext(context);

const navigate = useNavigate();
  return (
    <>
      {pizzas.map((p, i) => (
        <div key={i} className="card" style={{ width: "18rem" }}>
          <img src={p.img} className="card-img-top" alt={p.name} />
          <div className="card-body">
            <h3 className="card-title">{p.name}</h3>
          </div>
          <hr />
          <ul className="">
          <h5>Ingredientes:</h5>
            {p.ingredients.map((i, index) => (
              <li key={index} className="list-group-item">{i}</li>
            ))}
          </ul>
          <hr />
          <div className="card-body">
            <button type="button" className="btn btn-info" onClick={() => navigate(`/pizzas/${p.id}`)}>
              Ver más
            </button>
            <button type="button" className="btn btn-danger">
              Añadir
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
