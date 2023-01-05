const output = (firstName, lastName, email, phone, message) => {
  return ` <p>You have a new contact request</p>
  <h3>Contact Details</h3>
  <ul>  
    <li>Name: ${firstName} ${lastName}</li>
    <li>Email: ${email}</li>
    <li>Phone: ${phone}</li>
  </ul>
  <h3>Message</h3>
  <p>${message}</p>
  `;
};

module.exports = output;
