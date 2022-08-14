import Card from "../../UI/Card";
import classes from "./ServiceDetail.module.css";
import { useState } from "react";
const Verification = (props) => {
  const [ownerAadhaar, setOwnerAadhaar] = useState("");
  const [ownerPan, setWonerPan] = useState("");
  //const [proof, setPro] = useState('');
  const [devoteeName, setDevoteeName] = useState("");
  const [devoteeContact, setDevoteeContact] = useState("");
  const [connectedTo, setConnectedTo] = useState("");
  return (
    <Card>
      <div className={classes.service}>
        <h1>Verification details</h1>
        <form>
          <input
            type="number"
            name="aadhaar"
            autoComplete="off"
            placeholder="Aadhaar card number *"
            value={ownerAadhaar}
            onChange={(event) => setOwnerAadhaar(event.target.value)}
          />

          <input
            type="text"
            name="pan"
            autoComplete="off"
            placeholder="PAN card number *"
            value={ownerPan}
            onChange={(event) => setWonerPan(event.target.value)}
          />

          <input
            type="file"
            name="proof"
            autoComplete="off"
            placeholder="Registered business proof "
            // value={whatsApp}
            // onChange={(event) => setWhatsApp(event.target.value)}
          />
          <input
            type="text"
            name="devotee"
            autoComplete="off"
            placeholder="Devotee reference name "
            value={devoteeName}
            onChange={(event) => setDevoteeName(event.target.value)}
          />

          <input
            type="text"
            name="devotee"
            autoComplete="off"
            placeholder="Devotee reference name "
            value={devoteeContact}
            onChange={(event) => setDevoteeContact(event.target.value)}
          />

          <input
            type="text"
            name="devotee"
            autoComplete="off"
            placeholder="Devotee reference name "
            value={connectedTo}
            onChange={(event) => setConnectedTo(event.target.value)}
          />

          <button type="submit">Contact</button>
        </form>
      </div>
    </Card>
  );
};
export default Verification;
