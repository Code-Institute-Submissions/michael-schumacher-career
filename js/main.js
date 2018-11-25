

queue()
        .defer(d3.json, "data/ms.json")// import ms.json file
        .await(makeGraphs); // send data

    
    function makeGraphs(error, careerStats) { // create function makeGraphs

        var ndx = crossfilter(careerStats); // put json file through crossfilter
        
        var name_dim = ndx.dimension(dc.pluck('Season'));
        var fast = name_dim.group().reduceSum(function (d) {
            if (d.Team === 'Scuderia Ferrari Marlboro') {
                return +d.F_Laps;
            } else {
                return 0;
            }
        });
        var wins = name_dim.group().reduceSum(function (d) {
            if (d.Team === 'Scuderia Ferrari Marlboro') {
                return +d.Wins;
            } else {
                return 0;
            }
        });

        var poles = name_dim.group().reduceSum(function (d) {
            if (d.Team === 'Scuderia Ferrari Marlboro') {
                return +d.Poles;
            } else {
                return 0;
            }
        });

        var stackedChart = dc.barChart("#stacked-chart");
        stackedChart
            .width(550)
            .height(330)
            .dimension(name_dim)
            .group(fast, "fast laps")
            .stack(wins, "Wins")
            .stack(poles, "pole position")
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            .legend(dc.legend().x(600).y(0).itemHeight(15).gap(5))
        stackedChart.margins().right = 100;
        
        var pts_dim = ndx.dimension(dc.pluck('Season')); //create variable for x axis(Season)
        var total_points_per_year = pts_dim.group().reduceSum(dc.pluck('Points')); // create variable for group y axis (Points)
        

           dc.barChart("#points_per_year_bar") // draw  barchart in div id points_per_year_bar
            .width(550) // set width
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
                  .height(300) //set height
                  .width(550) // set width                 
                  .dimension(team) // assign var team to dimension
                  .group(total_podiums_per_team) // assign variable total_points_per_year to group
                  .transitionDuration(1500); // set time it takes to draw after each reload   
                  
                  
       
        var total_poles_per_team = team.group().reduceSum(dc.pluck('Poles'));
        
        

            dc.pieChart("#total_poles_per_team") // draw   piechart in div id points_per_year_bar
              .height(300) //set height
              .width(550) // set width  
              .slicesCap(7)   // number of slices in pie
              .radius(100)  // radius of pie
              .innerRadius(50)   // inner radius of pie          
              .dimension(team) // assign var pts_dim to dimension
              .group(total_poles_per_team)
              .transitionDuration(1500) // set time it takes to draw after each reload   
              .legend(dc.legend().x(5).y(90).itemHeight(10).gap(5));  // display legends
              
              
        
       
            
            dc.renderAll();
    }