function passbtn() {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(response => response.json())
        .then(data => disbtn(data.categories))
}
const disbtn = (shwbtn) => {
    const parent = document.getElementById('btn-fes');
    for (const glass of shwbtn) {
        const crt = document.createElement('p');
        crt.innerText = glass.category;
        parent.appendChild(crt);
        crt.classList = 'btn'; // creating a button shape
    }
    // shwbtn.forEach(element => {
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
            <figure class="relative">
                <img class="md:h-50 md:w-80" src = ${disvds.thumbnail} alt="Shoes" />
                ${disvds.others.posted_date?.length==0? "" : `<span class="absolute right-3 rounded bottom-2 text-white bg-black">${getime(disvds.others.posted_date)} ago </span>}`}
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
                    ${disvds.authors[0].verified == true ? `<img class="md:h-7 md:w-7" src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png"/>` : " "}
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