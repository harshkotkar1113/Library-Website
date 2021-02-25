console.log("Hellow ,harsh");

// Constructor
function Book(name, author, type) {

    this.name = name;
    this.author = author;
    this.type = type;

};

// Display Constructor
function Display() {

}

// Add methods to display prototype
Display.prototype.add = function (book) {
    console.log('adding to UI')
    let tableBody = document.getElementById("tableBody")
    let uiString = `<tr>
                        <td>${this.name}</td>
                        <td>${this.author}</td>
                        <td>@${this.type}</td>
                </tr>`

}

// Implement the clear function
Display.prototype.clear = function () {
    let addBook1 = document.getElementById('libraryForm');
    addBook1.reset();

}

// Implement the validate function
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false
    } else {
        return true
    }
}


// Implement the show function
Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
             ${displayMessage}
             <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
             </div>`;
             
    setTimeout(function () {
        message.innerHTML = ''
    }, 2000);

}



// Add submit event listener to libraryForm
let addBook = document.getElementById("libraryForm");
addBook.addEventListener('submit', libraryBookSumbited)

function libraryBookSumbited(e) {
    console.log("hellow")
    let name = document.getElementById("bookName").value
    let author = document.getElementById("bookAuthor").value
    let type;
    let fiction = document.getElementById("fiction")
    let programmer = document.getElementById("programmer")
    let economics = document.getElementById("economics")
    e.preventDefault();

    if (fiction.checked) {
        type = fiction.value;
    } else if (programmer.checked) {
        type = programmer.value;
    } else if (economics.checked) {
        type = economics.value;
    }



    let book = new Book(name, author, type);
    console.log(book)

    let display = new Display();

    if (display.validate(book)) {
        display.add(book)
        display.clear(book)
        display.show('success', 'Your book has been successfully added')
    } else {

         // Show error to the user
        display.show('danger', 'Sorry! you can not add this book')
    }


};