class User {
    id;
    email;
    password;
    firstName;
    lastName;
    country;
    city;
    phoneNumber;
    position;
  
    // Constructor to set the properties
    constructor(data) {
      this.id = data.id;
      this.email = data.email;
      this.password = data.password;
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.country = data.country;
      this.city = data.city;
      this.phoneNumber = data.phoneNumber;
      this.position = data.position;
    }

    toJSON() {
        return {
          email: this.email,
          firstName: this.firstName,
          lastName: this.lastName,
          country: this.country,
          city: this.city,
          phoneNumber: this.phoneNumber,
          position: this.position,
        };
    }

    static mapper({ email, first_name, last_name, country, city, phone_number, position }) {
        return new User({
          email,
          firstName: first_name,   // Convert first_name to firstName (camelCase)
          lastName: last_name,     // Convert last_name to lastName (camelCase)
          country,
          city,
          phoneNumber: phone_number, // Convert phone_number to phoneNumber (camelCase)
          position
        });
    }
}
  

module.exports = User;