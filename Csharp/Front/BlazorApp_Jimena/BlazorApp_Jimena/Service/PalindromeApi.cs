using BlazorApp_Jimena.IApiService;
using System.Net.Http.Json;

namespace BlazorApp_Jimena.Service
{
    public class PalindromeApi : IPalindromeService
    {
        private readonly HttpClient _http;
        private readonly string _url;

        public PalindromeApi(HttpClient http, IConfiguration configuration)
        {
            _http = http;

            string baseUrl = configuration["Api:UrlBase"] ?? throw new Exception("No se encontro Api:UrlBase en appsettings.json");
            string endpoint = configuration["Api:Endpoints:UrlBackendAPIpalindromeInput"] ?? throw new Exception("No se encontro Api:Endpoints:UrlBackendAPIpalindromeInput en appsettings.json");
            
            _url = baseUrl + endpoint;
        }

        public async Task<bool> IsPalindrome(string input)
        {
            var response = await _http.PostAsJsonAsync(_url, input);

            if (!response.IsSuccessStatusCode)
            {
                throw new Exception("Error llamando a la API: " + response.StatusCode);
            }

            return await response.Content.ReadFromJsonAsync<bool>();
        }
    }
}
