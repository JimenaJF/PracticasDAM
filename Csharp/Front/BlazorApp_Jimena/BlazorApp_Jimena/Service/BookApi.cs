using BlazorApp_Jimena.IApiService;
using Modelo.ResponseEntity;
using System.Net.Http.Json;
using Modelo.RequestEntity;
namespace BlazorApp_Jimena.Service
{
    public class BookApi : IBook
    {
        private readonly HttpClient _http;
        private readonly string _url;
        private readonly string _url2;

        public BookApi(HttpClient http, IConfiguration configuration)
        {
            _http = http;

            string baseUrl = configuration["Api:UrlBase"] ?? throw new Exception("No se encontró Api:UrlBase en appsettings.json");

            string endpoint = configuration["Api:Endpoints:UrlBackendAPIbookInfo"]?? throw new Exception("No se encontró Api:Endpoints:UrlBackendAPIbookInfo en appsettings.json");
            
            string endpoint2 = configuration["Api:Endpoints:UrlBackendAPISaveBook"] ?? throw new Exception("No se encontró Api:Endpoints:UrlBackendAPISaveBook en appsettings.json");

            _url = baseUrl + endpoint;
            _url2 = baseUrl + endpoint2;
             
            Console.WriteLine("URL cargada para obtener libro: " + _url);
             Console.WriteLine("URL cargada para guardar libro: " + _url2);
        }

        public async Task<BookResponse> GetBookInfo(Guid id)
        {
            var book = await _http.GetFromJsonAsync<BookResponse>($"{_url}{id}");

            return book ?? new BookResponse
            {
                id = Guid.Empty,
                title = "No encontrado",
                author = "Desconocido",
                pageCount = 0
            };
        }

        public async Task<BookResponse> SaveBook(BookRequest book)
        {
            var response = await _http.PostAsJsonAsync(_url2, book);

            if (!response.IsSuccessStatusCode)
                throw new Exception("Error guardando el libro");

            var savedBook = await response.Content.ReadFromJsonAsync<BookResponse>();

            return savedBook!;
        }
    }
}