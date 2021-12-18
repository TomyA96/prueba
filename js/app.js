/* Pagina 2 */
let nros = []


    function agregar() {
        let nro = parseInt(document.getElementById('nro').value)
    if (isNaN(nro)===true) {
        window.alert("Los datos ingresados son incorrectos...Intentar de nuevo...")
        document.getElementById('nro').value = ''
        
    }else{
        nros.push(nro)
        document.getElementById('nro').value = ''
        }
        
    }

    function mostrar() {
        let res = ""
        if (document.getElementById('par').checked){
            for (let i = 0; i < nros.length; i++) {
             
                if ((nros[i]%2) == 0) {
                    res = res +  '<h4>'+ nros[i] + '</h4>'
                }
            }
        }
        else{
            for (let i = 0; i < nros.length; i++) {
                if ((nros[i]%2) != 0) {
                    res = res +  '<h4>'+ nros[i] + '</h4>'
                }
            }  
        }
        document.getElementById('res').innerHTML = res
            
            
        
    
}

/* Pagina 3 */
let palabras = []

function agregarP(){
    let palabra = document.getElementById('palabra').value
    if (palabra == "") {
        window.alert("No ingreso ningun dato...")
        document.getElementById('palabra').value = ''
    }
    else{
        palabras.push(palabra.toUpperCase())
        document.getElementById('palabra').value = ''
    }
}

function mostrarP(){
    let palabra = ""
    let res = ""

    for (let i = 0; i < palabras.length; i++) {
        palabra = palabras[i].trim()
        if (palabra[0]== 'A' || palabra[0] == 'E' || palabra[0]=='I' || palabra[0]=='O' || palabra[0]=='U' ) {
            if (palabra[palabra.length - 1] != 'A' && palabra[palabra.length - 1] != 'E' && palabra[palabra.length - 1]!='I' && palabra[palabra.length - 1]!='O' && palabra[palabra.length - 1]!='U') {
                res= res + '<h4>' + palabra +  '</h4>'
            }
          
        }
        
    }
    document.getElementById('res').innerHTML = res
}




