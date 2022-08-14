import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./UserInput.module.css";
const UserInput = (props) => {
  return (
    <Card>
      <div className={classes["user-input"]}>
        <h1>Welcome to GoLokal</h1>
        <p>Expand your business with GoLokal in 4 easy steps!!</p>
        <div>
          <div>
            <i className="fa-solid fa-square-check"></i>{" "}
            <span>Business/Service details</span>
          </div>
          <div>
            <i className="fa-solid fa-square-check"></i>{" "}
            <span>Contact details</span>
          </div>
          <div>
            <i className="fa-solid fa-square-check"></i>{" "}
            <span>Address details</span>
          </div>
          <div>
            <i className="fa-solid fa-square-check"></i>{" "}
            <span>Verification details</span>
          </div>
        </div>
        <Button text="Let's Start" onClick={props.onClickLetsStart} />
      </div>
    </Card>
  );
};

export default UserInput;
