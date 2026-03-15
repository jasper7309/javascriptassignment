function greetuser(name, formatter) {
    return formatter(name);
}
function excited(name) {
    return name.toUpperCase() + "!!!"
}
let name = "jasper"
console.log(greetuser(name,excited))