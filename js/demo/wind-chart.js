var windChart = document.getElementById('windChart').getContext('2d');

var windWeekChart = new Chart(windChart, {
  type: 'horizontalBar',
  data: {
    labels:dowarray,
    datasets:[{
      label:'Wind',
      data:windy,
      backgroundColor:'orange',
    }],
  },
  options:{
      legend:{
          display:false,
      },
      layout:{
          padding:{
              bottom:100,
          }   
      },
      scales:{
          xAxes:[{
              ticks:{
                  beginAtZero:true,
              },
              scaleLabel:{
                display: true,
                labelString: 'Wind in MPH'

            }
          }]
      },
      tooltips: {
        callbacks: {
          label: (item) => `${item.xLabel} mph`,
        },
      },
  }
});

