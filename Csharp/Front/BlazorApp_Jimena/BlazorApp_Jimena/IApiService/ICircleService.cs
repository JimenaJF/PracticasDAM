using Modelo.RequestEntity;
using Modelo.ResponseEntity;

namespace BlazorApp_Jimena.IApiService
{
    public interface ICircleService
    {
        public Task<CircleResponse> GetCircleArea(CircleRequest request);

        public Task<CircleResponse> GetCirclePerimeter(CircleRequest request);

    }
}
