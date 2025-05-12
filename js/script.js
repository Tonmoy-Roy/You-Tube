function passbtn() {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(response => response.json())
        .then(data => disbtn(data.categories))
}
const disbtn = (cosma) => {
    const parent = document.getElementById('btn-fes');
    for (const glass of cosma) {
        const crt = document.createElement('p');
        crt.innerText = glass.category;
        parent.appendChild(crt);
        crt.classList = 'btn'; // creaing a button shape
    }
    // cosma.forEach(element => {
    //     const crt = document.createElement('p');
    //     crt.innerText = element.category;
    //     parent.appendChild(crt);
    // });
}
function passvds() {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(response => response.json())
        .then(data => disvds(data.videos))
}
const disvds = (vds) => {
    console.log(vds);
    const parentvds = document.getElementById('vds');
    for (const disvds of vds) {
        const crtvds = document.createElement('p');
        crtvds.innerHTML = `
            <figure>
                <img class="md:h-50 md:w-80 rounded" src = ${disvds.thumbnail} alt="Shoes" />
            </figure>
            <div class="card-body">
                <div class="md:flex">
                    <img class="rounded-full md:h-7 md:w-7 mr-2" src=${disvds.authors[0].profile_picture} />
                    <h2 class="card-title">${disvds.title}</h2>
                </div>
                <div class="md:flex items-center ml-9 text-gray-600">
                    <div>
                        <p class="md:w-30">${disvds.authors[0].profile_name}</p>
                    </div>
                    <img class="md:h-7 md:w-7" src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png"/>
                </div>
                <p class="ml-9 text-gray-600">${disvds.others.views} views</p>
            </div>
        `
        crtvds.classList = 'card';
        parentvds.appendChild(crtvds);
        // creaing a button shape
    }
}
passbtn();
passvds();