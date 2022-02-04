const gitHubYN = gitHubID => {
    if (!gitHubID) {
        return '';
    }
    return `<li class="list-group-item">GitHub: <a href="https://github.com/${gitHubID}" target="_blank" class="card-link">${gitHubID}</a></li>`
}

const officeYN = number => {
    if (!number) {
        return '';
    }
    return `<li class="list-group-item">Office Number: ${number}</li>`
}

const schoolYN = nameSchool => {
    if (!nameSchool) {
        return '';
    }
    return `<li class="list-group-item">School: ${nameSchool}</li>`
}

const generatePortfolioCards = projectArr => {
    return `
        ${projectArr
        .map(({name, id, email, gitHub, officeNumber, schoolName, role})=> {
            return `
            <div class="card shadow" style="width: 25rem;">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
            ${role}
            </div>
            <div class="card-content bg-light">
                <ul class="list-group list-group-flush mx-auto my-5 w-75 h-75 border">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}" class="card-link">${email}</a></li>
                    ${gitHubYN(gitHub)}
                    ${officeYN(officeNumber)}
                    ${schoolYN(schoolName)}
                </ul>
            </div>
        </div> 
            `
        })
        .join('')}
        
    `
}

module.exports = userInputData => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Sample</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link href="./style.css" rel="stylesheet"> 
    </head>

        <body>
            <header>
                <h1>My Team</h1>
            </header>

            <main class= "d-flex g-4 gap-3 w-75 mx-auto mt-5">

                ${generatePortfolioCards(userInputData)}


            </main>

        </body>
    </html>

    `
}