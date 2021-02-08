const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');
const dh = document.getElementById('dh');


const getInfo = async(event) =>{
    event.preventDefault();
    let cityval = cityName.value;
    // alert('hii');
    if(cityval===""){
        city_name.innerText = `Please enter the city name`;
        dh.style.visibility = "hidden";
        temp.innerText = "";

    }else if(cityval==undefined){
        city_name.innerText = `Please Enter a valid city name`;
    }
    else{
        // try{
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=223e7be8b07bdb91e1655df225b40128`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];
        city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
        temp.innerText = arrData[0].main.temp;
        dh.style.visibility = "visible";
        
        // }
        // catch{
        //     city_name.innerText = `Please Enter a valid city name`;
        // }
    }
}

submitBtn.addEventListener('click',getInfo);