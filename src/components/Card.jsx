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
            <h5 className="card-title">{p.name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <hr />
          <ul className="">
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
