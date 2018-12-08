    
##   Michael Schumacher F1 career history Dashboard

The purpose of this project is to give the user a visual over view of Michael Schumacher’s achievements during his time as a Formula 1 driver
 
## UX
 
Use this section to provide insight into your UX process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:
- As a user type, I want to perform an action, so that I can achieve a goal.

This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included in the project itself (in an separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.

## Features

In this section, you should go over the different parts of your project, and describe each in a sentence or so.
 
### Existing Features
- Feature 1 - allows users X to achieve Y, by having them fill out Z
- ...

For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement

- A link to download graphs in PDF format

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.






- [D3( data driven document)](https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js)
		
A javascript which I used for creating interactive data	visualizations


- [Crossfilter](https://cdnjs.cloudflare.com/ajax/libs/crossfilter/1.3.12/crossfilter.min.js  )
	
Crossfilter is a javascript library which it makes it possible to interact with data sets 
 

- [DC](https://cdnjs.cloudflare.com/ajax/libs/dc/2.1.8/dc.js)

DC is a charting library built on top of D3


- [QUEUE](https://cdnjs.cloudflare.com/ajax/libs/queue-async/1.0.7/queue.min.js) 
	 

- [DC.min.css](https://cdnjs.cloudflare.com/ajax/libs/dc/2.1.8/dc.min.css)
	
CSS stylesheet libraries for dc

- [bootstrap](https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css) 

Bootstrap framework I used for setting the look and feel of the project  

- [JQuery](https://code.jquery.com/jquery-3.3.1.slim.min.js)   


- [popper.min.js](https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js)


- [bootstrap.min.js](https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js)

	Bootstrap  javascript libraries for interacting with elements  within  the DOM. For this project it hides the nav menu items when in mobile format



- [jspdf.min.js](https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js)


jspdf is used to convert onscreen data to pdf format to download a local copy


- [csv to json converter](https://www.csvjson.com/csv2json)

	After saving the table data in excel into csv format, I then used the following website to convert it to json as it is much easier to read and modify



	


## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful 

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

Site works well across the following browsers:

Chrome

![Alt chrome_dashboard](images/chrome.png "Dashboard")



Firefox

![Alt chrome_dashboard](images/firefox.png "Dashboard")

Opera

![Alt chrome_dashboard](images/opera.png "Dashboard")

Explorer

![Alt chrome_dashboard](images/explorer.png "Dashboard")

### Mobile compatibility

Although a Dashboard is not suitable for mobile devices it does display on Tablets but is no suitable for mobile phone format due to the functionality of the dashboard (the charts are linked with data and need to be seen on the screen at the same time)


You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

For deployment of this project I used GITHUB as a hosting platform. This process was done over several commits which are detailed as follows

1) Initial commit
index.html

Set up an index page and include all style links and scripts that are used during this project 

main.js

collect data from ms.json and display barchart based on number of points scored per Season.


ms.json

This file includes all the data used to display the various charts that are seen on the dashboard
 

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content

The information displayed in the dashboard is based on the following Table

https://en.wikipedia.org/wiki/Michael_Schumacher#Career_summary


### Media


-[Mercedes F1 car 2012](https://www.google.ie/search?hl=en-IE&authuser=0&biw=1920&bih=889&tbm=isch&sa=1&ei=-MkLXOvVGZmR1fAPw7azwAI&q=michael+schumacher+mercedes&oq=michael+schumacher+mercedes&gs_l=img.3..0l3j0i30l3j0i24l4.641033.642759..643064...0.0..0.69.478.8......0....1..gws-wiz-img.MEzE0f1WJso#imgrc=5v9GpAUMP06bGM:)

-[Benetton F1 car 1995](https://www.google.ie/search?hl=en-IE&authuser=0&biw=1920&bih=889&tbm=isch&sa=1&ei=sdALXIDjE-WM1fAPp_ai0AY&q=michael+schumacher+benetton+1995&oq=michael+schumacher+be&gs_l=img.1.3.0j0i8i30j0i30l4j0i8i30l2j0i24l2.3319.5541..7373...0.0..0.70.187.3......0....1..gws-wiz-img.......0i67.WTLxULVOEsQ#imgrc=aaU5Gl1tT9hDCM:)

-[Ferrari F1 car 2004](https://www.google.ie/search?hl=en-IE&authuser=0&biw=1920&bih=889&tbm=isch&sa=1&ei=rs8LXKW_ONyQ1fAP_J-h2AU&q=michael+schumacher+ferrari&oq=michael+schumacher+ferr&gs_l=img.1.0.0l7.496237.496796..498531...0.0..0.60.228.4......0....1..gws-wiz-img.......0i67.PDZ4eHNaK84#imgrc=j8-6ZedeXvuNDM:)

### Acknowledgements

- I used the following course to get a better understanding of the 	structure of D3 and SVG

https://www.udemy.com/masteringd3js/

- I found this tutorial to be a very helpful resource

https://www.tutorialspoint.com/dcjs/

- Dc example graphs

https://dc-js.github.io/dc.js/examples/







