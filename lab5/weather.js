async function fetchWeather() {
    let c = document.getElementById("City").value;
    let ctx = document.getElementById("myChart").getContext("2d");
    let weather = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${c}&appid=25311ee59b53bf49d18f0052dd7c5cef&units=metric`
    );

    if (weather.ok) {
        let w = await weather.json();

        let xValues = [];
        for (let i = 0; i < 40; i++) {
            xValues.push(i);
        }
        let temps = [];
        for (let i = 0; i < w.list.length; i++) {
            temps.push(w.list[i].main.temp);
        }
        console.log(w);

        new Chart("myChart", {
            type: "bar",
            data: {
                labels: xValues,
                datasets: [
                    {
                        label : "Temparature",
                        backgroundColor: "blue",
                        data: temps,
                    },
                ],
            },
        });
    }
    else {
        let ms=document.getElementById("msg")
        ms.innerHTML="Invalid City"
    }
}







