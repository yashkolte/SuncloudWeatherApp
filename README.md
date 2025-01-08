# Suncloud Weather App

Suncloud is a simple and elegant weather application that provides real-time weather updates, hourly and daily forecasts, sunrise and sunset times, and additional weather-related data for any location worldwide. The app features a minimalistic design with vibrant colors to represent different weather conditions.

## Features

- Display current weather data:
  - Temperature (Celsius and Fahrenheit)
  - Feels like temperature
  - Minimum and maximum temperatures
  - Humidity, pressure, visibility
  - Wind speed and direction
  - Cloud cover description and icon
- Show hourly and daily forecasts.
- Sunrise and sunset times.
- Displays weather data for any city by entering the city name.

## Prerequisites

To run this application, ensure you have the following installed:

- Node.js (v18.x or above)
- npm (comes with Node.js)

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd suncloud
```

### 2. Install Dependencies

Run the following command to install required dependencies:

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add your OpenWeather API key:

```
API_KEY=your_openweather_api_key
```

### 4. Start the Application

Use the following command to start the application:

```bash
npm start
```

The application will run on [http://localhost:3000](http://localhost:3000).

## Application Structure

### Routes

- **`/`**: Renders the home page (`index`).
- **`/suncloud`**: Displays the weather details page with placeholders for weather data.
- **`/weather`** (POST): Accepts a city name, fetches the weather data using OpenWeather API, and renders the data on the `suncloud` page.

### API Integration

The application uses the OpenWeather API to fetch real-time weather data. Ensure you have a valid API key from [OpenWeather](https://openweathermap.org/api).

### Key Files

- `routes/index.js`: Contains all route definitions and API logic.
- `views/`: EJS templates for rendering UI components.
- `public/`: Static files such as CSS and JavaScript.
- `app.js`: Configures middleware and initializes the server.

## Dependencies

- **Express**: Web framework for Node.js
- **EJS**: Template engine for rendering HTML
- **Request**: Simplified HTTP request library
- **Body-parser**: Middleware to parse incoming request bodies
- **Morgan**: HTTP request logger
- **Cookie-parser**: Parses cookies attached to requests
- **Nodemon**: Utility for automatically restarting the server during development

## Deployment

For deployment, ensure to:

1. Set the environment variable `NODE_ENV=production`.
2. Use a process manager like PM2 for running the application in a production environment.

## Screenshots

Add screenshots here to showcase the application’s interface.

## Future Enhancements

- Add a weekly weather forecast feature.
- Enhance the UI with better animations.
- Implement geolocation-based weather updates.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contribution

Feel free to fork this repository and submit pull requests for any improvements or features you’d like to add.

---

Developed with ❤️ by Yash Kolte
