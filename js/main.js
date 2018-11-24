

queue()
        .defer(d3.json, "data/ms.json")// import ms.json file
        .await(makeGraphs); // send data

    
    function makeGraphs(error, careerStats) { // create function makeGraphs

        var ndx = crossfilter(careerStats); // put json file through crossfilter
        var pts_dim = ndx.dimension(dc.pluck('Season')); //create variable for x axis(Season)
        var total_points_per_year = pts_dim.group().reduceSum(dc.pluck('Points')); // create variable for group y axis (Points)
        

           dc.barChart("#points_per_year_bar") // draw chart in div id points_per_year_bar
            .width(600) // set width
            .height(300) //set height
            .margins({top: 20, right: 20, bottom: 40, left: 40}) // set margins
            .dimension(pts_dim) // assign var pts_dim to dimension
            .group(total_points_per_year) // assign variable total_points_per_year to group
            .transitionDuration(500)// set time it takes to draw after each reload
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            .xAxisLabel("Season") // assign label to xAxis
            .yAxisLabel("Total Points") // assign label to yAxis
            .yAxis().ticks(8); // declare number of ticks used for y axis
            
            
            dc.renderAll();
    }