import React from 'react';

const HourlyForecastCard = ({ hourlyData }) => {
    return (
        <div className='flex flex-wrap justify-between'>
            <h2 className='w-full text-center mt-4 text-3xl font-bold dark:text-white'>Hourly Forecast</h2>
            {hourlyData.map((hour, index) => (
                <div key={index} className='w-1/2 md:w-1/4 p-4'>
                    <div className='rounded-lg border bg-white dark:bg-gray-800 dark:border-gray-600 p-4 text-center shadow-lg'>
                        <h3 className='text-xl font-bold dark:text-white'>{hour.time.split(' ')[1]}</h3>
                        <img
                            src={`https:${hour.condition.icon}`}
                            alt={hour.condition.text}
                            className='mx-auto'
                        />
                        <p className='text-xl dark:text-white font-semibold'>{hour.condition.text}</p>
                        <p className='dark:text-white'>{hour.temp_c}°C</p>
                        <p className='dark:text-white'>Humidity: {hour.humidity}%</p>
                        <p className='dark:text-white'>Wind Speed: {hour.wind_kph} kph</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default HourlyForecastCard