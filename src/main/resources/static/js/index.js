/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */


document.getElementById("deslizador").addEventListener("mousewheel", function() {
    var width = this.value + "px"; // Obtiene el valor del deslizador y lo convierte a px
    document.getElementById("aside").style.width = width; // Aplica el nuevo ancho al aside
});
