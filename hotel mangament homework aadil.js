 let rooms = [];

function addRoom(id, type, price) {
    let room = { id: id, type: type, price: price };
    rooms.push(room);
    console.log("Room added:", room);
}

function updateRoom(id, newType, newPrice) {
    let room = rooms.find(room => room.id === id);
    if (room) {
        room.type = newType;
        room.price = newPrice;
        console.log("Room updated:", room);
    } else {
        console.log("Room not found!");
    }
}

function calculateRoomPrice(id, taxRate) {
    let room = rooms.find(room => room.id === id);
    if (room) {
        let totalPrice = room.price + (room.price * taxRate / 100);
        console.log("Total price for room:", totalPrice);
        return totalPrice;
    } else {
        console.log("Room not found!");
        return null;
    }
}

addRoom(1, "Single", 100);
addRoom(2, "Double", 150);
updateRoom(1, "Deluxe", 120);
calculateRoomPrice(2, 10);
