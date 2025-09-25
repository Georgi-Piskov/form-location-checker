# Form Location Checker

This project is a web application that collects user information through a form and checks the user's location based on their IP address. It includes features for validating input data and logging submissions with approximate city, country, and ISP information.

## Project Structure

```
form-location-checker
├── src
│   ├── index.html        # HTML structure for the form
│   ├── css
│   │   └── styles.css    # Styles for the HTML form
│   ├── js
│   │   └── script.js      # JavaScript for handling form submissions
│   └── utils
│       └── validation.js  # Utility functions for input validation
├── .gitignore             # Files and directories to ignore by Git
└── README.md              # Project documentation
```

## Features

- Collects user information: name, gender, age, and county of residence.
- Logs submissions with approximate city, country, and ISP based on the user's IP address.
- Validates form inputs to ensure data integrity.
- Checks if the country of residence differs from the IP country.

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd form-location-checker
   ```

3. Open `src/index.html` in a web browser to view the form.

## Usage

Fill out the form with the required information and submit it. The application will log the submission and provide feedback based on the user's location.

## License

This project is licensed under the MIT License.