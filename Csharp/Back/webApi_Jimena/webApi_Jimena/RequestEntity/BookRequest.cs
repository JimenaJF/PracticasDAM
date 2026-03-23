namespace webApi_Jimena.RequestEntity
{
    /// <summary>
    /// Represents a request to create or update a book record. This class contains the necessary information to define a book, including its unique identifier, title, author, and page count. The 'id' property is automatically generated if not provided, ensuring that each book has a unique identifier. The 'title', 'author', and 'pageCount' properties are required and must be provided when creating or updating a book record.
    /// </summary>
    public class BookRequest
    {
        public required Guid id { get; set; } = Guid.NewGuid();

        /// <summary>
        /// Gets or sets the title associated with the object.
        /// </summary>
        public required string title { get; set; }

        /// <summary>
        /// Gets or sets the name of the author associated with the content.
        /// </summary>
        public required string author { get; set; }

        /// <summary>
        /// Gets or sets the total number of pages associated with the content.
        /// </summary>
        public required int pageCount { get; set; }

       
    }
}
