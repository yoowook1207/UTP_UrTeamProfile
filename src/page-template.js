const generatePortfolioCards = projectArr => {
    return `
        ${projectArr
        .filter(({feature}) => feature)
        .map(({name, id, email, role}))}
        <div class="card shadow" style="width: 25rem;">
            <div class="card-body">
                <h5 class="card-title">Alec</h5>
                <p class="card-text"> &#9749; Engineer</p>
                <!-- U+1F453 for glasses
                    U+1F393 for graduation cap  -->
            </div>
            <div class="card-content bg-light">
                <ul class="list-group list-group-flush mx-auto my-5 w-75 h-75 border">
                    <li class="list-group-item">ID: 1</li>
                    <li class="list-group-item">Email: <a href="yoowook1207@gmail.com" class="card-link">yoowook1207@gmail.com</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/yoowook1207" target="_blank" class="card-link">yoowook1207</a></li>
                </ul>
            </div>
        </div>
    `
}