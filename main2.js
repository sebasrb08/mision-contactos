const boton=document.getElementById('boton')
const obj=JSON.parse(localStorage.getItem('datos')) || [];

class Añadir{
    nombre
    apellido
    area
    usuario
    edad
    direccion
    email

    constructor(nombre,apellido,area,usuario,edad,direccion,email){
        this.nombre=nombre
        this.apellido=apellido
        this.area=area
        this.usuario=usuario
        this.edad=edad
        this.direccion=direccion
        this.email=email
    }
}
boton.addEventListener('click',()=>{
    let añadir=null
    añadir=new Añadir(nombre.value,apellido.value,area.value,usuario.value,edad.value,direccion.value,email.value)
    obj.push(añadir)
    localStorage.setItem('datos',JSON.stringify(obj))
    location.href='./index.html'

})