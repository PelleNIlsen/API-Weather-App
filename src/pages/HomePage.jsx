import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import MapComponent from '../components/MapComponent';
import HourlyForecastCard from '../components/HourlyForecastCard';
import DarkModeToggle from '../components/DarkModeToggle';

const HomePage = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [theme, setTheme] = useState(localStorage.getItem('weatherAppTheme'));
    const [error, setError] = useState('');

    useEffect(() => {
        if (theme === 'light') {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
        localStorage.setItem('weatherAppTheme', theme);
    }, [theme])

    const fetchWeatherData = async (query) => {
        const apiKey = '55abd8f50c1c44fc94475719232109';
        const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${query}&days=2`;

        try {
            const response = await fetch(apiUrl);
            if (response.status === 400) {
                setError('Enter a valid location.')
                return;
            }
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.error('Failed to fetch weather data: ', error);
        }
    }

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className='container mx-auto p-4 h-auto dark:bg-gray-800'>
            <DarkModeToggle toggleTheme={toggleTheme} theme={theme} />
            <SearchBar onSearch={fetchWeatherData} />
            {weatherData ? (
                <>
                    <WeatherCard weatherData={weatherData} />
                    <MapComponent latitude={parseFloat(weatherData.location.lat)} longitude={parseFloat(weatherData.location.lon)} />
                    <HourlyForecastCard hourlyData={weatherData.forecast.forecastday[0].hour} />
                </>
            ) : (
                <h1 className={`text-3xl font-bold mt-5 dark:text-white h-screen ${error ? 'text-red-500' : ''}`}>
                    {error ? error : 'Please search for a city.'}
                </h1>
            )}
        </div>
    )
}

export default HomePage