let lista_compra=['Arroz','Azucar','Café','Leche','Carne'];
lista_compra.push('Aceite de Girasol');
console.log (lista_compra);
lista_compra.pop();
console.log(lista_compra);

let peliculas = [
    {titulo:'matrix', director:'hermanas Wachowski', año:2003},
    {titulo:'the fast and furious', director:'Gary Scott Thompson', año:2001},
    {titulo:'en busca de la felicidad', director:'Gabriele Muccino', año:2006}];

let posterior_2010 = peliculas.filter(peli=>peli.año>2010);
console.log(posterior_2010);

let director=peliculas.map(dir => dir.director);
console.log(director);

let titulos= peliculas.map(titu =>titu.titulo);
console.log(titulos);

let directorTitulo = director.concat(titulos);
console.log(directorTitulo);

let directorTitulo2 = [...director, ...titulos];
console.log(directorTitulo2);