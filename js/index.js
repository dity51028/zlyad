var options = {
  series: [76],
  chart: {
    type: 'radialBar',
    offsetY: -20,
    sparkline: {
      enabled: true,
    },
  },
  colors: ['#42c39a'],
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      track: {
        background: '#e7e7e7',
        strokeWidth: '97%',
        margin: 5, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: 2,
          left: 0,
          color: '#444',
          opacity: 1,
          blur: 2,
        },
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          offsetY: -2,
          fontSize: '22px',
          formatter: function () {
            return '12 / 26';
          }
        },
      },
    },
  },
  grid: {
    padding: {
      top: -10,
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      shadeIntensity: 0.4,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 53, 91],
    },
  },
  labels: ['Average Results'],
};

var options2 = {
  series: [56],
  chart: {
    type: 'radialBar',
    offsetY: -20,
    sparkline: {
      enabled: true,
    },

  },
  colors: ['#ea6b6b'],
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      track: {
        background: '#e7e7e7',
        strokeWidth: '97%',
        margin: 5, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: 2,
          left: 0,
          color: '#444',
          opacity: 1,
          blur: 2,
        },
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          offsetY: -2,
          fontSize: '22px',
          formatter: function () {
            return '20 / 26';
          }
        },
      },
    },
  },
  grid: {
    padding: {
      top: -10,
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      shadeIntensity: 0.4,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 53, 91],
    },
  },
  labels: ['Average Results'],
};


var options3 = {
  series: [40, 60],
  chart: {
    type: 'donut',
    height: 180
  },
  labels: ['Inbound', 'Outbound'],
  colors: ['#a97345', '#f3efec'],

  legend: {
    show: false
  },

  dataLabels: {
    enabled: true
  },

  plotOptions: {
    pie: {
      donut: {
        size: '70%',
        labels: {
          show: true,
          total: {
            show: true,
            label: 'Activities'
          }
        }
      }
    }
  }
};

var options4 = {
  series: [{
    name: 'Online',
    data: [55]
  }, {
    name: 'Offline',
    data: [45]
  }],
  chart: {
    type: 'bar',
    height: 120,
    stacked: true,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      borderRadius: 10
    }
  },
  colors: ['#A9744A', '#E8E2DE'],
  xaxis: {
    categories: [''],
    max: 100
  },
  dataLabels: {
    enabled: true
  },
  legend: {
    show: false
  }
};

var maleOptions = {
  series: [50],
  chart: {
    type: 'bar',
    sparkline: { enabled: true },

    height: 70,

  },
  colors: ['#45d0a5'],
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%'
      },
      track: {
        background: '#dcdcdc'
      },
      dataLabels: {
        show: false
      }
    }
  }
};

function showChart(id,colors,height,width){
  var maleOptions = {
  series: [
    {
      name: 'Value',
      data: [100]
    },
    {
      name: 'Background',
      data: [0]
    }
  ],
  chart: {
    type: 'bar',
    width: width,
    height: height,
    stacked: true,
    stackType: '100%',
    toolbar: {
      show: false
    },
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      borderRadius: 5,
      barHeight: '100%'
    }
  },
  colors: colors,
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  grid: {
    show: false
  },
  xaxis: {
    labels: {
      show: false
    }
  },
  yaxis: {
    show: false
  },
  tooltip: {
    enabled: false
  }
};

new ApexCharts(
  document.querySelector(id),
  maleOptions
).render();


};

var stat = {
  series: [
    {
      name: "Check In",
      data: [7, 9, 10, 9, 11, 12, 10]
    },
    {
      name: "Check Out",
      data: [1, 1, 1, 3, 2, 2, 1] // Extra height
    }
  ],

  chart: {
    type: "bar",
    height: 350,
    stacked: true,
    toolbar: {
      show: false
    }
  },

  colors: ["#41C49A", "#BFE9DD"],

  plotOptions: {
    bar: {
      borderRadius: 12,
      columnWidth: "35%"
    }
  },

  dataLabels: {
    enabled: false
  },

  stroke: {
    show: false
  },

  xaxis: {
    categories: [
      "SEP 10",
      "SEP 11",
      "SEP 12",
      "SEP 13",
      "SEP 14",
      "SEP 15",
      "SEP 16"
    ]
  },

  yaxis: {
    min: 0,
    max: 16,
    tickAmount: 4
  },

  grid: {
    borderColor: "#e9ecef",
    strokeDashArray: 4
  },

  legend: {
    position: "top",
    horizontalAlign: "right",
    markers: {
      radius: 12
    }
  },

  fill: {
    opacity: 1
  }
};






showChart("#maleChart",['#3dac8b', '#E8E8E8'],10,100);
showChart("#femaleChart",['#c2d749', '#E8E8E8'],30,100);
showChart("#maleChart2",['#3dac8b', '#E8E8E8'],10,100);
showChart("#femaleChart2",['#c2d749', '#E8E8E8'],30,100);
showChart("#maleChart3",['#3dac8b', '#E8E8E8'],10,100);
showChart("#femaleChart3",['#c2d749', '#E8E8E8'],30,100);



var chart = new ApexCharts(document.querySelector('#chart'), options);
var chart2 = new ApexCharts(document.querySelector('#chart2'), options2);
var chart3 = new ApexCharts(document.querySelector('#chart3'), options3);
var chart4 = new ApexCharts(document.querySelector("#progressBar"), options4);
var chart6 = new ApexCharts(
  document.querySelector("#statistics"),
  stat
);


chart.render();
chart2.render();
chart3.render();
chart4.render();
chart6.render();


