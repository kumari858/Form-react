import React from  'react';
 import './style.css';
class Form extends React.Component{
    constructor(props){
        super(props);

        this.state={
            username:'',
            useremail:'',
            userphone:'',
            usergender:'',
            userpassword:''

        };
    }
    onnamechange = (event) => {
        this.setState({
            username: event.target.value

        });

    };
    onemailchange = (event) => {
        this.setState({
            useremail: event.target.value
        });
    };

    onphonechange = (event) => {
        
        this.setState({
            userphone: event.target.value
        });

    };
    ongenderchange =( event) =>
    {
        
        this.setState({
            usergender: event.target.value
        });

    };
    onpasswordchange =(event) =>
    {
        
        this.setState({
            userpassword: event.target.value
        });

    };
    onsubmit=()=>{
    const data =
        `
        Name : ${this.state.username},
        Email : ${this.state.useremail},
        Phone : ${this.state.userphone},
        Gender : ${this.state.usergender},
        Password: ${this.state.userpassword}
        `;
        window.alert(data);
        this.clearform();

    };

    clearform = () => {
        
        this.setState({
             username:'',
            useremail:'',
            userphone:'',
            usergender:'',
            userpassword:''
        });
   };
    render =() => {
        return(
            <div className="form-container">
            <p className="title">-----USER FORM-----</p>
            <input
             onChange={this.onnamechange} 
             value={this.state.username}
             className="input-style" 
             type = "text"
             placeholder = "Enter your name "/>

             <input 
             onChange={this.onemailchange}
             value={this.state.useremail}
              className="input-style" 
              type= "email"
             placeholder = "Enter your email"/>

             <input 
             onChange= {this.onphonechange}
             value={this.state.userphone}
             className="input-style" 
             type= "text"
             placeholder = "Enter your phone "/>

             
             <select className="input-style"
             onChange={this.ongenderchange}
             value={this.state.usergender}>
                 
                 <option value=" ">Choose a gender</option>
                 <option value="Male">Male</option>
                 
                 <option value="Female">Female</option>
                 
                 <option value="other">Other</option>
             </select>

             <input 
             onChange={this.onpasswordchange}
             value = {this.state.userpassword}
             className="input-style" 
             type= "password"
             placeholder = "Enter your Password "/>
             
             <button onClick ={this.onsubmit} 
             className="submit-btn">
                 Submit
             </button>
             
            </div>

        );
    };
}
export default Form;