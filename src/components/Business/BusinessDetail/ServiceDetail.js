import { useState } from "react";
import Card from "../../UI/Card";
import classes from "./ServiceDetail.module.css";
const DUMMY_SERVICE_LIST = [
  { id: "test", name: "Business/Service category" },
  { id: "a1", name: "Engineer" },
  { id: "a2", name: "Programmer" },
  { id: "a3", name: "Developer" },
  { id: "a4", name: "Tester" },
  { id: "a5", name: "Coder" },
  { id: "a6", name: "Administrator" },
  { id: "a7", name: "Architect" },
];
const ServiceDetail = () => {
  const [ownerName, setOwnerName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessImage, setBusinessImage] = useState("");
  const [businessCategory, setBusinessCategory] = useState();
  const [timing, setTiming] = useState("");
  console.log(businessImage);
  return (
    <Card>
      <div className={classes.service}>
        <h1>Business/Service details</h1>
        <form>
          <input
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Owner name"
            value={ownerName}
            onChange={(event) => setOwnerName(event.target.value)}
          />

          <input
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Business name"
            value={businessName}
            onChange={(event) => setBusinessName(event.target.value)}
          />

          <select
            value={businessCategory}
            onChange={(event) => setBusinessCategory(event.target.value)}
          >
            {DUMMY_SERVICE_LIST.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
          <input
            type="file"
            name="image"
            placeholder="image"
            onChange={(event) => setBusinessImage(event.target.value)}
          />
          <input
            type="text"
            name="timing"
            autoComplete="off"
            placeholder="Business/Service timings "
            value={timing}
            onChange={(event) => setTiming(event.target.value)}
          />

          <button type="submit">Service</button>
        </form>
      </div>
    </Card>
  );
};
export default ServiceDetail;
