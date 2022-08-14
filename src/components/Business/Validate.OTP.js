import { useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./Validate.OTP.module.css";

// const showTimeOut = (time)=> {

//   var remainingTime = time - 60000;

//   setTimeout(function() {
//     setInterval(function(){
//       time= time - 1000;
//       console.log((time/1000)%60);
//     }, 1000);
//   }, remainingTime);
// }

//modalPopUp(60000);
const ValidateOTP = (props) => {
  //const [timer,setTimer] =useState(60)
  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();
  const forthRef = useRef();
  const fifthRef = useRef();
  const sixthRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    let otp =
      firstRef.current.value +
      secondRef.current.value +
      thirdRef.current.value +
      forthRef.current.value +
      fifthRef.current.value +
      sixthRef.current.value;
    console.log(otp);
    props.onAddOTP(otp);
  };
  return (
    <Card>
      <div className={classes.otp}>
        <h2>Enter OTP</h2>
        <p>
          Login with a mobile OTP. This is all that we will ever ask from you!!
        </p>
        <form onSubmit={submitHandler}>
          <input type="text" min="1" max="9" ref={firstRef} />
          <input type="text" min="1" max="9" ref={secondRef} />
          <input type="text" min="1" max="9" ref={thirdRef} />
          <input type="text" min="1" max="9" ref={forthRef} />
          <input type="text" min="1" max="9" ref={fifthRef} />
          <input type="text" min="1" max="9" ref={sixthRef} />
          <Button text="Submit" type="submit" onClick={null} />
        </form>
      </div>
    </Card>
  );
};

export default ValidateOTP;
