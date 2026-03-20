namespace Modelo.ResponseEntity
{
    /// <summary>
    /// Represents a response containing book details. This class is used to encapsulate the information about a book that is returned from the service layer to the client. It includes properties for the book's unique identifier, title, author, and page count. The 'id' property is automatically generated if not provided, ensuring that each book has a unique identifier. The 'title', 'author', and 'pageCount' properties are required and must be provided when creating or updating a book record.
    /// </summary>
    public class BookResponse
    {
        /// <summary>
        /// Gets or sets the unique identifier for the object.
        /// </summary>
        public Guid id { get; set; } = Guid.NewGuid();
        /// <summary>
        /// Gets or sets the title associated with the object.
        /// </summary>
        public required string title { get; set; }
        /// <summary>
        /// Gets or sets the author associated with the object.
        /// </summary>
        public required string author { get; set; }
        /// <summary>
        /// Gets or sets the total number of pages.
        /// </summary>
        public required int pageCount { get; set; }

       
    }
}
