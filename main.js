const Book = require('./Book')
const arrayTitle = require('./arrayTitle')
const arrayAuthors = require('./arrayAuthor')
const bookShelf = [];


function cadBook(title = aleatoryTitle(), pages = aleatoryPages(100,500), author = aleatoryAuthor(), id = bookShelf.length)
{
    const book = new Book(title, pages, author, id)

    return bookShelf.push(book);
}

function aleatoryPages(min,max)
{
    return Math.floor(Math.random() * (max - min + 1));
}

function aleatoryAuthor()
{
    let author = arrayAuthors[Math.floor(Math.random() * arrayAuthors.length)];

    return author
}

function aleatoryTitle()
{
    let title = arrayTitle[Math.floor(Math.random() * arrayTitle.length)]

    return title;
}

for(let i=0; i < (arrayTitle.length + 1); i++)
{
    cadBook();

    // let book = bookShelf[i]
    // console.log(`
    // The name of this book is ${book.getTitle()}
    // Have ${book.getPages()} pages
    // Its about tecnology and programing languages
    // Your author, is ${book.getAuthor()} !
    // `)
}

console.log(bookShelf)

// for(let i=0;i<(bookShelf.length);i++)
// {
//     console.log(bookShelf[i].getTitle())
// }

