// Render component + data

function renderUser (data = null){
    const template = `
        <li class="useer">
            <figure>
                <img src="assets/img/" width="260" height="179" alt="">
                <figcaption>
                    <h2>Username:</h2>
                </figcaption>
            </figure>
        </li>
    `

    const element = document.createRange().createContextualFragment(template).children[0]

    return element
}

export {renderUser}