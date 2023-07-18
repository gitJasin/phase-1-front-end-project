// Render to DOM Functions
//====================================================

function createDailyImageCard (imageURL, title, date) {

}

// Fetch Requests
//====================================================

function getSpaceImage () {
        
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

// Generate random date
const randomDateBetween = randomDate(startDate, endDate)