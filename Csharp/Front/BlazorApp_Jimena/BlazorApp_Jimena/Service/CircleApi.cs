
using Modelo.RequestEntity;
using Modelo.ResponseEntity;
using System.Net.Http.Json;
using BlazorApp_Jimena.IApiService;

namespace BlazorApp_Jimena.Service
{
    public class CircleApi: ICircleService
    {
        private readonly HttpClient _http;
        private readonly string _url;
        private readonly string _url2;

        public CircleApi(HttpClient http, IConfiguration configuration)
        {
            _http = http;
            string baseUrl = configuration["Api:UrlBase"] ?? throw new Exception("No se encontró Api:UrlBase en appsettings.json");
            string endpoint = configuration["Api:Endpoints:UrlBackendAPIareaCircle"] ?? throw new Exception("No se encontró Api:Endpoints:UrlBackendAPIareaCircle en appsettings.json");
            string endpoint2 = configuration["Api:Endpoints:UrlBackendAPIperimeterCircle"] ?? throw new Exception("No se encontró Api:Endpoints:UrlBackendAPIperimeterCircle en appsettings.json");
            
            _url = $"{baseUrl}{endpoint}";
            _url2 = $"{baseUrl}{endpoint2}";

            Console.WriteLine("URL cargada: " + _url);

        }

        //llamada a la api
        public async Task<CircleResponse> GetCircleArea(CircleRequest request) //paso los parametros para mi circulo POST
        {
            
            //creo la respuesta al usuario en el que hago un post pasandole la url en concreta y la peticion que quiero enviarle
            var response = await _http.PostAsJsonAsync(_url, request);

            //si la respuesta de la api no ha sido exitosa lanzo una exepcion
            if (!response.IsSuccessStatusCode) 
            {
                throw new Exception("Error llamando a la Api: " + response.StatusCode);
            
            };

            // en todo caso hago un return con la respuesta de circulo
            return await response.Content.ReadFromJsonAsync<CircleResponse>() ?? new CircleResponse();
        }

        public async Task<CircleResponse> GetCirclePerimeter(CircleRequest request)
        {
            var response = await _http.PostAsJsonAsync(_url2, request);
            if (!response.IsSuccessStatusCode) { 
                throw new Exception("Error llamando a la Api: " + response.StatusCode);
            }

            return await response.Content.ReadFromJsonAsync<CircleResponse>() ?? new CircleResponse();
        }
    }
}
