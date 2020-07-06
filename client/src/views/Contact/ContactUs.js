import React from 'react';
// import './contact.css';
import axios from 'axios';
import Response from './Response';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			subject: '',
			message: '',
			contacts: [],
			sent: false
		}
	}

	// Handle the inputs 
	handleChangeName = (e) => {
		this.setState({
			name: e.target.value,
		});
		console.log('name: ',this.state.name)
	}
	handleChangeEmail = (e) => {
		this.setState({
			email: e.target.value,
		});
		console.log('email: ',this.state.email)
	}
	handleChangeSubject = (e) =>{
		this.setState({
			subject: e.target.value,
		});
		console.log('subject: ', this.state.subject)
	}
	handleChangeMessage = (e) => {
		this.setState({
			message: e.target.value,
		});
		console.log('message: ',this.state.message)
	}

// Handle the submit
	handleSubmit = (e) => {
		e.preventDefault();

		const contact = {
		 name: this.state.name,
		 email: this.state.email,
		 subject: this.state.subject,
		 message: this.state.message
		};

		axios.post('/api/forma',contact)
		.then(res=>{
		  this.setState({
			sent:true,
		  })
		})
		.catch(()=>{
		  console.log('message not send');
		  
		})		
	}
 
	// changeView=()=> {
	// 	ReactDOM.render(<Response name={this.state.name} subject={this.state.subject} email={this.state.email}/>, document.getElementById('root'));
	// }

	render() {
		return (
		<div>
			<h2 style={{marginTop: "35px", marginRight: "560px"}}>Contact Us: </h2>
				<div className="container-fluid">
				
			<div className="row">
			  <div className="col-lg-6 col-md-6 col-sm-6">
				<div className="form-wrapper">
				  <form  onSubmit={this.handleSubmit}>
					
					<div className="form-group">
					  <label className="sr-only" forhtml="name">Name</label>
					  <div className="input-group">
						<div className="input-group-addon">
						  <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
						</div>
						<input type="text" className="form-control" name="name" placeholder="Name" onChange={this.handleChangeName} value={this.state.name}/>
					  </div>
					</div>
					<div className="form-group">
					  <label className="sr-only" forhtml="email">Email</label>
					  <div className="input-group">
						<div className="input-group-addon">
						  <span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>
						</div>
						<input type="text" className="form-control" id="email" placeholder="Email" onChange={this.handleChangeEmail} value={this.state.email} required/>
					  </div>
					</div>
					<div className="form-group">
					  <label className="sr-only" forhtml="subject">Subject</label>
					  <div className="input-group">
						<div className="input-group-addon">
						  <span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
						</div>
						<input type="text" className="form-control" id="subject" placeholder="Subject" onChange={this.handleChangeSubject} value={this.state.subject}/>
					  </div>
					</div>
					<div className="form-group">
					  <label className="sr-only" forhtml="message">Message</label>
					  <textarea className="form-control" id="message" rows="6" placeholder="Message" onChange={this.handleChangeMessage} value={this.state.message}></textarea>
					</div>
		  
					
					<div className="btn-group pull-right" role="group">
					  <button type="reset" className="btn btn-default">
						<span className="glyphicon glyphicon-remove" aria-hidden="true"></span> Reset
					  </button>
					  <button type="submit" className="btn btn-primary submit">
						<span className="glyphicon glyphicon-envelope" aria-hidden="true"></span> Submit
					  </button>
					</div>
		 		  </form>
				</div>
			  </div>
			</div>
		  </div>
		</div>
		);
	}
	
}

export default Contact;