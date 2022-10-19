import { useParams } from "react-router-dom";
import context from "../context";
import { useContext } from "react";

const Detalle = () => {
  const { pizzas } = useContext(context);
  const { id } = useParams();

  const pizzaSelected = pizzas.find((p) => p.id === id);
  
  return(
   <>
  {pizzaSelected && (
  <div className="card mb-3" style={{ maxWidth:"540px"}} >
    <div className="row g-0">
      <div className="col-md-4">
        <img
          src={pizzaSelected.img}
          className="img-fluid rounded-start"
          alt="..."
        />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
           {pizzaSelected.desc}
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </div>
  )}
  </> 
  );
};

export default Detalle;
