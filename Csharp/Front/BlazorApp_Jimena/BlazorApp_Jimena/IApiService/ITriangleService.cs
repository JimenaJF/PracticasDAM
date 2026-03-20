using Modelo.ResponseEntity;
using Modelo.RequestEntity;

namespace BlazorApp_Jimena.IApiService
{
    public interface ITriangleService
    {
        public Task<TriangleResponse> GetTriangleArea(TriangleRequest request);

    }
}
