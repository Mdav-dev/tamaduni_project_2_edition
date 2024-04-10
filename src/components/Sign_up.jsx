import {useState, useEffect} from "react";
import Header from "./Header";
import{AiFillGoogleSquare, AiFillFacebook} from "react-icons/ai"
import { FcGoogle } from "react-icons/fc";


function Sign_up(){
	const[mobile, setMobile] = useState(false);
	
	useEffect(() => {
		function getScreenSize() {
		  return window.screen.width;
		}
	 
		if (getScreenSize() < 500) {
		  setMobile(true);
		}
	   }, []); 

	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
	      });
	    
	      const [formErrors, setFormErrors] = useState({});
	      const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	    
	      const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
		setFormErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
	      };
	    
	      const handleSubmit = (e) => {
		e.preventDefault();
		// Validate form data
		const errors = validateForm(formData);
		setFormErrors(errors);
	    
		// If there are no errors, simulate form submission
		if (Object.keys(errors).length === 0) {
		  setIsFormSubmitted(true);
		  // In a real-world scenario, you would handle form submission to a server here
		  console.log('Form submitted:', formData);
		}
	      };
	    
	      const validateForm = (data) => {
		let errors = {};
	    
		if (!data.username.trim()) {
		  errors.username = 'Username is required';
		}
	    
		if (!data.email.trim()) {
		  errors.email = 'Email is required';
		} else if (!isValidEmail(data.email)) {
		  errors.email = 'Invalid email address';
		}
	    
		if (!data.password.trim()) {
		  errors.password = 'Password is required';
		} else if (data.password.length < 6) {
		  errors.password = 'Password must be at least 6 characters';
		}
	    
		if (data.password !== data.confirmPassword) {
		  errors.confirmPassword = 'Passwords do not match';
		}
	    
		return errors;
	      };
	    
	      const isValidEmail = (email) => {
		// Basic email validation, you might want to use a library for more comprehensive validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	      };
	      const container = {
			display: "grid",
			gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
			gridTemplateRows: "1fr 1fr 1fr 1fr",
			height:mobile?"":"100vh"
	      }
	      const sub_container = {
			gridColumn:mobile?"1/7":"4/7",
			gridRow:mobile?"2/5":"1/6",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems:"center",		
	      }


		 const aa = {
			position: "relative",
			width: "100%",
			paddingBottom: "7%",
			// overflow: "hidden",	
		}
		 const image_container = {
			...aa,
			gridColumn:mobile?"1/7":"1/4",
			gridRow:mobile?"1/2":"1/6",			
		 }
		 const ab = {
			position: "absolute",
			top: "0",
			left: "0",
			width: "100%",
			height: "100%",
			objectFit: "cover",
		}


		const inputBox = {
			width: '100%',
			padding: '10px',
			marginBottom: '10px',
			border: '1px solid #ccc',
			borderRadius: '5px',
			boxSizing: 'border-box',
			display: 'block',
		   }
		   const submitButton = {
			width: '100%',
			padding: '10px',
			backgroundColor: '#007bff',
			color: '#fff',
			border: 'none',
			borderRadius: '5px',
			cursor: 'pointer',
		   }
		   const dc = {
			fontFamily:"\"Courgette\", cursive",
			fontWeight:"400",
			fontStyle:"normal",
		   }
		   const googleButton = {
			...inputBox,
			background: "white",
			width:mobile?"50%":"40%",
		  }
		
		


		
	     
		
		return(<div>	      	
			<div style={container}>
				<div style={image_container}>
					<img src="/Images/card_images/87.jpg" style={ab}/>
				</div>
				<div style={sub_container}>
					<h1>Sign Up</h1>
			
					{isFormSubmitted && <p>Form submitted successfully!</p>}
					<form onSubmit={handleSubmit}>
						<div>
							{/* <label>Username:</label> */}
							<input
							placeholder="Username"
							type="text"
							name="username"
							style={inputBox}
							value={formData.username}
							onChange={handleChange}
							/>
							{formErrors.username && <p>{formErrors.username}</p>}
						</div>
						<div>
							{/* <label>Email:</label> */}
							<input
							placeholder="Email"
							type="email"
							name="email"
							style={inputBox}
							value={formData.email}
							onChange={handleChange}
							/>
							{formErrors.email && <p>{formErrors.email}</p>}
						</div>
						<div>
							{/* <label>Password:</label> */}
							<input
							placeholder="Password"
							type="password"
							name="password"
							value={formData.password}
							style={inputBox}
							onChange={handleChange}
							/>
							{formErrors.password && <p>{formErrors.password}</p>}
						</div>
						<div>
							{/* <label>Confirm Password:</label> */}
							<input
							placeholder="Confirm Password"
							type="password"
							name="confirmPassword"
							style={inputBox}
							value={formData.confirmPassword}
							onChange={handleChange}
							/>
							{formErrors.confirmPassword && <p>{formErrors.confirmPassword}</p>}
						</div>
						<button style={submitButton} type="submit">Sign Up</button>
					</form>
					<span style={{marginRight: "10px", ...dc}}>
						Or Sign Up with 
					</span>
					<button  style={googleButton}><FcGoogle/>Sign up with Google</button>
					<button style={googleButton}><AiFillFacebook/>Sign up with Facebook</button>
					<p>Already have an account? <a style={{textStyle: "none", fontWeight: "bold"}} href="/login">Log in</a></p>
				</div>

			</div>
	</div>
	      )
	      
	    };
	    
	    export default Sign_up;
