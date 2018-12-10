

queue()
        .defer(d3.json, "data/ms.json")// import ms.json file
        .await(makeGraphs); // send data

    
    function makeGraphs(error, careerStats) { // create function makeGraphs

        var ndx = crossfilter(careerStats); // put json file through crossfilter
        
        
            // conditional if else statement to display all fast laps at ferrari
        var name_dim = ndx.dimension(dc.pluck('Season'));
        var fast = name_dim.group().reduceSum(function (d) {
            if (d.Team === 'Scuderia Ferrari Marlboro') {
                return +d.F_Laps;
            } else {
                return 0;
            }
        });
            // conditional if else statement to display all wins at ferrari
        var wins = name_dim.group().reduceSum(function (d) {
            if (d.Team === 'Scuderia Ferrari Marlboro') {
                return +d.Wins;
            } else {
                return 0;
            }
        });

            // conditional if else statement to display all pole positions at ferrari
        var poles = name_dim.group().reduceSum(function (d) {
            if (d.Team === 'Scuderia Ferrari Marlboro') {
                return +d.Poles;
            } else {
                return 0;
            }
        });
            // draw barchart for ferrari statistics(fast laps, wins, podiums)
        dc.barChart("#ferrari")
            .width(950)
            .height(500)
            .margins({top: 20, right: 20, bottom: 40, left: 40})
            .dimension(name_dim)
            .group(fast, "fast laps")
            .renderHorizontalGridLines(true)
            .stack(wins, "Wins")
            .stack(poles, "pole position")
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            .legend(dc.legend().x(850).y(0).itemHeight(15).gap(5));
            
            // conditional if else statement to display all fast laps at Mercedes
        var fast_2 = name_dim.group().reduceSum(function (d) {
            if (d.Team === 'Mercedes GP Petronas F1 Team' || d.Team === 'Mercedes AMG Petronas F1 Team') {
                return +d.F_Laps;
            } else {
                return 0;
            }
        });
            // conditional if else statement to display total races at Mercedes
        var completed_races = name_dim.group().reduceSum(function (d) {
            if (d.Team === 'Mercedes GP Petronas F1 Team' || d.Team === 'Mercedes AMG Petronas F1 Team') {
                return +d.Races;
            } else {
                return 0;
            }
        });
            // conditional if else statement to display all points scored at Mercedes
        var poles_2 = name_dim.group().reduceSum(function (d) {
            if (d.Team === 'Mercedes GP Petronas F1 Team' || d.Team === 'Mercedes AMG Petronas F1 Team') {
                return +d.Points;
            } else {
                return 0;
            }
        });
            // draw barchart for Mercedes statistics(fast laps, wins, Pole positions)
        dc.barChart("#mercedes")
            .width(950)
            .height(500)
            .margins({top: 20, right: 20, bottom: 40, left: 40})
            .dimension(name_dim)
            .group(fast_2, "fast laps")
            .renderHorizontalGridLines(true)
            .stack(completed_races, "Races")
            .stack(poles_2, "pole position")
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            .legend(dc.legend().x(75).y(0).itemHeight(15).gap(5));
            
            
         // Benetton
        var fast_3 = name_dim.group().reduceSum(function (d) {
            if (d.Team === 'Camel_Benetton_Ford' || d.Team === 'Mild_Seven_Benetton_Ford' || d.Team === 'Mild Seven Benetton Renault') {
                return +d.F_Laps;
            } else {
                return 0;
            }
        });
        var wins_3 = name_dim.group().reduceSum(function (d) {
            if (d.Team === 'Camel_Benetton_Ford' || d.Team === 'Mild_Seven_Benetton_Ford' || d.Team === 'Mild Seven Benetton Renault') {
                return +d.Wins;
            } else {
                return 0;
            }
        });

        var poles_3 = name_dim.group().reduceSum(function (d) {
            if (d.Team === 'Camel_Benetton_Ford' || d.Team === 'Mild_Seven_Benetton_Ford' || d.Team === 'Mild Seven Benetton Renault') {
                return +d.Poles;
            } else {
                return 0;
            }
        });
        // draw barchart for ferrari statistics(fast laps, wins, Pole positions)
        dc.barChart("#benetton")
            .width(950)
            .height(500)
            .margins({top: 20, right: 20, bottom: 40, left: 40})
            .dimension(name_dim)
            .group(fast_3, "fast laps")
            .renderHorizontalGridLines(true)
            .stack(wins_3, "Wins")
            .stack(poles_3, "pole position")
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            .legend(dc.legend().x(850).y(0).itemHeight(15).gap(5));
            
            
        var total_records = ndx.dimension(dc.pluck('Record')); //create variable for x axis(Team)
        var record = total_records.group().reduceSum(dc.pluck('Current_Record')); // create variable for group y axis (Podiums)
            
            
                // display all records achieved in row chart
                dc.rowChart("#records")  
                  .height(600) 
                  .width(1000)                 
                  .dimension(total_records)
                  .group(record) 
                  .transitionDuration(1500); 
        
        
        var pts_dim = ndx.dimension(dc.pluck('Season')); //create variable for x axis(Season)
        var total_points_per_year = pts_dim.group().reduceSum(dc.pluck('Points')); // create variable for group y axis (Points)
        
            // draw  barchart displaying total points scored each season
           dc.barChart("#points_per_year_bar") 
            .width(550) 
            .height(300) 
            .margins({top: 20, right: 20, bottom: 40, left: 40}) 
            .dimension(pts_dim) 
            .group(total_points_per_year) 
            .renderHorizontalGridLines(true)
            .transitionDuration(500) 
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            .xAxisLabel("Season") 
            .yAxisLabel("Total Points") 
            .yAxis().ticks(8); 
            
            
            var team = ndx.dimension(dc.pluck('Team'));
            var total_podiums_per_team = team.group().reduceSum(dc.pluck('Podiums'));
            
            
    
                dc.rowChart("#podiums_per_team_row")
                  .height(400) 
                  .width(500)                  
                  .dimension(team)
                  .group(total_podiums_per_team)
                  .transitionDuration(1500);
                  
                  
       
        var total_poles_per_team = team.group().reduceSum(dc.pluck('Poles'));
        
        

            dc.pieChart("#total_poles_per_team") // draw   piechart in div id points_per_year_bar
              .height(300) 
              .width(550) 
              .slicesCap(7)  
              .radius(100)  
              .innerRadius(50)  
              .dimension(team) 
              .group(total_poles_per_team)
              .transitionDuration(1500) 
              .legend(dc.legend().x(5).y(90).itemHeight(10).gap(5));  
        
       
            
            dc.renderAll();
    }