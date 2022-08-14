import React from "react";
import StepProgressBar from "react-step-progress";
// import the stylesheet
import "react-step-progress/dist/index.css";
import ServiceDetail from "./ServiceDetail";
import ContactDetail from "./ContactDetail";
import AddressDetail from "./AddressDetail";
import Verification from "./Verification";
export default function ServiceDetailProgressBar() {
  const step1Content = <ServiceDetail />;
  const step2Content = <ContactDetail />;
  const step3Content = <AddressDetail />;
  const step4Content = <Verification />;

  // setup step validators, will be called before proceeding to the next step
  function step2Validator() {
    return true;
  }

  // function step3Validator() {
  //   // return a boolean
  // }
  return (
    <div className="App">
      <StepProgressBar
        startingStep={0}
        steps={[
          {
            label: "Step1",
            name: "Service Detail",
            content: step1Content,
          },
          {
            label: "Step2",
            name: "Address Detail",
            content: step2Content,
          },
          {
            label: "Step3",
            name: "Contact Detail",
            content: step3Content,
            validator: step2Validator,
          },
          {
            label: "Step4",
            name: "Finish",
            content: step4Content,
          },
        ]}
      />
    </div>
  );
}
