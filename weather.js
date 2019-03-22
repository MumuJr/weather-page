var app = new Vue({
	el: '#vue-app',
	data: {
		hello: '',
		weatherData: [],
		displayWeather: [],
		temp: []
	},
	created() {
		this.weatherDataPull();
	},
	methods: {
		weatherDataPull() {
			fetch('https://api.myjson.com/bins/i8run', {
				method: 'GET'
			})
				.then(function(response) {
					if (response.status >= 200 && response.status < 300) {
						return response.json();
					} else {
						return Promise.reject(new Error(response.statusText));
					}
				})
				.then(function(data) {
					app.weatherData = app.displayWeather = data.list;
				});
		}
	}
});
