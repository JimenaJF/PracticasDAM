using webApi_Jimena.Interface;
using webApi_Jimena.RequestEntity;
using webApi_Jimena.ResponseEntity;

namespace webApi_Jimena.Service
{
    /// <summary>
    /// Provides methods for managing a collection of books, including adding new books and retrieving book information
    /// by identifier.
    /// </summary>
    /// <remarks>BookService maintains an in-memory collection of books. All operations are performed on this
    /// internal collection and are not persisted beyond the lifetime of the service instance. This class is not
    /// thread-safe.</remarks>
    public class BookService : IbookService
    {
        /// <summary>
        /// Represents the collection of books indexed by their unique identifiers.
        /// </summary>
        private readonly Dictionary<Guid, BookResponse> books = [];

        /// <summary>
        /// Saves a new book to the collection. If the provided book request contains an empty identifier, a new unique Id is generated. If a book with the same identifier already exists, the method returns null to indicate a conflict. Otherwise, the new book is added to the collection and returned as a response.
        /// </summary>
        /// <param name="bookRequest"></param>
        /// <returns></returns>
        public BookResponse saveBook(BookRequest bookRequest)
        {
            Guid newId = bookRequest.id == Guid.Empty ? Guid.NewGuid() : bookRequest.id;

            if (books.ContainsKey(newId))
            {
                return null;
            }
            var savedBook = new BookResponse
            {
                id = newId,
                title = bookRequest.title,
                author = bookRequest.author,
                pageCount = bookRequest.pageCount
            };

            books.Add(newId, savedBook);
            return savedBook;
        }

        /// <summary>
        /// Retrieves a list of all books currently available in the collection.
        /// </summary>
        /// <returns>A list of <see cref="BookResponse"/> objects representing all books. The list will be empty if no books are
        /// available.</returns>
        public List<BookResponse> getAllBooks()
        {
            return [.. books.Values];
        }

        /// <summary>
        /// Retrieves the author name associated with the specified book identifier.
        /// </summary>
        /// <param name="id">The unique identifier of the book whose author is to be retrieved.</param>
        /// <returns>The name of the author if the book is found; otherwise, "Author not found".</returns>
        public string getAuthorById(Guid id)
        {
            if (books.TryGetValue(id, out BookResponse? bookFound)) {
                return bookFound.author;
            }
            return "Author not found";

        }


        /// <summary>
        /// Retrieves a book by its unique identifier.
        /// </summary>
        /// <param name="id">The unique identifier of the book to retrieve.</param>
        /// <returns>A <see cref="BookResponse"/> representing the book with the specified identifier, or <see langword="null"/>
        /// if no matching book is found.</returns>
        public BookResponse getBookById(Guid id)
        {
            if (books.TryGetValue(id, out BookResponse? bookFound)) { 
                return bookFound;
            }
            return null;
        }


        /// <summary>
        /// Gets the number of pages for the book with the specified unique identifier.
        /// </summary>
        /// <remarks>If the specified book is not found, the method returns -1. Callers should check for
        /// this value to determine whether the book exists.</remarks>
        /// <param name="id">The unique identifier of the book for which to retrieve the page count.</param>
        /// <returns>The number of pages in the specified book if found; otherwise, -1.</returns>
        public int getPageCountById(Guid id)
        {
            return books.TryGetValue(id, out BookResponse? bookFound) ? bookFound.pageCount : -1;
        }
         

       
    }
}
