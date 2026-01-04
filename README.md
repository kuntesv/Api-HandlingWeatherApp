## Api Handling Weather App

A simple JavaScript weather application that fetches current weather data for a given city using the OpenWeatherMap API and displays it in the browser.

### Features
- Search weather by city name.
- Shows city, temperature in °C, and a short description.
- Basic error handling for invalid city names or failed requests.

### Tech Stack
- HTML (UI structure) – see [index.html](index.html)
- CSS (basic styling) – see [styles.css](styles.css)
- Vanilla JavaScript (API handling & DOM updates) – see [script.js](script.js)

### Getting Started
1. Clone or download this repository.
2. Open the project folder.
3. Make sure you have a valid OpenWeatherMap API key.
4. Update the `API_KEY` constant in [script.js](script.js) with your own key:
	- `const API_KEY = 'YOUR_API_KEY_HERE';`
5. Open [index.html](index.html) in your browser (you can double-click it or use a simple static server).

### Usage
1. Enter a city name in the input field.
2. Click **Get Weather**.
3. The app will display:
	- City name
	- Temperature in Celsius
	- Weather description
4. If the city is not found, an error message is shown.

### API Details
- Provider: [OpenWeatherMap Current Weather Data](https://openweathermap.org/current)
- Endpoint used:
  - `https://api.openweathermap.org/data/2.5/weather?q={CITY}&appid={API_KEY}&units=metric`

### Project Scripts
This project is a simple front-end app and does not require a Node.js server to run. The `package.json` file is mainly for metadata.

### Author
- sachin

### License
This project is licensed under the ISC License.