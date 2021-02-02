function createGauge(wfreq) {
    
    let level = parseFloat(wfreq) * 20;
  
    var degrees = 180 - level;
    var radius = 0.5;
    var radians = (degrees * Math.PI) / 180;
    var x = radius * Math.cos(radians);
    var y = radius * Math.sin(radians);
  
    let main_Path = "M -.0 -0.05 L .0 0.05 L ";
    let x_Path = String(x);
    let space = " ";
    let y_Path = String(y);
    let end_Path = " Z";
    let path = main_Path.concat(x_Path, space, y_Path, end_Path);
  
    var data = [
      {
        type: "scatter",
        mode: "gauge+number",
        x: [0],
        y: [0],
        marker: { size: 12, color: "ff0000" },
        showlegend: false,
        name: "Frequency",
        text: level,
        hoverinfo: "text+name"
      },
      {
        values: [50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50],
        rotation: 90,
        text: ["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
        textinfo: "text",
        textposition: "inside",
        marker: {
          colors: [
            "rgba(89, 0, 179, 1)",
            "rgba(89, 9, 170, .9)",
            "rgba(89, 18, 161, .8)",
            "rgba(89, 27, 152, .7)",
            "rgba(89, 36, 143, .6)",
            "rgba(89, 45, 134, .5)",
            "rgba(89, 54, 125, .4)",
            "rgba(89, 62, 116, .3)",
            "rgba(89, 71, 107, .2)",
            "rgba(89, 80, 98, 0)"
          ]
        },
        labels: ["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
        hoverinfo: "label",
        hole: 0.5,
        type: "pie",
        showlegend: false
      }
    ];
  
    var gauge_Layout = {
      shapes: [
        {
          type: "path",
          path: path,
          fillcolor: "ff0000",
          line: {
            color: "ff0000"
          }
        }
      ],
      title: "<b>Belly Button Washing Frequency</b> <br> Scrubs per Week",
      height: 500,
      width: 500,
      xaxis: {
        zeroline: false,
        showticklabels: false,
        showgrid: false,
        range: [-1, 1]
      },
      yaxis: {
        zeroline: false,
        showticklabels: false,
        showgrid: false,
        range: [-1, 1]
      }
    };
  
    var gaugeCanvas = document.getElementById("gauge");
    Plotly.newPlot(gaugeCanvas, data, gauge_Layout);
  }
  