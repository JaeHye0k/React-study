import React from "react";
import "../styles/Weather.css";
import { useEffect, useState } from "react";

// 1. 앱이 실행되자마자 현재 위치 기반의 날씨가 보인다.
// 2. 날씨 정보에는 도시 이름, 섭씨 온도, 화씨 온도, 날씨 상태
// 3. 5개의 버튼이 있다. (1개는 현재 위치, 나머지는 다른 나라, 도시 이름)
// 4. 버튼을 누를 때마다 해당 위치의 날씨 정보가 화면에 출력된다.
// 5. 현재 위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나온다. (얘만 좀 다름)
// 6. 날씨 정보 데이터를 가져오는 동안 로딩 스피너가 돈다.

const Weather = () => {
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };
  const getWeatherByCurrentLocation = async (lat, lon) => {
    const apiKey = "37145ca12efe07b866fade0a0ab89107";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log("data", data);
  };
  useEffect(() => {
    getCurrentLocation();
  }, []);
  return (
    <div>
      <div className="background">
        <div className="screen">
          <div className="content">Hi</div>
        </div>
      </div>
    </div>
  );
};

export default Weather;