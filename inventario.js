
class Inventario {
    constructor(){
        this.productos = [];
    }

    agregarProducto(producto) {
        if (this.productos.length > 0) {
            this.productos.push(producto);
            for (let i = this.productos.length -2; i >= 0; i--) {
                console.log(this.productos.length);
                if (producto.codigo <= this.productos[i].codigo) {
                    console.log(`%c     EL producto con codigo: ${producto.codigo}, es MENOR que el siguiente producto con codigo: ${this.productos[i].codigo}.`, "color:blue");
                    this.aux = this.productos[i];
                    this.productos[i] = producto;
                    this.productos[i+1] = this.aux;
                } else {
                    console.log(`%c     EL producto con codigo: ${producto.codigo}, es MAYOR que el siguiente producto con codigo: ${this.productos[i].codigo}.`, "color:orange");
                }
            }
            return true;
        } else {
            console.log('Extensión 0');
            this.productos.push(producto);
            return true;
        }
    }

    eliminarProducto(codigo) {
        
        let lastPosition = this.productos.length-1;
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].codigo == codigo) {
                let aux = this.productos[i];
                for(let j = i+1; j < this.productos.length; j++){
                    this.productos[j-1] = this.productos[j];
                    
                }
                this.productos[lastPosition] = aux;
                this.productos.pop();
            }
            }
                console.log(`%c     Se ha eliminado el producto:(`, "color:red")
        
    }

    listar(){
        let listaData = " ";

        for (let i = 0; i < this.productos.length; i++) {
            listaData += `${this.productos[i].data()} <br>`;
        }
        return listaData;
    }

    listarInverso(){
        let datosData = " ";

        for (let i = this.productos.length-1; i >= 0; i--) {
            datosData += `${this.productos[i].data()} <br>`;
        }
        return datosData;
    }

    buscarProducto(codigo){
        let foundp = this.productos.codigo;
        let min = 0;
        let maxLast = this.productos.length - 1;
        let middle = 0;
        for(let i = 0; i < this.productos.length; i++){
            if (this.productos[i].codigo == codigo){
                console.log(`%c     He encontrado tu producto:).`, "color:yellow")
                return this.productos[i];
            }
        }
        
        
        while (min <= maxLast) {
            middle = Math.floor((min + maxLast)/2);
            if (this.productos[middle].codigo == codigo) {
                return middle;
            } else if (this.productos[middle].codigo > codigo) {
                maxLast = middle -1;
            } else {
                min = middle + 1;
            }
            
        }
        return null;
    }

}







class Productos {
    constructor(codigo,nombre,cantidad,costo){
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;

    }

    data(){
        return `El Codigo del producto es: ${this.codigo}, 
                El Nombre del producto es: ${this.nombre}, 
                La Cantidad del producto es: ${this.cantidad}, 
                El Costo del producto es: ${this.costo} 
                `;
        
    }
}






let inventario = new Inventario();
const addProducto = document.getElementById('btnAgregar');

addProducto.addEventListener('click',()=>{
    let codigo = parseInt(document.getElementById('codigo').value);
    let nombre = document.getElementById('nombre').value;
    let cantidad = document.getElementById('cantidad').value;
    let costo = document.getElementById('costo').value;

    let producto = new Productos(codigo, nombre, cantidad, costo);

    let saveProduct = inventario.agregarProducto(producto);

    document.getElementById('inventario').innerHTML = '<ul>El producto ha sido añadido con éxito!.</ul>'
})


const removeProducto = document.getElementById('eliminar');

removeProducto.addEventListener('click',()=>{
    let codigo = document.getElementById('found-product').value;
    inventario.eliminarProducto(codigo);
    document.getElementById('inventario').innerHTML = '<ul>El producto ha sido eliminado con éxito!.</ul>'
})


const inversoProducto = document.getElementById('listar-inverso');

inversoProducto.addEventListener('click',()=>{
    document.getElementById('inventario').innerHTML += inventario.listarInverso();
})

const listarProduct = document.getElementById('listar-invent');

listarProduct.addEventListener('click',()=>{
    document.getElementById('inventario').innerHTML = '';
    document.getElementById('inventario').innerHTML += inventario.listar();
})


const foundProduct = document.getElementById('found');

foundProduct.addEventListener('click',()=>{
    let codigo = document.getElementById('found-product').value;
    let productoFound = inventario.buscarProducto(codigo);
    // inventario.buscarProducto(codigo);
    //document.getElementById('inventario').innerHTML += productoFound.data();
    if(productoFound){
        document.getElementById('inventario').innerHTML  = '<ul>El producto ha sido encontrado con éxito!.</ul>'
    } else {
        document.getElementById('inventario').innerHTML  = '<ul>El producto no ha sido encontrado!.</ul>'
    }
})




