// Render to DOM Functions
//====================================================

function createSpaceImageCard (imageUrl, title, date) {
    let card = document.createElement('div')
    card.classList.add('space-image-card')

    let image = document.createElement('img')
    image.classList.add('space-image')
    image.src = imageUrl

    let imageTitle = document.createElement('p')
    imageTitle.classList.add('space-image-title')
    imageTitle.textContent = `Title: ${title}`

    let imageDate = document.createElement('p')
    imageDate.classList.add('space-image-date')
    imageDate.textContent = `Date: ${date}`

    let url = document.createElement('p')
    url.classList.add('space-image-url')
    url.textContent = `URL: ${imageUrl}`

    card.append(image, imageTitle, imageDate, url)
    document.querySelector('.space-image-card').append(card)

    // console.log('imageURL = ',imageUrl)
    // console.log('Title: ', title)
    // console.log('Date: ', date)
}

// Fetch Requests
//====================================================

function getSpaceImage (dateForApi) {
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=${dateForApi}&end_date=${dateForApi}`

    fetch(apiUrl)
        .then(r => r.json())
        .then(data => {
            const imageUrl = data[0].url 
            const title = data[0].title
            const date = data[0].date

            createSpaceImageCard(imageUrl, title, date)
        })
        .catch(error => {
            console.error('Error fetching data', error)
        })
}

// Random Date Generator. For making random dates used in the api url to render random space image to the DOM. DISCLAIMER >>> I worked with chat GPT to help get this to work as I got stuck many times.
//====================================================

const randomDate = function generateRandomDate(startDate, endDate) {
    // Converts the start and end dates to milliseconds
    const start = new Date(startDate).getTime()
    const end = new Date(endDate).getTime()

    // Generates a random number between the start and end dates
    const randomTime = Math.random() * (end - start) + start

    // Creates a new Date object with the random time
    const randomDate = new Date(randomTime)

    // Format the date as "yyyy-mm-dd"
    const year = randomDate.getFullYear()
    const month = String(randomDate.getMonth() + 1).padStart(2, '0')
    const day = String(randomDate.getDate()).padStart(2, '0')

    return `${year}-${month}-${day}`
}

// Set start date to "1995-06-16" The first day the api started posting images

const startDate = "1995-06-16"

// Get today's date and set it as the end date
const currentDate = new Date()
const endDate = currentDate.toISOString().split('T')[0]

// Make variable for ease of use and assign it random date
const randomDateBetween = randomDate(startDate, endDate)

getSpaceImage(randomDateBetween)