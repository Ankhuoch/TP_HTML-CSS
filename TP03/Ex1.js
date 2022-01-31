var books = [
    { name: "Book I1", price: 100, category: "English"},
    { name: "Book I2", price: 100, category: "English"},
]

function renderList() {
    let bookGrideDiv = document.getElementById('grid')
    let boxes = ''
    bookGrideDiv.innerHTML = ''
    books.forEach((item, i) => {
        boxes += `
        <div class = "box">
            <div box-action-wrapper>
                <button onclick="onDelete('${i}')">Delete</button>
                <button onclick="onUpdate('${i}')">Change name</button>
            </div>
            <div class="book-icon-wrapper">
                <img src="./book_icon.png" alt="#">
            </div>
            <div class="book-info-wrapper">
                <span>Name: ${item.name}</span> <br/>
                <span>Price: ${item.price} riel</span> <br/>
                <span>Category: ${item.category}</span> <br/>
            </div>
        </div>
        `
    })
    bookGrideDiv.innerHTML = boxes
}

renderList()

function onSubmit() {
    const name = document.getElementById('name').value
    const price = document.getElementById('price').value
    const category = document.getElementById('category').value

    books.push({ name, price, category })
    localStorage.books = JSON.stringify(books);
    let storedBooks = JSON.parse(localStorage.books)
    storedBooks.push({name, price, category});
    localStorage.books = JSON.stringify(storedBooks);

    let html = ''
    storedBooks.forEach(book => {
        html += `<div>${book['name']}</div>`
    });
    document.getElementsByClassName('list-wrapper').innerHTML = " ";
    localStorage.books = JSON.stringify(storedBooks);
    renderList()
}

function onDelete(index) {
    books.splice(index, 1);
    localStorage.removeItem(index);
    renderList()
}

function onUpdate(index) {
    const selectedbook = books[index]
    let newBookName = prompt("Please update a new book name", selectedbook.name);
    if (newBookName) {
        books[index]['name'] = newBookName
        localStorage.books = JSON.stringify(books);
        renderList()
        alert("Book name is update");
    }

    if (newBookName == '') {
        alert("Book name is required");
    }
}

// do localStorage

// localStorage.books = JSON.stringify(books); // store data

// // add new book
//     //get array from local storage
// let storedBooks = JSON.parse(localStorage.books)
// storedBooks.push({name: "Book I3", price: 100, category: "English"});
// storedBooks.push({name: "Book I4", price: 100, category: "English"});

// // console.log(storedBooks);
// // Render into HTML
// let html = ''
// storedBooks.forEach(book => {
//     html += `<div>${book['name']}</div>`
// });

// console.log(html);
// document.getElementById('listWrapper').innerHTML = " "

// // save back to local storage
// localStorage.books = JSON.stringify(storedBooks);

// Remove/Upadate/Delete a book
// get array from local storage
// Remove/Upadate/Delete operation
// Render into html
// Save back to local storage



// const storedBooks = JSON.parse(localStorage.books)
// console.log(storedBooks);