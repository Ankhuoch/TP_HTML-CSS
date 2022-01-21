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

    renderList()
}

function onDelete(index) {
    books.splice(index, 1);
    renderList()
}

function onUpdate(index) {
    const selectedbook = books[index]
    let newBookName = prompt("Please update a new book name", selectedbook.name);
    if (newBookName) {
        books[index]['name'] = newBookName

        renderList()
        alert("Book name is update");
    }

    if (newBookName == '') {
        alert("Book name is required");
    }
}