function createMetadata(sample) {
    d3.json("samples.json").then((data) => {
        let metadata = data.metadata;
        var filteredArray = metadata.filter(sampleObj => sampleObj.id == sample);
        var result = filteredArray[0];

        let canvas = d3.select("#sample-metadata");
        canvas.html("");

        Object.entries(result).forEach(([key, value]) => {
            canvas.append("h6").text(`${key.toUpperCase()}: ${value}`);
        });
        
        createGauge(result.wfreq);
    });
}

function createCharts(sample) {
    d3.json("samples.json").then((data) => {
        let data_samples = data.samples
        var filteredArray = data_samples.filter(sampleObj => sampleObj.id == sample);
        var result = filteredArray[0];

        let otu_IDs = result.otu_ids;
        let otu_Labels = result.otu_labels;
        let sample_Values = result.sample_values;

        let bubbleChartLayout = {
            title: "Bacteria Cultures Per Sample",
            margin: { t: 0 },
            hovermode: "closest",
            xaxis: { title: "OTU ID" },
            margin: { t: 30}
        };

        let bubbleChartData = [
            {
                x: otu_IDs,
                y: sample_Values,
                text: otu_Labels,
                mode: "markers",
                marker: {
                  size: sample_Values,
                  color: otu_IDs,
                  colorscale: "Earth"
                }
              }
        ];

    })
}