const resultado = document.getElementById("resultado");
async function getList() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/"
    );
    const jsonData = await response.json();
    for (const post of jsonData) {
        resultado.innerHTML += `
    <div class="container-resultado">

       <h2>Dados Cliente</h2>
        <p><span>Name : </span>${post.name}- ${post.username}</p>
        <p><span>E-mail : </span>${post.email}</p>
        <p><h3>Endereço  </h3></p>
        <p><span>Rua  : </span>${post.address.street} - <span>Numero : </span> ${post.address.suite}</p>
        <p><span>Cidade :</span> ${post.address.city} - <span>Cep : </span> ${post.address.zipcode}  </p>
        <p> </p>
        <p><span>Latitudade :</span> ${post.address.geo.lat} - Longetudo : ${post.address.geo.lng}</p>
        <h3>Dados complementares</h3>
        <p><span>Telefone : </span> ${post.phone}</p>
        <p><span>Site : </span> ${post.website}</p>
        <p><h3>Dados Empresa :</h3> 
        <p>${post.company.name}</p>
        <p>${post.company.catchPhrase}</p>
        <p>${post.company.bs}</p>
     </div>`;

    }
    return await response.json();
}
getList();
