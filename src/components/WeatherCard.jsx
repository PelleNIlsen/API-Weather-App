import React from 'react';

const WeatherCard = ({ weatherData }) => {
    return (
        <div>
            <h2 className='text-3xl font-bold dark:text-white'>{weatherData.location.name}, {weatherData.location.country}</h2>
            <div className='flex md:flex-row flex-col'>
                <div className='rounded-lg p-4 bg-white dark:bg-gray-800 w-1/2'>
                    <h3 className='text-xl dark:text-white'>{weatherData.location.localtime}</h3>
                    <div className='flex align-middle'>
                        <img src={weatherData.current.condition.icon} alt='Icon' />
                        <h2 className='text-2xl my-auto dark:text-white'>{weatherData.current.condition.text}</h2>
                    </div>
                    <p className='dark:text-white'>{weatherData.current.temp_c}°C</p>
                    <p className='dark:text-white'>Humidity: {weatherData.current.humidity}%</p>
                    <p className='dark:text-white'>Wind Speed: {weatherData.current.wind_kph} kph</p>
                </div>

                <div className='rounded-lg p-4 bg-white dark:bg-gray-800 w-1/2'>
                    <h3 className='text-xl dark:text-white'>{weatherData.forecast.forecastday[1].date}</h3>
                    <div className='flex align-middle'>
                        <img src={weatherData.forecast.forecastday[1].day.condition.icon} alt='Icon' />
                        <h2 className='text-2xl my-auto dark:text-white'>{weatherData.forecast.forecastday[1].day.condition.text}</h2>
                    </div>
                    <p className='dark:text-white'>{weatherData.forecast.forecastday[1].day.mintemp_c}°C - {weatherData.forecast.forecastday[1].day.maxtemp_c}°C</p>
                    <p className='dark:text-white'>Average Humidity: {weatherData.forecast.forecastday[1].day.avghumidity}%</p>
                    <p className='dark:text-white'>Max Wind Speed: {weatherData.forecast.forecastday[1].day.maxwind_kph} kph</p>
                </div>
            </div> 
        </div>
    )
}

export default WeatherCard