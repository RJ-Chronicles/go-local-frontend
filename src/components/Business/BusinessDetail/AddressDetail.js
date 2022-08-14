import { useState } from "react";
import Card from "../../UI/Card";
import classes from "./ServiceDetail.module.css";
const AddressDetail = () => {
  const [offline, setOffline] = useState(false);
  const [aToB, setaToB] = useState(false);
  const [area, setArea] = useState(false);
  const [fullCity, setFullCity] = useState(false);

  const offlineTypeHandler = (event) => {
    console.log(event.target.value);
    if (event.target.value === "A-to-B") {
      setArea(false);
      setaToB(true);
      setFullCity(false);
    } else if (event.target.value === "area") {
      setArea(true);
      setaToB(false);
      setFullCity(false);
    } else {
      setArea(false);
      setaToB(false);
      setFullCity(true);
    }
  };
  let content = (
    <div className={[classes.operation]} onChange={offlineTypeHandler}>
      <span>
        <input type="radio" name="offline" value="A-to-B" />
        <label>A to B</label>
      </span>
      <span>
        <input type="radio" name="offline" value="area" />
        <label>Area</label>
      </span>
      <span>
        <input type="radio" name="offline" value="city" />
        <label>Full City</label>
      </span>
    </div>
  );

  const operationalTypeHandler = (event) => {
    setArea(false);
    setaToB(false);
    setFullCity(false);
    if (event.target.value === "offline") {
      setOffline(true);
    } else {
      setOffline(false);
    }
  };

  return (
    <Card>
      <div className={classes.service}>
        <h1>Address Details</h1>
        <p>What is area of operation of your business/service? *</p>
        <div className={classes.operation} onChange={operationalTypeHandler}>
          <span>
            <input type="radio" name="operational_area" value="offline" />
            <label>Offline</label>
          </span>
          <span>
            <input type="radio" name="operational_area" value="online" />
            <label>Online</label>
          </span>
        </div>
        <hr />
        {offline && content}
        {aToB && (
          <div>
            <form>
              <input type="text" placeholder="From" autoComplete="off" />
              <input type="text" placeholder="To" autoComplete="off" />
            </form>
          </div>
        )}
        {area && (
          <div>
            <form>
              <input
                type="text"
                placeholder="Address line"
                autoComplete="off"
              />
              <input
                type="text"
                placeholder="Area/Town/City"
                autoComplete="off"
              />
              <input type="text" placeholder="Landmark" autoComplete="off" />
              <input type="text" placeholder="Pincode" autoComplete="off" />
            </form>
          </div>
        )}
        {fullCity && <h>LogicNotFound</h>}
      </div>
    </Card>
  );
};
export default AddressDetail;
