using BookApi.Models;

namespace BookApi.Services
{
    public class BookService
    {
        private static List<Book> _books = new List<Book>();
        private static int _nextId = 1;

        public List<Book> GetAll() => _books;

        public Book? GetById(int id) => _books.FirstOrDefault(b => b.Id == id);

        public Book Add(Book book)
        {
            book.Id = _nextId++;
            _books.Add(book);
            return book;
        }

        public bool Update(int id, Book updatedBook)
        {
            var book = GetById(id);
            if (book is null) return false;

            book.Title = updatedBook.Title;
            book.Author = updatedBook.Author;
            book.ISBN = updatedBook.ISBN;
            book.PublicationDate = updatedBook.PublicationDate;
            return true;
        }

        public bool Delete(int id)
        {
            var book = GetById(id);
            return book != null && _books.Remove(book);
        }
    }
}
