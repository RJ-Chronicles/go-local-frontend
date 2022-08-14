import classes from "./Welcome.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
const Welcome = (props) => {
  return (
    <Card>
      <div className={classes.welcome}>
        <h1>Welcome to GoLokal</h1>
        <p>
          One-stop solution for all your local search is here - GoLokal, India's
          youngest and fastest growing Local Search engine
        </p>
        <Button text="Let's Start" onClick={props.onClick} />
        <Link to="/explore">Skip</Link>
      </div>
    </Card>
  );
};

export default Welcome;
