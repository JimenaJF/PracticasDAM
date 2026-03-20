using BlazorApp_Jimena.IApiService;
using System.Net.Http.Json;

namespace BlazorApp_Jimena.Service
{
    public class Number : INumberService
    {

        private readonly HttpClient _http;
        
        private readonly string _urlBiggestNum;
        private readonly string _urlPrimeNumber;
        private readonly string _urlSmallestNumber;
        private readonly string _urlSortedNumber;

        public Number(HttpClient http, IConfiguration configuration)
        {
            _http = http;
            string baseUrl = configuration["Api:UrlBase"]?? throw new Exception("No se encontro Api:UrlBase en appsettings.json");
           
            string endpointBiggestNumber = configuration["Api:Endpoints:UrlBackendAPIBiggestNum"] ?? throw new Exception("No se encontro Api:Endpoints:UrlBackendAPIBiggestNum en appsettings.json");
            string endpointPrimeNumber = configuration["Api:Endpoints:UrlBackendAPIPrimeNum"] ?? throw new Exception("No se encontro Api:Endpoints:UrlBackendAPIPrimeNum en appsettings.json");
            string endpointSmallestNumber = configuration["Api:Endpoints:UrlBackendAPISmallestNum"] ?? throw new Exception("No se encontro Api:Endpoints:UrlBackendAPISmallestNum en appsettings.json");
            string endpointSortedNumbers = configuration["Api:Endpoints:UrlBackendAPIsortedNum"] ?? throw new Exception("No se encontro Api:Endpoints:UrlBackendAPIsortedNum en appsettings.json");
            
            _urlBiggestNum = baseUrl + endpointBiggestNumber;
            _urlPrimeNumber = baseUrl + endpointPrimeNumber;
            _urlSmallestNumber = baseUrl + endpointSmallestNumber;
            _urlSortedNumber = baseUrl + endpointSortedNumbers;
        }


        public async Task<int> GetBiggestNumber(List<int> number)
        {
            var response = await _http.PostAsJsonAsync(_urlBiggestNum, number);
            if (!response.IsSuccessStatusCode)
            {
                throw new Exception("Error llamando a la API: " + response.StatusCode);
            }

            return await response.Content.ReadFromJsonAsync<int>();
        }

        public async Task<bool> GetPrimeNumber(int number)
        {
            var response = await _http.PostAsJsonAsync(_urlPrimeNumber, number);
            if (!response.IsSuccessStatusCode)
            {
                throw new Exception("Error llamando a la API: " + response.StatusCode);
            }

            return await response.Content.ReadFromJsonAsync<bool>();

        }

        public async Task<int>GetSmallestNumber(List<int> number)
        {
            var response = await _http.PostAsJsonAsync(_urlSmallestNumber, number);
            if (!response.IsSuccessStatusCode)
            {
                throw new Exception("Error llamando a la API: " + response.StatusCode);
            }

            return await response.Content.ReadFromJsonAsync<int>();
        }

        public async Task<List<int>> GetSortedNumbers(List<int> n)
        {
            var response = await _http.PostAsJsonAsync(_urlSortedNumber, n);
            if (!response.IsSuccessStatusCode)
            {
                throw new Exception("Error llamando a la API: " + response.StatusCode);
            }

            return await response.Content.ReadFromJsonAsync<List<int>>();
        }
    }
}
