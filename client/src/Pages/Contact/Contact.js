import React from 'react';
import axios from 'axios';
class Contact extends React.Component {
	state = {
		FullName: '',
		Phone: '',
		Email: '',
		Description: ''
	};
	handleInputChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		this.setState({
			[name]: value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		console.log('handleSubmit');
		this.addContact()
	};
	addContact = () => {
        axios
			.post('http://localhost:3001/api/contact' , {
				FullName: this.state.FullName,
				Phone: this.state.Phone,
                Email: this.state.Email,
                Description: this.state.Description,
			})
			.then((res) => res)
			.then((json) => {
				console.log(json);
			})
			.catch((err) => console.log(err));
    };

	render() {
		return (
			<div>
				<h1>Contact</h1>
				<form>
					<div className="input-group">
						<label htmlFor="FullName">Full Name</label>
						<input
							onChange={this.handleInputChange}
							value={this.state.FullName}
							type="text"
							name="FullName"
							className="login-input"
							placeholder="FullName"
						/>
					</div>

					<div className="input-group">
						<label htmlFor="Phone">Phone</label>
						<input
							onChange={this.handleInputChange}
							value={this.state.Phone}
							type="number"
							name="Phone"
							className="phone"
							placeholder="Phone"
						/>
					</div>
					<div className="input-group">
						<label htmlFor="Email">Email</label>
						<input
							onChange={this.handleInputChange}
							value={this.state.Email}
							type="text"
							name="Email"
							className="Email"
							placeholder="Email"
						/>
					</div>
					<div className="input-group">
						<label htmlFor="Description">Description</label>
						<input
							onChange={this.handleInputChange}
							value={this.state.Description}
							type="text-box"
							name="Description"
							className="Description"
							placeholder="Description"
						/>
					</div>

					<button type="button" className="Submit-btn" onClick={this.handleSubmit}>
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default Contact;
