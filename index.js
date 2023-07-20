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

function createFavoriteImageCard(faveImages) {
    let faveCard = document.createElement('div')
    faveCard.classList.add('fave-image-card')

    let faveImage = document.createElement('img')
    faveImage.classList.add('fave-image')
    faveImage.src = faveImages.url

    let faveImageTitle = document.createElement('p')
    faveImageTitle.classList.add('fave-image-title')
    faveImageTitle.textContent = `Title: ${faveImages.title}`

    let faveImageDate = document.createElement('p')
    faveImageDate.classList.add('fave-image-datge')
    faveImageDate.textContent = `Date: ${faveImages.date}`

    let faveImageRaiting = document.createElement('p')
    faveImageRaiting.classList.add('fave-image-raiting')
    faveImageRaiting.textContent = `Raiting: ${faveImages.raiting}/10`

    let faveImageNotes = document.createElement('p')
    faveImageNotes.classList.add('p')
    faveImageNotes.textContent = `Notes: ${faveImages.notes}`

    let faveImageUrl = document.createElement('p')
    faveImageUrl.classList.add('fave-image-url')
    faveImageUrl.textContent = `URL: ${faveImages.url}`

    let deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn')
    deleteBtn.classList.add('button')
    deleteBtn.textContent = 'Delete 🗑️'
    deleteBtn.addEventListener('click', (e) => {
        if(confirm('Are you sure you want to remove this image from favorites? This action cannot be undone.'))
            console.log('Delete button works!')
            // deleteFromFavorites()
    })

    faveCard.append(faveImage, faveImageTitle, faveImageDate, faveImageRaiting, faveImageNotes, faveImageUrl, deleteBtn)

    document.querySelector('.favorite-image-scroller').append(faveCard)
}

// Event Listeners
//====================================================

document.querySelector('#add-favorites-form').addEventListener('submit', handleSubmit)

// Event Handlers
//====================================================

function handleSubmit(e) {
    e.preventDefault()

    let formData = Object.fromEntries(new FormData(e.target))

    addNewFaveImage(formData)
    createFavoriteImageCard(formData)
    e.target.reset()
}

// Fetches
//====================================================

function getAllFaveImages() {
    fetch('http://localhost:3000/faveImages')
    .then(r => r.json())
    .then(faveImages => {
        faveImages.forEach(faveImage => createFavoriteImageCard(faveImage))
    })
}

function getSpaceImage(dateForApi) {
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=hDiFlZmxk03YhcXKdYMiAveaGhrwDgxFOjYAltax&start_date=${dateForApi}&end_date=${dateForApi}`

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

function addNewFaveImage(formData) {
    fetch("http://localhost:3000/faveImages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
    })
        .then(r => r.json())
        .then(newFaveImage => {
            formData.id = newFaveImage.id
        })
}

// Random Date Generator. For making random dates used in the api url to render random space image to the DOM. DISCLAIMER >>> I worked with chat GPT and read documentation to help get this to work as I got stuck many times.
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
    // the String() function is used to convert the month to a string as the method padStart can only use strings. The argument 2 is used to always make it two digits and 0 is what is put in front if it is only 1 digit. So 7 is turned to 07. 1 is added here as getMonth() function only returns 0-11, Jan = 0
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

// Intial Render
//====================================================

getSpaceImage(randomDateBetween)
getAllFaveImages()