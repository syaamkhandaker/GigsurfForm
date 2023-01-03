# GigsurfForm

A online form I had made alongside a EC2 instance running a Java Spring Boot application. In an attempt to solve our startup's issue of not wanting to pay other online services for our forms and automations, I had built out this form. The functionality includes a regex checker to make sure each field complies to its requirements. In addition, there are red indicators and a small message to let the user's know the field is incorrect. With the phone nunber input, I created a Javascript script to auto format it into a number format like (000) 000-0000. I connected the program to an AWS S3 bucket in the case that a user uploads their resume. Upon their upload, the file is uploaded to S3. Then taking the url that this file is uploaded at, I produce a DynamoDB entry with the user's first/last name, email, phone number, and that url I produced. After this form is submitted, I also produce a GET request at my Spring Boot application running on EC2. This automatically sends that user a message from the Twilio Messaging Bot, allowing them to start the flow, so they can be contacted of future opportunities.

Tech Stack:

FrontEnd: React.js, CSS/Bootstrap, HTML
BackEnd: Node.js, Java Spring Boot
Databases: AWS DynamoDB
Other: AWS S3, AWS API Gateway
