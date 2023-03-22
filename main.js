const crear=document.getElementById('crear')
const tbody=document.getElementById('tbody')
const buscar=document.getElementById('buscar')

let datos=null
crear.addEventListener('click',()=>{
    location.href='./index2.html'
})
let nombre=[]
datos=JSON.parse(localStorage.getItem('datos'))
function filtrar(){
    tbody.innerHTML=''
    datos.forEach(element => {
        nombre=element.nombre.toLowerCase()
        if(nombre.indexOf(buscar.value.toLowerCase())!= -1){
            
            fila="<tr><th rowspan = 1>"+element.area+"</th><td>"+element.nombre+' '+element.apellido+"</td><td>"+element.usuario+"</td><td>"+element.email+"</td><td>"+element.edad+"</td></tr>";
            tbody.innerHTML+=fila
        }
       

    });
  
}
buscar.addEventListener('keyup',filtrar)
filtrar()

