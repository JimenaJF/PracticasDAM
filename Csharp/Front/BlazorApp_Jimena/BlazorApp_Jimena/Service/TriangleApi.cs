using Modelo.RequestEntity;
using Modelo.ResponseEntity;
using System.Net.Http.Json;
using BlazorApp_Jimena.IApiService;

namespace BlazorApp_Jimena.Service
{
    public class TriangleApi: ITriangleService
    {
         
        private readonly HttpClient _http;

        private readonly string _url;

        //contructor para inyectar el HttpClient
        public TriangleApi(HttpClient http, IConfiguration configuration)
        {
            _http = http;
            string baseUrl = configuration["Api:UrlBase"] ?? throw new Exception("No se encontro Api:UrlBase en appsettings.json");
            string endpoint = configuration["Api:Endpoints:UrlBackendAPITr"] ?? throw new Exception("No se encontro Api:Endpoints:UrlBackendAPI en appsettings.json");

            
            _url = baseUrl + endpoint;

            Console.WriteLine("URL cargada: " + _url);


        }

        public async Task<TriangleResponse> GetTriangleArea(TriangleRequest request)
        {

            var response = await _http.PostAsJsonAsync(_url, request);

            if (!response.IsSuccessStatusCode)
                throw new Exception("Error llamando a la API: " + response.StatusCode);

            return await response.Content.ReadFromJsonAsync<TriangleResponse>() ?? new TriangleResponse();
        }


       
    }
}
