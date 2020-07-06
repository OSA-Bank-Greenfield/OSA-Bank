import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
import SecurityIcon from '@material-ui/icons/Security';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

//import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

const styles = {
	grid: {
	  marginRight: "200px",
	  marginLeft: "200px",
	  width: "auto"
	}
  };
  
  
const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  return (
    <div className={classes.section}  className={classes.grid }>
      <div className={classes.container}>
        <div id="nav-tabs">
          <h3>Our Services</h3>
          <GridContainer>
              <CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Credibility",
                    tabIcon: LoyaltyIcon,
                    tabContent: (
                      <p className={classes.textCenter}>
                       Clients from diverse industries and global markets appreciate OSA Bank for its lean strategy approach, which has been developed over years and has accelerated successful delivery of Consulting, Implementation and Technology Outsourcing services. With focus on versatility, reliability and best customer benefit, OSA maintains close contact with its customers and follows a rigorous customer satisfaction programs. The credibility of services rendered is attained by stringent compliance to customer’s expectations in process enhancement, services deliverable, and cost competency. Internal statistics derived via regular interactions & feedback from customers helps OSA to analyze the performance of services. Benchmarking its own performances against competitors further enables OSA to maintain competitiveness. Customers’ involvement in quality assessment process has contributed in improving credibility and exceeding expectations in terms of service delivery, quality and cost.

 

Clients count on OSA’s Service Credibility because company is:

 <ul>
<li>
Commitment to client satisfaction: OSA Bank actions its commitment by linking the employee’s performance appraisals and merit increases to client’s observations. 
</li>
<li>
Consistent in performance: OSA Bank is committed to keep the promises that it makes. 
</li>
<li>
Committed to retain best resources: OSA Bank has build & maintained relationships by allocating the most suitable and best competent personnel for service engagement.
</li>
<li>
Equitable in compensation: OSA Bank understands that the quality of its service execution is directly dependent on the effectiveness of the allocated team. 
</li>
 
<li>
OSA Bank appreciates and understands that the basic prerequisite for target-oriented action is the knowledge of customers’ perception of its performance.
</li>
</ul>
                      </p>
                    )
                  },
                  {
                    tabName: "Accessibility",
                    tabIcon: AccessibilityIcon,
                    tabContent: (
                      <p className={classes.textCenter}>
                         Our goal is to ensure accessibility for our employees and the public we serve in our services, products and facilities.
						 The OSA Bank is committed to creating an accessible organization by removing barriers for people whether they work in the public field, do free business or are students who use our services every day.
						 OSA Bank has set standards for accessibility under the Accessibility, 2005.

The Integrated Accessibility Standards Regulation (OSA Bank Regulation 191/11), under the act, includes accessibility standards for Customer Service, Information and Communications, Employment, Transportation and the Design of Public Spaces. These important standards are designed to create a barrier-free and accessible OSA Bank by 2025.
                      </p>
                    )
                  },
                  {
                    tabName: "Security",
                    tabIcon: SecurityIcon,
                    tabContent: (
                      <p className={classes.textCenter}>
                        We're hosted on Amazon Web Services, one of the most prominent servers on the Web equipped with the best network protection tools. Our platform is carefully monitored 24/7 for potential threats and unauthorized activities, such as Man in the Middle Attacks or IP Spoofing. We thank Amazon for its long term experience in protecting both its physical and virtual structure, as well as its long commitment in securing and encrypting sensitive data and private information. We have the latest packages installed, updated whenever needed with a 256-bit SSL connection path between users and their OSA accounts and subaccounts. All data is encrypted and securely kept on Amazon's servers in multiple data centers across the United States.
                      </p>
                    )
                  }
                ]}
              />
            
            
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
 