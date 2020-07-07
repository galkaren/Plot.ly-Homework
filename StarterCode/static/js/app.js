const url = "../StarterCode/samples.json";

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);

  var sample_values = data.samples.map(function(d) { return d.sample_values[0];});
  var otu_ids = data.samples.map(function(d) { return `OTU ${d.otu_ids[0]}`;});

  console.log(otu_ids);

  var trace1 = {
    x: sample_values,
    y: otu_ids,
    type: "bar",
    orientation: 'h'
  };
  
  var data = [trace1];
  
  var layout = {
    title: "Bar Chart"
  };
  
  Plotly.newPlot("bar-plot", data, layout);



  var trace2 = {
    x: otu_ids,
    y: sample_values,
    mode: 'markers',
  };
  
  var data = [trace2];
  
  var layout = {
    title: 'Bubble chart',
    showlegend: false,
    height: 600,
    width: 600
  };
  
  Plotly.newPlot('bubble', data, layout);
});



