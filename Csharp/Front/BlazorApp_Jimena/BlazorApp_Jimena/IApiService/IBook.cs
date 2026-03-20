using Modelo.ResponseEntity;
using Modelo.RequestEntity;
namespace BlazorApp_Jimena.IApiService
{
    public interface IBook
    {
        public Task<BookResponse?> GetBookInfo(Guid id);
        Task <BookResponse> SaveBook(BookRequest book);
    }
}
