const books = [
    {
        author: "George Orwell",
        title: "1984",
        numberOfPages: 328,
        hasBeenRead: true
    },
    {
        author: "Harper Lee",
        title: "To Kill a Mockingbird",
        numberOfPages: 281,
        hasBeenRead: false
    },
    {
        author: "J.K. Rowling",
        title: "Harry Potter and the Sorcerer's Stone",
        numberOfPages: 309,
        hasBeenRead: true
    },
    {
        author: "F. Scott Fitzgerald",
        title: "The Great Gatsby",
        numberOfPages: 180,
        hasBeenRead: false
    },
    {
        author: "Jane Austen",
        title: "Pride and Prejudice",
        numberOfPages: 279,
        hasBeenRead: true
    }
];

// Getting elements

const tableBody = document.querySelector(".table_body");
const form = document.querySelector("dialog form");
const formModal = document.getElementById("form_modal")
// Defining Functions

function Book(author, title, numberOfPages) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.hasBeenRead = false;

}

function addNewBook(author, title, numberOfPages) {
    console.log(author, title, numberOfPages);

}

function showBooks() {
    tableBody.innerHTML = "";
    let html;
    books.map((book, idx) => {
        html = `
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          ${book.author}
                        </th>
                        <td class="px-6 py-4">${book.title}</td>
                        <td class="px-6 py-4">${book.numberOfPages}</td>
                        <td class="px-6 py-4">${book.hasBeenRead ? "Yes" : "No"}</td>
                        <td class="px-6 py-4 flex gap-3">
                        <button id="${idx}"  onclick="deleteBook(${idx})" class="py-2 px-6 bg-red-700 text-red-50 rounded  hover:bg-red-500   transition-all duration-150 ease-linear">Delete<button>
                        <button id="${idx}"  onclick="toggleRead(${idx})" class="py-2 px-6 bg-blue-700 text-blue-50 rounded  hover:bg-blue-500  transition-all duration-150 ease-linear">${book.hasBeenRead ? "Not Read":  "Mark Read"}<button>
                        </td>
                      </tr>`

        tableBody.innerHTML += html;
    })
}

function deleteBook(id) {
    books.splice(id, 1);
    
    showBooks();

}

function toggleRead(id) {

    if (books[id].hasBeenRead == true) {
        books[id].hasBeenRead = false
    } else {
        books[id].hasBeenRead = true
    }
    // console.log(books[id].hasBeenRead ? false : true);
    
    showBooks()
}


// Calling functions

showBooks()
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let authorEleValue = document.getElementById("author").value;
    let titleEleValue = document.getElementById("title").value;
    let numberOfPageEleValue = parseFloat(document.getElementById("numberOfPage").value);
    const newBook = new Book(authorEleValue, titleEleValue, numberOfPageEleValue);
    books.push(newBook);
    console.log(newBook);
    console.log(books);


    showBooks();
    formModal.close();

})