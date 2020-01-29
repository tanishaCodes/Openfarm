var humidityChart = document.getElementById('humidityChart').getContext('2d');

var humidWeekChart = new Chart(humidityChart, {
  type: 'line',
  data: {
    labels:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets:[{
      label:'Humidity',
      data:[45, 35, 65, 48, 57, 40, 25],
      backgroundColor:'pink',
    }],
  },
  options:{
      legend:{
          display:false,
      },
      layout:{
          padding:{
              bottom:70,
          }   
      },
      scales:{
          yAxes:[{
              ticks:{
                  beginAtZero:true,
              },
              scaleLabel:{
                display: true,
                labelString: 'Humidity in %'

            }
          }]
      },
      tooltips: {
        callbacks: {
          label: (item) => `${item.yLabel} %`,
        },
      },
  }
});

