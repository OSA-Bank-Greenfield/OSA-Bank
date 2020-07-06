import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import image from "assets/img/faces/avatar.jpg";
import car from "assets/img/faces/car.png"
import house from 'assets/img/faces/house.png'
import business from 'assets/img/faces/businesss.png'
import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTypography() {
  const classes = useStyles();
  return (
  <div className={classes.section} style={{background: '#f7f7fa'}}>
	<div className={classes.space50} />
	<div id="images">
	  <div className={classes.title}>
		<h1><strong>Borrowing money is a big deal. We’re ready to help.</strong></h1>
	  </div>
	  <p style={{marginLeft:"30px", fontSize:"20px"}}>
	  From calculators and rate charts to get you started, to experienced loan officers and bankers, U.S. Bank has answers for all your loan and mortgage questions.
	  </p>
	  <br />
	  <GridContainer>
	  <GridItem xs={12} sm={3} style={{marginLeft:"150px",marginRight:"15px"}} >
		  
		  <img
			src={house}
			alt="..."
			className={
			  classes.imgRaised +
			  " " +
			  classes.imgRounded +
			  " " +
			  classes.imgFluid
			}
		  />
		  <h4>Home mortgage</h4>
		  <a href="/housesimulator">Calculate your mortgage payment </a>
		</GridItem>
		<GridItem xs={12} sm={3}  style={{marginLeft:"15px",marginRight:"15px"}}>
		  
		  <img
			src={car}
			alt="..."
			className={
			  classes.imgRaised +
			  " " +
			  classes.imgRounded +
			  " " +
			  classes.imgFluid
			}
		  />
		  <h4>Auto loan</h4>
		  <a href="/carsimulator">Calculate your auto loan payment  </a>
		</GridItem>
		<GridItem xs={12} sm={3} style={{marginLeft:"15px",marginRight:"150px"}}>
		  
		  <img
			src={business}
			alt="..."
			className={
			  classes.imgRaised +
			  " " +
			  classes.imgRounded +
			  " " +
			  classes.imgFluid
			}
		  />
		  <h4>Business Loan</h4>
		  <a href="/businesssimulator">Calculate your business loan payment  </a>
		</GridItem>
	  </GridContainer>
	  <GridContainer />
	</div>
	</div>
	
  );
} 