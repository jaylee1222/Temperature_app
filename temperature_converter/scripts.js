document.getElementById("farenheit").addEventListener("input", degree_converter)
document.getElementById("celcius").addEventListener("input", cel_deg_conv)
function degree_converter() {
    var farenheit = document.getElementById("farenheit").value;
    var celcius = (farenheit - 32) * 5/9;
    console.log(celcius);
    document.getElementById("celcius").value = celcius;
}

function cel_deg_conv() {
    var celcius = document.getElementById("celcius").value;
    var farenheit = (celcius * (9/5)) + 32;
    console.log(farenheit);
    document.getElementById("farenheit").value = farenheit;
}