using Microsoft.AspNetCore.Mvc;
using webApi_Jimena.Interface;
using webApi_Jimena.Models;
using webApi_Jimena.RequestEntity;
namespace webApi_Jimena.Controller
{
    [ApiController]
    [Route("api/[controller]")] //ruta base

    /// <summary>
    /// manages book-related operations, such as saving new books, retrieving book details, and listing all books. This controller serves as the entry point for handling HTTP requests related to book management and interacts with the underlying service layer to perform the necessary operations.
    /// </summary>
    public class BookController : ControllerBase
    {
        /// <summary>
        /// Represents the service responsible for managing book-related operations, such as saving new books, retrieving book details, and listing all books. This service is injected into the controller to handle the business logic associated with book management.
        /// </summary>
        private readonly IbookService _bookService;

        /// <summary>
        /// Resolves the dependencies for the BookController by accepting an instance of IbookService through constructor injection. This allows the controller to utilize the book service for handling requests related to book management, such as saving new books and retrieving book information.
        /// </summary>
        /// <param name="bookService"></param>
        public BookController(IbookService bookService)
        {
            _bookService = bookService;
        }

        /// <summary>
        /// Creates a new book record using the provided book details.
        /// </summary>
        /// <remarks>This endpoint expects a complete book object in the request body. If the book's ID
        /// already exists in the system, the operation will fail and return a Bad Request response.</remarks>
        /// <param name="book">The book information to be saved. Must include a unique identifier and valid data for all required fields.</param>
        /// <returns>An HTTP 200 response containing the saved book if successful; otherwise, an HTTP 400 response if a book with
        /// the same ID already exists.</returns>
        [HttpPost("save-book")]
        public IActionResult saveBook([FromBody] BookRequest book)
        {
            var savedBook = _bookService.saveBook(book);
            if (savedBook == null)
            {
                return BadRequest("A book with the same ID already exists.");
            }
            return Ok(savedBook); //devulve el response
        }


        /// <summary>
        /// Gets a list of all books currently stored in the system. 
        /// </summary>
        /// <remarks>This endpoint retrieves all book records and returns them in the response. If there are no books available, the endpoint will return an empty list. Otherwise, it will return a list of all books with their details.</remarks>
        /// <returns>An HTTP 200 response containing all books; otherwise, an HTTP 400 response if there are no books on the list</returns>
        [HttpGet("getAllBooks")]
        public IActionResult getAllBooks()
        {
            return Ok(_bookService.getAllBooks());
        }

        /// <summary>
        /// Gets the author of a book by its unique identifier. 
        /// </summary>
        /// <remarks>This endpoint retrieves the author information for a specific book based on the provided ID. If the book is not found, it returns a "Not Found" response.</remarks>
        /// <param name="id"></param>
        /// <returns>An Http 200 response containing de Author; otherwise, an HTTP 400 response if there is not an author </returns>
        [HttpGet("getAuthorById/{id}")]
        public IActionResult getAuthorById(Guid id)
        {
            string author = _bookService.getAuthorById(id);
            if (author == "Author not found")
            {
                return NotFound(author);
            }
            return Ok(author);
        }

        /// <summary>
        /// Gets the details of a book by its unique identifier.
        /// </summary>
        /// <remarks>This endpoint retrieves the complete details of a specific book based on the provided ID. If the book is not found, it returns a "Not Found" response.</remarks>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("getBookById/{id}")]
        public IActionResult getBookById(Guid id)
        {
            var book = _bookService.getBookById(id);
            if (book == null)
            {
                return NotFound("Book not found");
            }
            return Ok(book);

        }

        /// <summary>
        /// Gets the page count of a book by its unique identifier.
        /// </summary>
        /// <remarks>This endpoint retrieves the page count for a specific book based on the provided ID. If the book is not found, it returns a "Not Found" response.</remarks>
        /// <param name="id"></param>
        /// <returns></returns>

        [HttpGet("getPageCount/{id}")]
        public IActionResult getPageCById(Guid id)
        {
            int pageCount = _bookService.getPageCountById(id);
            return pageCount != -1 ? Ok(pageCount) : NotFound("Book not found");

        }

        //CRUD

        //Create
        [HttpPost("/CreateBook")]
        public async Task<BookModel> Create([FromBody]BookModel bookModel)
        {
            return await _bookService.Create(bookModel);
        }

        [HttpGet("/GetAllBooks")]
        public async Task<IEnumerable<BookModel>> GetAll() 
        {
            return await _bookService.GetAll();
        }

        [HttpGet("GetBookById/{id}")]
        public async Task<BookModel?> GetById(int id)
        {
            try
            {
                var book = await _bookService.GetById(id);
                if (book == null)
                {
                    throw new Exception("No se ha podido encontrar el libro deseado");

                }

                return book;
            }
            catch (Exception ex)
            {
                throw new Exception("Ha ocurrido un error" +  ex.StackTrace);
            }
        }

        [HttpPut("UpdateBook/{id}")]
        public async Task<IActionResult> Update(int id, BookModel bookModel)
        {
            try 
            {
                var updated = await _bookService.Update(id, bookModel);
                if (updated == null) 
                {
                    return NotFound();
                }
                return Ok(updated);

            }
            catch (Exception ex)
            {
                return BadRequest($"Error al actualizar el libro: {ex.Message}");
            }
        }

        [HttpDelete("Delete/{id}")]
        public async Task<bool> Delete(int id)
        {
            try
            {
                bool deleted = await _bookService.Delete(id);

                if (!deleted)
                    throw new Exception("error al borrar el libro");

                return true;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.StackTrace);
            }
        }




    }
}

