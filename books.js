let books = [
    { title: "Book 1", price: 10 },
    { title: "Book 2", price: 15 },
    { title: "Book 3", price: 20 },
    { title: "Book 4", price: 25 },
    { title: "Book 5", price: 30 },
    { title: "Book 6", price: 12 },
    { title: "Book 7", price: 18 },
    { title: "Book 8", price: 22 },
    { title: "Book 9", price: 28 },
    { title: "Book 10", price: 35 }
];

console.log("Books:", books);

books.push({ title: "Book 11", price: 40 });
console.log("Added a new book:", books);

books[0].title = "Updated Book 1";
console.log("Updated first book title:", books);

books.splice(3, 1);
console.log("Removed 4th book:", books);

console.log("Price of the third book:", books[2].price);

let totalPrice = books.reduce((sum, book) => sum + book.price, 0);
console.log("Total price of books:", totalPrice);
