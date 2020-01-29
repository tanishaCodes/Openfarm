var windChart = document.getElementById('windChart').getContext('2d');

var windWeekChart = new Chart(windChart, {
  type: 'horizontalBar',
  data: {
    labels:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets:[{
      label:'Wind',
      data:[15, 10, 12, 8, 16, 14, 18],
      backgroundColor:'orange',
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
          label: (item) => `${item.yLabel} mph`,
        },
      },
  }
});

