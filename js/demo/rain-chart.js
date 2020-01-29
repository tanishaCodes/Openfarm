var rainChart = document.getElementById('rainChart').getContext('2d');

var rainWeekChart = new Chart(rainChart, {
  type: 'line',
  data: {
    labels:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets:[{
      label:'Precipitation',
      data:[30, 20, 60, 90, 70, 20, 10],
      backgroundColor:'teal',
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
                labelString: 'Precipitation in ˚%'

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

