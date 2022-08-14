import { Fragment, useState } from "react";
import Welcome from "../components/Business/Welcome";
import Mobile from "../components/Business/Mobile";
import ValidateOTP from "../components/Business/Validate.OTP";
import UserInput from "../components/Business/UserInput";
import ServiceDetailProgressBar from "../components/Business/BusinessDetail/ServiceDetailProgressBar";
const Business = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showMobile, setShowMobile] = useState(false);
  const [shoOtp, setShowOpt] = useState(false);
  const [showUserInput, setShowUserInput] = useState(false);
  const [showServiceDetail, setShowServiceDetail] = useState(false);
  const welcomeHandler = () => {
    setShowWelcome(false);
    setShowMobile(true);
  };
  const mobileNumberHandler = (mobileNumber) => {
    setShowMobile(false);
    setShowOpt(true);
  };
  const otpHandler = (otp) => {
    setShowOpt(false);
    setShowUserInput(true);
  };
  const userInputHandler = () => {
    setShowUserInput(false);
    setShowServiceDetail(true);
  };
  return (
    <Fragment>
      {showWelcome && <Welcome onClick={welcomeHandler} />}
      {showMobile && <Mobile onAddMobile={mobileNumberHandler} />}
      {shoOtp && <ValidateOTP onAddOTP={otpHandler} />}
      {showUserInput && <UserInput onClickLetsStart={userInputHandler} />}
      {showServiceDetail && <ServiceDetailProgressBar />}
    </Fragment>
  );
};

export default Business;
