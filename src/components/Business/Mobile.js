import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Mobile.module.css";
const Mobile = (props) => {
  const [mobile, setMobile] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    if (mobile.trim().length === 0) {
      return;
    }
    props.onAddMobile(mobile);
  };
  return (
    <Card>
      <div className={classes.mobile}>
        <form onSubmit={submitHandler}>
          <label htmlFor="number">Enter your mobile number</label>
          <input
            type="number"
            id="number"
            value={mobile}
            onChange={(event) => setMobile(event.target.value)}
          />
          <Button text="submit" type="submit" onClick={null} />
        </form>
      </div>
    </Card>
  );
};
export default Mobile;
