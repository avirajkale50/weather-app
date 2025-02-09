# Weather App

## Description
The Weather App is a simple and intuitive application built using React and Vite. It provides real-time weather updates for different locations by fetching data from a weather API. The app features a clean and responsive user interface designed using plain CSS.

## Features
- Fetches real-time weather data based on user input
- Displays key weather metrics such as temperature, humidity, and wind speed
- Responsive and visually appealing UI using plain CSS
- Fast performance with Vite for a smooth user experience

## Technologies Used
- React
- Vite
- Plain CSS
- Weather API (e.g., OpenWeatherMap, WeatherAPI, etc.)

## Installation

1. Clone the repository:
   ```sh
   https://github.com/avirajkale50/weather-app.git
   ```
2. Navigate to the project directory:
   ```sh
   cd weather-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
5. Open your browser and visit `http://localhost:5173/` (or the provided URL) to use the app.

## Usage
1. Enter a city name in the search bar.
2. Click the "Search" button or press Enter.
3. View the real-time weather details for the selected city.

## API Configuration
To fetch weather data, you need an API key from a weather service provider. Follow these steps:
1. Sign up at [OpenWeatherMap](https://openweathermap.org/) or any other weather API provider.
2. Obtain your API key.
3. Create a `.env` file in the project root and add your API key:
   ```sh
   VITE_WEATHER_API_KEY=your_api_key_here
   ```
4. Restart the development server if necessary.

## Deployment
To deploy the application, build it for production using:
```sh
npm run build
```
Then, you can host the `dist/` folder on platforms like Vercel, Netlify, or GitHub Pages.




