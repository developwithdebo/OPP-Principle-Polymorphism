const bicycle = {
    bell: function () {
        return "Ring, ring! Watch out, please!"
    }
}
const door = {
    bell: function () {
        return "Ring, ring! Come Here, Please!"
    }
}
function ringTheBell(thing) {
    console.log(thing.bell())
}
ringTheBell(door);
ringTheBell(bicycle);