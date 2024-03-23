import { BeanStoreData } from "../components/Zustand";
import "../abstracts/Status.scss"
import drone from "../logos/drone.png"
import { Link } from "react-router-dom";

const Status = () => {
  const beanData = BeanStoreData((state) => state.beanData);
  if (!beanData) {
    return <div></div>;
  }
  const { /* orderNr */ eta } = beanData;
  return (
    <div className="status_container">
      <div className="status_order_container">
      <p className="status_order">Ordernummer</p>
      <p className="status_order_eta">#12DV23F</p>
     {/* orderNr  */}
      </div>
      <img src={drone} alt="drone" className="status_drone_img"/>
      <h1 id="status_text">Din beställning <br /> 
     </h1>
      <h1 id="status_text2"> 
      är på väg!</h1>

      <div className="status_time_container">
      <p className="status_eta_time">{eta} minuter</p>

       </div>
       <Link to="/menu" className="status_link">
      <button className="status_button">Ok, cool!</button>
      </Link>
    </div>
  );
};

export default Status;