function Authors(name, birthYear, nationality){
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}

function Books(title, author, genre, price){
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
}

Books.prototype.getBookInfo = function(){
    console.log("Book name:",this.title);
    console.log("Author's Name:",this.author.name);
    console.log("Genre:",this.genre);
    console.log("Price:","$"+this.price);
}

let author1 = new Authors("Sparsh", 1999, "INDIAN");
let author2 = new Authors("Rahul", 1997, "INDIAN");

let book1 = new Books("The Pioneers", author1, "Documentary", 499);
let book2 = new Books("Lorna Doornie", author2, "Adventure", 399);

book1.getBookInfo();
console.log();
console.log();
book2.getBookInfo();