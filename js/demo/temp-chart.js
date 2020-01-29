var tempChart = document.getElementById('tempChart').getContext('2d');

var tempWeekChart = new Chart(tempChart, {
  type: 'bar',
  data: {
    labels:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets:[{
      label:'Temperature',
      data:[65, 57, 61, 70, 73, 62, 55],
      backgroundColor:'#1cc88a',
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
                labelString: 'Temperature in ˚F'

            }
          }]
      },
      tooltips: {
        callbacks: {
          label: (item) => `${item.yLabel} ˚F`,
        },
      },
  }
});

