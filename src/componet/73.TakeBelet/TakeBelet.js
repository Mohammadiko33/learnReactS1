import React, { Component } from 'react';
import './Takebelet.css';

export default class TakeBelet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countryData: {
                russia: ["Moscow", "Saint Petersburg", "Sochi", "Ekaterinburg", "Novosibirsk", "Krasnoyarsk", "Astrakhan", "Kazan", "Rostov-on-Don", "Orenburg", "Samara", "Ufa", "Krasnodar", "Voronezh", "Volgograd", "Nizhny Novgorod", "Perm", "Chelyabinsk", "Tyumen", "Khabarovsk"],
                iran: ["Tehran", "Mashhad", "Jim abad" , "Isfahan", "Kerman", "Tabriz", "Shiraz", "Gilan", "Yazd", "Qom"],
                usa: ["Chicago", "Los Angeles", "Las Vegas", "San Francisco", "New York"],
                iraq: ["Baghdad", "Karbala", "Najaf", "Kadhimayn", "Samarra"],
                turkey: ["Istanbul", "Ankara", "Izmir", "Antalya"],
                france: ["Paris", "Marseille", "Lyon", "Toulouse", "Nice"],
                germany: ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt"],
                italy: ["Rome", "Milan", "Naples", "Turin", "Palermo"],
                spain: ["Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza"],
                uk: ["London", "Manchester", "Birmingham", "Leeds", "Glasgow"],
                canada: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
                australia: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
                japan: ["Tokyo", "Osaka", "Kyoto", "Nagoya", "Sapporo"],
                china: ["Beijing", "Shanghai", "Guangzhou", "Shenzhen", "Chengdu"],
                brazil: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador", "Fortaleza"],
                india: ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai"],
                mexico: ["Mexico City", "Guadalajara", "Monterrey", "Puebla", "Tijuana"],
                south_korea: ["Seoul", "Busan", "Incheon", "Daegu", "Daejeon"],
                south_africa: ["Johannesburg", "Cape Town", "Durban", "Pretoria", "Port Elizabeth"],
            },
            mainCountryCitys: []
        };
    }

    predefut(e) {
        e.preventDefault();

        alert("finish buy belet hoory")
    }

    getValueHandler(e) {
        this.setState({ mainCountryCitys: this.state.countryData[e.target.value] || [] });
    }

    render() {
        return (
            <form className="Buy-Taket" onSubmit={e => this.predefut(e)}>
                <div className="inputs">
                    <input type="text" placeholder="First Name" minLength={3} maxLength={50} autoFocus required />
                    <input type="text" placeholder="Last Name" minLength={4} maxLength={51} required />
                    <input type="text" placeholder="Phone Number" minLength={11} maxLength={11} required />
                    <input type="email" placeholder="Email" minLength={13} maxLength={63} required />
                </div>
                <div className="selects">
                    <select id="countrys" onChange={this.getValueHandler.bind(this)}>
                        <option value="pleaseSelectCountry">Please Select Country</option>
                        <option value="russia">Russia</option>
                        <option value="iran">Iran</option>
                        <option value="canada">Canada</option>
                        <option value="france">France</option>
                        <option value="usa">USA</option>
                        <option value="china">China</option>
                        <option value="germany">Germany</option>
                        <option value="italy">Italy</option>
                        <option value="japan">Japan</option>
                        <option value="india">India</option>
                        <option value="uk">UK</option>
                        <option value="brazil">Brazil</option>
                        <option value="mexico">Mexico</option>
                        <option value="turkey">Turkey</option>
                        <option value="spain">Spain</option>
                        <option value="iraq">Iraq</option>
                        <option value="australia">Australia</option>
                        <option value="south_korea">South Korea</option>
                        <option value="south_africa">South Africa</option>
                    </select>
                    <select id="citys">
                        {this.state.mainCountryCitys.length > 0 ? this.state.mainCountryCitys.map(city => (
                            <option key={city} value={city}>{city}</option>
                        )) : <option value="pleaseSelectCity">Please Select City</option>}
                    </select>
                </div>
                <div className="butt">
                    <button>Book a Ticket</button>
                </div>
            </form>
        );
    }
}



// let $ = document
// let selectBoxCountrys = $.querySelector('#countrys')
// let selectBoxCitys = $.querySelector('#citys')
// let allCitys = {
//     iran: ["tehran", "mashhad", "shiraz", "asfahan"],
//     russia: ["moscow", "saint petersburg", "kazan", "kursk"],
//     amarica: ["chicago", "los angelas", "los vegos", "new york"],
//     iraq: ["baghdad", "karbale", "cazamin", "samera"],
// }
// selectBoxCountrys.addEventListener('change', function() {

//     if (selectBoxCountrys.value === "pleaseSelectCountry") {
//         selectBoxCitys.innerHTML = "";
//         selectBoxCitys.innerHTML += "<option>Please Select City</option>";
//     } else {
//         let countrys = selectBoxCountrys.value
//         let citysName = allCitys[countrys]

//         selectBoxCitys.innerHTML = ""

//         citysName.forEach(function(city) {
//             selectBoxCitys.innerHTML += "<option>" + city + "</option>"
//         })
//     }
// })