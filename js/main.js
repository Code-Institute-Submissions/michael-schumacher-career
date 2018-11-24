

queue()
        .defer(d3.json, "data/ms.json")// import ms.json file
        .await(makeGraphs); // send data

    
    function makeGraphs(error, careerStats) { // create function makeGraphs

        var ndx = crossfilter(careerStats); // put json file through crossfilter
        
        var pts_dim = ndx.dimension(dc.pluck('Season')); //create variable for x axis(Season)
        var total_points_per_year = pts_dim.group().reduceSum(dc.pluck('Points')); // create variable for group y axis (Points)
        

           dc.barChart("#points_per_year_bar") // draw  barchart in div id points_per_year_bar
            .width(600) // set width
            .height(300) //set height
            .margins({top: 20, right: 20, bottom: 40, left: 40}) // set margins
            .dimension(pts_dim) // assign var pts_dim to dimension
            .group(total_points_per_year) // assign variable total_points_per_year to group
            .transitionDuration(500) // set time it takes to draw after each reload
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            .xAxisLabel("Season") // assign label to xAxis
            .yAxisLabel("Total Points") // assign label to yAxis
            .yAxis().ticks(8); // declare number of ticks used for y axis
            
            
        var team = ndx.dimension(dc.pluck('Team')); //create variable for x axis(Team)
        var total_podiums_per_team = team.group().reduceSum(dc.pluck('Podiums')); // create variable for group y axis (Podiums)
            
            
    
                dc.rowChart("#podiums_per_team_row")  // draw  barchart in div id points_per_year_bar
                  .height(400) //set height
                  .width(500) // set width                 
                  .dimension(team) // assign var team to dimension
                  .group(total_podiums_per_team) // assign variable total_points_per_year to group
                  .transitionDuration(1500); // set time it takes to draw after each reload   
                  
                  
       var pts_dim = ndx.dimension(dc.pluck('Team'));
        var total_poles_per_team = pts_dim.group().reduceSum(dc.pluck('Poles'));
        
        

            dc.pieChart("#total_poles_per_team")
              .height(300) 
              .width(600)
              .slicesCap(7)   
              .radius(100) 
              .innerRadius(50)             
              .dimension(pts_dim)
              .group(total_poles_per_team)
              .transitionDuration(1500)
              // display legends
              .legend(dc.legend().x(5).y(90).itemHeight(10).gap(5));
            
            dc.renderAll();
    }