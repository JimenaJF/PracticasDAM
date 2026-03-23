using System.Threading.Tasks;
using webApi_Jimena.Models;
using webApi_Jimena.RequestEntity;
using webApi_Jimena.ResponseEntity;

namespace webApi_Jimena.Interface
{
    /// <summary>
    /// Defines the contract for operations related to managing books, including creating, retrieving, and querying book
    /// information.
    /// </summary>
    /// <remarks>Implementations of this interface provide methods to add new books, retrieve book details by
    /// identifier, list all books, and access specific book attributes such as author and page count. Methods may throw
    /// exceptions if invalid identifiers are provided or if requested books do not exist.</remarks>
    public interface IbookService
    {
        /// <summary>
        /// Saves a new book or updates an existing book based on the provided request.
        /// </summary>
        /// <param name="book">The request containing the details of the book to save. Cannot be null.</param>
        /// <returns>A response object containing the result of the save operation, including the saved book's details.</returns>
        public BookResponse saveBook(BookRequest book);

        /// <summary>
        /// Retrieves the details of a book with the specified unique identifier.   
        /// </summary>
        /// <param name="id">The unique identifier of the book to retrieve.</param>
        /// <returns>A <see cref="BookResponse"/> containing the details of the book if found; otherwise, <c>null</c> if no book
        /// with the specified identifier exists.</returns>
        public BookResponse getBookById(Guid id);

        /// <summary>
        /// Retrieves a list of all books available in the system.
        /// </summary>
        /// <returns>A list of <see cref="BookResponse"/> objects representing all books. The list is empty if no books are
        /// found.</returns>
        public List<BookResponse> getAllBooks();

        /// <summary>
        /// Retrieves the name of the author associated with the specified unique identifier.
        /// </summary>
        /// <param name="id">The unique identifier of the author to retrieve.</param>
        /// <returns>The name of the author if found; otherwise, null.</returns>
        public string getAuthorById(Guid id);

        /// <summary>
        /// Retrieves the total number of pages associated with the specified identifier.
        /// </summary>
        /// <param name="id">The unique identifier of the entity for which to retrieve the page count.</param>
        /// <returns>The number of pages associated with the specified identifier. Returns 0 if no pages are found.</returns>
        public int getPageCountById(Guid id);

        // crud
        Task<BookModel> Create(BookModel bookModel);

        //obtener todos - R
        Task<IEnumerable<BookModel>> GetAll();

        //Rrad by Id
        Task<BookModel?> GetById(int id);

        //Update
        Task<BookModel?> Update(int id, BookModel bookModel);

        //Delete
        Task<bool> Delete(int id);
    }
}
