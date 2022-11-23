export async function loadProductos(){
    const res = await fetch ("http://localhost:8080/productos");
    const data = await res.json();
    return data;
}