function attachEvents() {
    const baseUrl = "http://localhost:3030/jsonstore/forecaster/locations";
    const whetherButton = document.querySelector("#submit");

    whetherButton.addEventListener("click", getWhether);

    async function getWhether() {
        const locationInput = document.querySelector("#location").value;

        try {
            const response = await fetch(baseUrl);
            const data = await response.json();

            Object.values(data).forEach(town => {
                if (town.name === locationInput) {
                    let currentCode = town.code;

                    getCondition(currentCode)
                }
            });

        } catch (error) {
            const forecastDiv = document.querySelector("#forecast");
            forecastDiv.innerHTML = `<div class="label">Error</div>`;
            forecastDiv.style.display = "block";
        }
    }

    async function getCondition(currentCode) {
        const whetherSymbols = {
            "Sunny": "&#x2600;", // ☀
            "Partly sunny": "&#x26C5;", // ⛅
            "Overcast": "&#x2601;", // ☁
            "Rain": "&#x2614;", // ☂
            "Degrees": "&#176;" // °
        };

        const todayUrl = `http://localhost:3030/jsonstore/forecaster/today/${currentCode}`;
        const upComingUrl = `http://localhost:3030/jsonstore/forecaster/upcoming/${currentCode}`;

        const divForeCastDisplay = document.querySelector("#forecast");
        const divCurrent = document.querySelector("#current");
        const divUpComing = document.querySelector("#upcoming");

        try {
            // Fetch current weather
            const todayResponse = await fetch(todayUrl);
            if (!todayResponse.ok) throw new Error();
            const todayData = await todayResponse.json();

            const place = todayData.name;
            const condition = todayData.forecast.condition;
            const lowTemperature = todayData.forecast.low;
            const highTemperature = todayData.forecast.high;

            const divForecasts = document.createElement("div");
            divForecasts.classList.add("forecast");

            const spanConditionSymbol = document.createElement("span");
            spanConditionSymbol.classList.add("condition", "symbol");
            spanConditionSymbol.innerHTML = whetherSymbols[condition];

            const spanCondition = document.createElement("span");
            spanCondition.classList.add("condition");

            const spanTown = document.createElement("span");
            spanTown.classList.add("forecast-data");
            spanTown.textContent = place;

            const spanDegrees = document.createElement("span");
            spanDegrees.classList.add("forecast-data");
            spanDegrees.textContent = `${lowTemperature}°/${highTemperature}°`;

            const spanWhether = document.createElement("span");
            spanWhether.classList.add("forecast-data");
            spanWhether.textContent = condition;

            spanCondition.appendChild(spanTown);
            spanCondition.appendChild(spanDegrees);
            spanCondition.appendChild(spanWhether);

            divForecasts.appendChild(spanConditionSymbol);
            divForecasts.appendChild(spanCondition);

            divCurrent.appendChild(divForecasts);
            divForeCastDisplay.style.display = "block";

            // Fetch 3-day forecast
            const upcomingResponse = await fetch(upComingUrl);
            if (!upcomingResponse.ok) throw new Error();
            const upcomingData = await upcomingResponse.json();

            const divForecastInfo = document.createElement("div");
            divForecastInfo.classList.add("forecast-info");

            upcomingData.forecast.forEach(day => {
                const spanUpComing = document.createElement("span");
                spanUpComing.classList.add("upcoming");

                const spanUpComingSymbol = document.createElement("span");
                spanUpComingSymbol.classList.add("symbol");
                spanUpComingSymbol.innerHTML = whetherSymbols[day.condition];

                const spanDegreesUpComing = document.createElement("span");
                spanDegreesUpComing.classList.add("forecast-data");
                spanDegreesUpComing.textContent = `${day.low}°/${day.high}°`;

                const spanWhetherUpComing = document.createElement("span");
                spanWhetherUpComing.classList.add("forecast-data");
                spanWhetherUpComing.textContent = day.condition;

                spanUpComing.appendChild(spanUpComingSymbol);
                spanUpComing.appendChild(spanDegreesUpComing);
                spanUpComing.appendChild(spanWhetherUpComing);

                divForecastInfo.appendChild(spanUpComing);
            });

            divUpComing.appendChild(divForecastInfo);

        } catch (error) {
            divForeCastDisplay.innerHTML = `<div class="label">Error</div>`;
            divForeCastDisplay.style.display = "block";
        }
    }

}

attachEvents();
