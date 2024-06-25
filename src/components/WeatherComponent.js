import React from 'react';

function WeatherComponent() {
  const weather = {
    temperature: '20°C',
    condition: 'Sunny',
    location: 'New York',
  };

  return (
    <div className="weather-component">
      <h2>Current Weather</h2>
      <p>Location: {weather.location}</p>
      <p>Temperature: {weather.temperature}</p>
      <p>Condition: {weather.condition}</p>
    </div>
  );
}

export default WeatherComponent;
