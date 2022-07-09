import React, {useState} from 'react';
import { Outlet } from "react-router-dom";
import { Stepper, StepLabel, Step , Button} from "@material-ui/core";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import Form5 from "./Form5"; 
import Form6 from "./Form6";
import Form7 from "./Form7";
import WidowForm from "./WidowForm";
 
const FormDisplay = ({ step, Form }) => {
	// const fn= localStorage.getItem('nav');
	return (
		<div className="Linear">
			<div className="center-stepper ">
				<Stepper  activeStep={step-1} orientation = "horizontal">
					<Step>
						<StepLabel></StepLabel>
					</Step>
					<Step>
						<StepLabel></StepLabel>
					</Step>
					<Step>
						<StepLabel></StepLabel>
					</Step>
					<Step>
						<StepLabel></StepLabel>
					</Step>
					<Step>
						<StepLabel></StepLabel>
					</Step>
					<Step>
						<StepLabel></StepLabel>
					</Step>
					<Step>
						<StepLabel></StepLabel>
					</Step>
					<Step>
						<StepLabel></StepLabel>
					</Step>
				</Stepper>
			</div>
			<div>
				<Form />
			</div>			
		</div>
	);
}

export default FormDisplay;