const crear=document.getElementById('crear')
const tbody=document.getElementById('tbody')
let cont=0
let datos=null
let datos2=[]
let fila=null
crear.addEventListener('click',()=>{
    location.href='./index2.html'
})

datos=JSON.parse(localStorage.getItem('datos'))
datos.forEach(element => {
    fila="<tr><th>"+element.area+"</th><td>"+element.nombre+' '+element.apellido+"</td><td>"+element.usuario+"</td><td>"+element.email+"</td><td>"+element.edad+"</td></tr>";
    tbody.innerHTML+=fila

});
// let tr1=document.createElement('tr')
// let  td1=document.createElement('td')
// td1.textContent=datos.nombre
// tbody.append(td1)
