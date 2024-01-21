const Book = require('./Book')
const arrayTitle = require('./arrayTitle')
const arrayAuthors = require('./arrayAuthor')
const bookShelf = [];


function cadBook(title = aleatoryTitle(), pages = aleatoryPages(100,500), author = aleatoryAuthor(), id = bookShelf.length)
{

    const book = new Book(title, pages, author, id)

    bookShelf.push(book);
    
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

for(let i=0; i < arrayTitle.length; i++)
{
    cadBook();
    if(i==5)
    {
        console.log(`Books in system : ${bookShelf.length}`)
    }
}

