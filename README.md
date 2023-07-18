# phase-1-front-end-project
To make this work you will need to run json-server and watch the db.json file 

##### This is my phase-1 project for software development bootcamp at Flatiron School 2023. It is creating a Space image rater with a focus on front-end design. Below is a description of:
- Context of the Work - general vision
- Minimum Viable Product (MVP) Requirements, 
- User Stories 

## Context of the work

The major goal of doing this project is to highlight my design and custom CSS to make a clean and modern site. The site will meet the MVPs and stretch goals as well, but focus on look and feel. The site is a simple one, display random image from NASA image of the day api and be able to add it to favorite with notes and rating using a form. Will add some other elements that don't have functionanlity but can be used to highlight design. For example, log-in area, socual media buttons, and the like. 

## MVP Requirements - Phase-1-Project requiremnts

- Your app must be a HTML/CSS/JS frontend that accesses data from a public API or from a db.json file using json-server. Your API or db.json should return a collection of at least 5 objects with each object having at least 3 attributes. All interactions between the client and the API should be handled asynchronously and use JSON as the communication format. Try to avoid using an API that requires a key. APIs that are free and require no authorization will be easiest to use. For ideas, see this list of no-auth APIs. If you would like to use an API that requires a key, please consult with your instructor on how to protect that key. NEVER push your API key to github!

- Your entire app must run on a single page. There should be NO redirects or reloads. In other words, your project will contain a single HTML file.

- Use at least 2 distinct event listeners (2 events of different types) that enable interactivity. What this means is that, if you had 2 click events, that would only count as 1 distinct event and you would need to add at least 1 more. Think search or filter functionality, toggling dark/light mode, upvoting posts, etc. Each of your event listeners should also have its own unique callback function. These must be added using JavaScript's .addEventListener() method. Events embedded into HTML elements and CSS will not count toward the total. Please ask your instructor if you have questions regarding this requirement.
Your project must implement at least one instance of array iteration using available array methods (map, forEach, filter, etc). Manipulating your API data in some way should present an opportunity to implement your array iteration.

- Follow good coding practices. Keep your code DRY (Do not repeat yourself) by utilizing functions to abstract repetitive code.

### Stretch goals

- Use json-server in your project to persist your app's interactivity.

- Use 3 or more event listeners.

## Link to my figma page outlining how I met MVPs and current goals wokring on for site
https://www.figma.com/file/skc1QMESuVDJRZ273Llh4Z/Front-End-Phase-1-Project?type=whiteboard&t=7XtjVJ1MsuH2eDSA-1


## User Stories 
- User will be able to view a random image from NASA image of the day API when the site loads
- User will be able to click a random image button to get another random image
- User will be able to like an image and save it as a favorite using a form. The form will also include, what the image is, rating, and notes. These will be saved to local db.json so there is persistence of a sort. 
- User will be able to scroll through their favorite images and see notes etc via list of cards
- User will be able to interact with nav bar, but they will be dead links as this site is only one page, same with footer social media links and log-in section. 

## Resources 
- NASA API Link: https://github.com/nasa/apod-api
- Fetch Example Link: https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2017-07-08&end_date=2017-07-08
- Image Example Link: https://apod.nasa.gov/apod/image/1707/ic342_rector1024s.jpg
- NOTE >>>>>> DEMO_KEY Rate Limits
In documentation examples, the special DEMO_KEY api key is used. This API key can be used for initially exploring APIs prior to signing up, but it has much lower rate limits, so you’re encouraged to signup for your own API key if you plan to use the API (signup is quick and easy). The rate limits for the DEMO_KEY are:

Hourly Limit: 30 requests per IP address per hour
Daily Limit: 50 requests per IP address per day
