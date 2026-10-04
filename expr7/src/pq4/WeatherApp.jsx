import { useState } from 'react';

export default function WeatherApp() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const searchWeather = () => {
    if (!city) return;
    const mockData = {
      city: city,
      temp: Math.floor(Math.random() * 30) + 10,
      condition: ['Sunny', 'Cloudy', 'Rainy', 'Partly Cloudy'][Math.floor(Math.random() * 4)],
      humidity: Math.floor(Math.random() * 50) + 30,
      forecast: Array.from({ length: 3 }, (_, i) => ({
        day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'][i],
        temp: Math.floor(Math.random() * 20) + 15
      }))
    };
    setWeather(mockData);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #4b5563', borderRadius: '8px', backgroundColor: '#1f2937', color: '#f9fafb' }}>
      <h3>Weather App</h3>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city name" style={{ flex: 1, padding: '8px', backgroundColor: '#374151', color: '#f9fafb', border: '1px solid #4b5563' }} />
        <button onClick={searchWeather} style={{ padding: '8px 15px', backgroundColor: '#8b5cf6', color: '#f9fafb', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Search</button>
      </div>
      {weather && (
        <div>
          <div style={{ padding: '15px', backgroundColor: '#374151', borderRadius: '5px', marginBottom: '15px' }}>
            <h4>{weather.city}</h4>
            <p style={{ fontSize: '36px', margin: '10px 0' }}>{weather.temp}°C</p>
            <p>{weather.condition}</p>
            <p>Humidity: {weather.humidity}%</p>
          </div>
          <h4>3-Day Forecast:</h4>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {weather.forecast.map((day, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '10px', backgroundColor: '#374151', borderRadius: '5px' }}>
                <p>{day.day}</p>
                <p>{day.temp}°C</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
