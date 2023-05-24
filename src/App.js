import './App.css';
import logo from './static/GigsurfLogo.png';
 
const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);

function App() {
  return (
    <form className="row g-3 needs-validation form">
      <div className='vstack gap-2 card-img-overlay'>
        <img className='logo-img' src={logo} alt="Logo"/>
        <div className='whitepg'>
          <h3 className="d-flex justify-content-center text">Welcome to Gigsurf</h3>
          <div className="d-flex justify-content-center text mediumtext">Give us some details &amp; start making money today.</div>
          <hr className='horizontalrule'/>
          <div className='in-between-text-padding'/>
          <div className="error-message" id="name-error-message">
            <label> What's your name? <span className="form-required text-danger">*</span></label>
            <div className='text-padding'/>
            <div className="d-flex row justify-content-end">
              <div className="col col-6">
                <input type="text" className="form-control" placeholder="" aria-label="First name" id="firstname" onKeyUp={() => {
                  const firstName = document.getElementById("firstname");
                  const lastName = document.getElementById("lastname");
                  const nameErrorBox = document.getElementById("name-error-message")
                  const nameRequiredText = document.getElementById("name-hidden-required");
                  firstName.addEventListener("blur", () => {
                    if (firstName.value.length > 0 && lastName.value.length > 0) {
                      nameErrorBox.style.backgroundColor = '#FFFFFF'
                      nameRequiredText.style.display = "none"
                      lastName.style.borderColor = '#B8BDC9'
                      lastName.style.boxShadow = 'none'
                      firstName.style.borderColor = '#B8BDC9'
                      firstName.style.boxShadow = 'none'
                    } else {
                      nameErrorBox.style.backgroundColor = '#FED6D6'
                      nameRequiredText.style.display = "flex"
                      firstName.style.boxShadow = "0.3px 0.3px 0.3px 0.3px #F23A3C"
                      firstName.style.borderColor = "#F23A3C"
                      lastName.style.boxShadow = "0.3px 0.3px 0.3px 0.3px #F23A3C"
                      lastName.style.borderColor = "#F23A3C"
                    }
                  })
                }}/>
                  <small className='smalltext'>First Name</small>
              </div>                  
              <div className="col col-6">
                <input type="text" className="form-control" placeholder="" aria-label="Last name" id="lastname" onKeyUp={() => {
                  const firstName = document.getElementById("firstname");
                  const lastName = document.getElementById("lastname");
                  const nameErrorBox = document.getElementById("name-error-message")
                  const nameRequiredText = document.getElementById("name-hidden-required");
                  lastName.addEventListener("blur",() => {
                    if (firstName.value.length > 0 && lastName.value.length > 0) {
                      nameErrorBox.style.backgroundColor = '#FFFFFF'
                      nameRequiredText.style.display = "none"
                      lastName.style.borderColor = '#B8BDC9'
                      lastName.style.boxShadow = 'none'
                      firstName.style.borderColor = '#B8BDC9'
                      firstName.style.boxShadow = 'none'
                    } else {
                      nameErrorBox.style.backgroundColor = '#FED6D6'
                      nameRequiredText.style.display = "flex"
                      firstName.style.boxShadow = "0.3px 0.3px 0.3px 0.3px #F23A3C"
                      firstName.style.borderColor = "#F23A3C"
                      lastName.style.boxShadow = "0.3px 0.3px 0.3px 0.3px #F23A3C"
                      lastName.style.borderColor = "#F23A3C"
                    }})
                }}/>
                <small className='smalltext'>Last Name</small>
              </div>
            </div>
            <div className="requiredpadding"/>
            <small id="name-hidden-required" className='smalltext hiddenrequired gap-1'>
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" className="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
              </svg>
              This field is required.</small>
          </div>
          <div className='in-between-text-padding'/>
          <div className="error-message" id="number-error-message">
            <label htmlFor="phone-input"> What's your phone number? <span className="form-required text-danger">*</span></label>
            <div className='text-padding'/>
            <div className="row">
              <div className="col col-sm-6 col-12">
                <input id="phone-input" className="form-control number-field" placeholder="(000) 000-0000" maxLength="14" aria-label="Phone Number" onKeyDown={(e) => {
                    if(['0','1','2','3','4','5', '6', '7', '8','9',"Backspace","Delete"].indexOf(e.key) !== -1){
                    } else {
                      e.preventDefault();
                    }
                }} onKeyUp={() => {
                    const inputField = document.getElementById("phone-input");
                    const numberErrorBox = document.getElementById("number-error-message");
                    const numberRequiredText = document.getElementById("number-hidden-required");
                    inputField.addEventListener("blur", () => {
                      if (inputField.value.length === 14) {
                        numberErrorBox.style.backgroundColor = '#FFFFFF'
                        numberRequiredText.style.display = "none"
                        inputField.style.borderColor = '#B8BDC9'
                        inputField.style.boxShadow = 'none'
                      } else {
                        numberErrorBox.style.backgroundColor = '#FED6D6'
                        numberRequiredText.style.display = "flex"
                        inputField.style.boxShadow = "0.3px 0.3px 0.3px 0.3px #F23A3C"
                        inputField.style.borderColor = "#F23A3C"
                      }
                    })
                    const formattedInput = (value) => {
                    if (!value) return value;
                    const phoneNumber = value.replace(/[^\d]/g, '');
                    const phoneNumberLength = phoneNumber.length;
                    if (phoneNumberLength < 4) return phoneNumber;
                    if (phoneNumberLength < 7) {
                      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
                    }
                    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3,6)}-${phoneNumber.slice(6, 10)}`;
                  }
                  inputField.value = formattedInput(inputField.value);
                }}/>
                <small className='smalltext'>Please enter a valid phone number</small>
              </div>
            </div>
            <div className="requiredpadding"/>
            <small id="number-hidden-required" className='smalltext hiddenrequired gap-1'>
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" className="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
              </svg>
              This field is required.</small>
          </div>
          <div className='in-between-text-padding'/>
          <div className="error-message" id="email-error-message">
            <label htmlFor="email-input"> What's your email? <span className="form-required text-danger">*</span></label>
            <div className='text-padding'/>
            <div className="row">
              <div className="col col-sm-6 col-12">
                <input type="text" data-type="mask-number" className="form-control email-check" id="email-input" placeholder="" aria-label="Email" onKeyUp={() => {
                  const email = document.getElementById("email-input");
                  const emailErrorBox = document.getElementById("email-error-message")
                  const emailRequiredText = document.getElementById("email-hidden-required");
                  const emailRegex = /[\w]+@+[\w]+\.+[\w]{1,}/g
                  email.addEventListener("blur", () => {
                    if (email.value.length > 0 && email.value.match(emailRegex)) {
                      emailErrorBox.style.backgroundColor = '#FFFFFF'
                      emailRequiredText.style.display = "none"
                      email.style.borderColor = '#B8BDC9'
                      email.style.boxShadow = 'none'
                    } else {
                      emailErrorBox.style.backgroundColor = '#FED6D6'
                      emailRequiredText.style.display = "flex"
                      email.style.boxShadow = "0.3px 0.3px 0.3px 0.3px #F23A3C"
                      email.style.borderColor = "#F23A3C"
                    }
                  })
                }}/>
                <small className='smalltext'>example@gatech.edu</small>
              </div>
            </div>
            <div className="requiredpadding"/>
            <small id="email-hidden-required" className='smalltext hiddenrequired gap-1'>
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" className="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
              </svg>
              This field is required.</small>
          </div>
          <div className='in-between-text-padding'/>
          <div className="nonerror-message">
          <label htmlFor="formFile" className="form-label">Upload your resume</label>
          <div className='d-flex flex-column col-12'>
            <input className="form-control h-50" type="file" id="formFile" accept=".txt,.pdf,.doc,.docx,.jpg,.png"/>
            <small id="resume-upload" className='smalltext'>Upload your resume to be matched with micro-internships quicker.</small>
          </div>
          </div>
          <div className='set-padding'></div>
          <hr className='horizontalrule'/>
          <div className='d-flex justify-content-center align-items-center'>
            <button onClick={async () => {
              const firstName = document.getElementById("firstname");
              const lastName = document.getElementById("lastname");
              const phoneNumber = document.getElementById("phone-input"); 
              const email = document.getElementById("email-input");
              const emailRequiredText = document.getElementById("email-hidden-required");
              const nameRequiredText = document.getElementById("name-hidden-required");
              const numberRequiredText = document.getElementById("number-hidden-required");
              const nameErrorBox = document.getElementById("name-error-message")
              const numberErrorBox = document.getElementById("number-error-message")
              const emailErrorBox = document.getElementById("email-error-message")
              const resume = document.getElementById("formFile");
              const emailRegex = /[\w]+@+[\w]+\.+[\w]{1,}/g;
              if (!(firstName.value === null || firstName.value === '' || lastName.value === null || lastName.value === '') && phoneNumber.value !== null && phoneNumber.value.length === 14 &&
              email.value !== null && email.value.match(emailRegex)) {
                if(resume.files.length === 1) {
                  const bucketName = "";
                  const accessKeyId = "";
                  const secretAccessKey = "";
                  const region = "";
                  const AWS = require("aws-sdk");
                  AWS.config.update({
                    accessKeyId: accessKeyId,
                    secretAccessKey: secretAccessKey,
                    region: region
                  });
                  
                  const myBucket = new AWS.S3({
                    params: { Bucket: bucketName},
                    region: region,
                  })
              
                  const params = {
                    Body: resume.files[0],
                    Bucket: bucketName,
                    Key: firstName.value + lastName.value + resume.files[0].name
                  };
              
                  myBucket.putObject(params, function(err,data) {
                    if (err) {
                      console.log("Error", err);
                    } else {
                      const url = `https://${bucketName}.s3.amazonaws.com/` + firstName.value + lastName.value + resume.files[0].name;
                      var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
                      var params = {
                        TableName: 'Table',
                        Item: {
                          "primaryKey": {
                            "S": "" + new Date().getTime()
                          },
                          "email": {
                            "S": email.value
                          },
                          "first_name": {
                            "S": firstName.value
                          },
                          "last_name": {
                            "S": lastName.value
                          },
                          "number": {
                            "S": phoneNumber.value
                          },
                          "resume": {
                            "S": url
                          }
                        }
                      };
                      ddb.putItem(params, function(err, data) {
                        if (err) {
                          console.log("Error", err);
                        } else {
                          console.log(data);
                        }
                      });
                    }
                  })
                }
                await delay(1000);
                fetch("" + firstName.value + "&Number=" + phoneNumber.value).catch((err) => {
                  console.log(err);
                })
                await delay(1000);
                window.location = "https://www.google.com";
              } else {
                if (firstName.value === null || firstName.value === '' || lastName.value === null || lastName.value === '') {
                  nameErrorBox.style.backgroundColor = '#FED6D6'
                  nameRequiredText.style.display = "flex"
                  firstName.style.boxShadow = "0.3px 0.3px 0.3px 0.3px #F23A3C"
                  firstName.style.borderColor = "#F23A3C"
                  lastName.style.boxShadow = "0.3px 0.3px 0.3px 0.3px #F23A3C"
                  lastName.style.borderColor = "#F23A3C"
                } else if (!(firstName.value === null || firstName.value === '' || lastName.value === null || lastName.value === '')) {
                  nameErrorBox.style.backgroundColor = '#FFFFFF'
                  nameRequiredText.style.display = "none"
                  lastName.style.borderColor = '#B8BDC9'
                  lastName.style.boxShadow = 'none'
                  firstName.style.borderColor = '#B8BDC9'
                  firstName.style.boxShadow = 'none'
                }
    
                if (phoneNumber.value === null || phoneNumber.value.length < 14){
                  numberErrorBox.style.backgroundColor = '#FED6D6'
                  numberRequiredText.style.display = "flex"
                  phoneNumber.style.boxShadow = "0.3px 0.3px 0.3px 0.3px #F23A3C"
                  phoneNumber.style.borderColor = "#F23A3C"
                } else if (phoneNumber.value !== null && phoneNumber.value.length === 14) {
                  numberErrorBox.style.backgroundColor = '#FFFFFF'
                  numberRequiredText.style.display = "none"
                  phoneNumber.style.borderColor = '#B8BDC9'
                  phoneNumber.style.boxShadow = 'none'
                }
    
                if (email.value === null || !email.value.match(emailRegex)){
                  emailErrorBox.style.backgroundColor = '#FED6D6'
                  emailRequiredText.style.display = "flex"
                  email.style.boxShadow = "0.3px 0.3px 0.3px 0.3px #F23A3C"
                  email.style.borderColor = "#F23A3C"
                } else if (email.value !== null && email.value.match(emailRegex)){
                  emailErrorBox.style.backgroundColor = '#FFFFFF'
                  emailRequiredText.style.display = "none"
                  email.style.borderColor = '#B8BDC9'
                  email.style.boxShadow = 'none'
                }
              }
            }} id="submit" type="button" className="btn btn-primary btn-changes">Submit</button>
          </div>
        </div>
      </div>
    </form>
    
  );
}

export default App;
