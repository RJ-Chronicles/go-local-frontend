import { useState } from "react";
import Card from "../../UI/Card";
import classes from "./ServiceDetail.module.css";
const ContactDetail = () => {
  const [ownerContact, setOwnerContact] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [whatsApp, setWhatsApp] = useState("");
  const [website, setWebsite] = useState("");
  return (
    <Card>
      <div className={classes.service}>
        <h1>Contact details</h1>
        <form>
          <input
            type="number"
            name="contact"
            autoComplete="off"
            placeholder="Mobile number *"
            value={ownerContact}
            onChange={(event) => setOwnerContact(event.target.value)}
          />

          <input
            type="email"
            name="email"
            autoComplete="off"
            placeholder="Email ID"
            value={businessEmail}
            onChange={(event) => setBusinessEmail(event.target.value)}
          />

          <input
            type="number"
            name="what'sApp"
            autoComplete="off"
            placeholder="WhatsApp number "
            value={whatsApp}
            onChange={(event) => setWhatsApp(event.target.value)}
          />
          <input
            type="url"
            name="website"
            autoComplete="off"
            placeholder="Website/Social media links "
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
          />

          <button type="submit">Contact</button>
        </form>
      </div>
    </Card>
  );
};
export default ContactDetail;
