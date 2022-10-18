let texto = document.querySelector('.texto')
let botonAgregar = document.querySelector('.boton')
let lugar = document.querySelector('.lista')

let articulos = []

// funcion para ver en el DOM los ITEMS--------------------
const renderizar = ( arr ) => {
    lugar.innerHTML = ""
    arr.forEach( (item , index) => {
       lugar.innerHTML += `
         <div class = 'lista_contenedor'>
           <li>${item.articulo}</li>
           <button class='borrar' onclick=(eliminar(${index}))  >eliminar</button>
         </div>
           `
    } )
}

// funcion para agregar al localStorage los items y verlos en el DOM--------------------
const agregarLocalStorage = () => {
    let lista = {
        articulo: texto.value
    }
    articulos.push( lista )
    localStorage.setItem( 'articulos' , JSON.stringify(articulos) )
    texto.value = ''
    renderizar(articulos)
}


// funcion para mostrar los ITEMS que estan en el localStorage al cargar la pagina--------------------
const mostrarLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem( 'articulos' ))
    if( data ) {
        data.forEach( item => {
            articulos.push(item)
        })
    }
    renderizar(articulos)
     
}


// funcion para elimiar los ITEMS del localStorage--------------------

const eliminar = ( numero ) => {
   
   articulos.splice( numero , 1)
   localStorage.setItem('articulos' , JSON.stringify(articulos))
   renderizar(articulos)
   if( articulos.length === 0 ){
    localStorage.removeItem('articulos')
   }
}

mostrarLocalStorage()

botonAgregar.addEventListener( 'click' , agregarLocalStorage)