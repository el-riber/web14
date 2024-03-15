# Feature Toggle Demo

This is a simple React application that demonstrates conditional rendering based on props, without using state management. The application includes a reusable "Feature Toggle" component that allows enabling or disabling features based on external conditions.

## Getting Started

To view the Feature Toggle Demo, follow these steps:

1. Clone this repository to your local machine using `git clone https://github.com/el-riber/web14.git'
2. Navigate to the project directory: `cd feature-toggle-demo`
3. Install dependencies by running: `npm install`
4. Start the development server: `npm start`
5. Open your web browser and visit http://localhost:3000 to view the Feature Toggle Demo.

## Feature Toggle Component

The Feature Toggle component (`FeatureToggle.js`) accepts two props: `isEnabled` (a boolean) and `featureName` (a string). It conditionally renders the feature name if it's enabled, otherwise it displays a message indicating that the feature is disabled.

## App.js

The main application file (`App.js`) demonstrates the usage of the Feature Toggle component by rendering it multiple times with different `isEnabled` and `featureName` props to simulate different features being enabled or disabled.

## Dependencies

This project relies on Create React App for bootstrapping the React application. Additionally, it uses React for building the UI components.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
