using Microsoft.AspNetCore.Mvc;
using webApi_Jimena.Models;
using webApi_Jimena.RequestEntity;
namespace webApi_Jimena.Interface
{
    /// <summary>
    /// Provides a method for calculating the area of a triangle based on its base and height.
    /// </summary>
    public interface ItriangleService
    {
        /// <summary>
        /// Calculates the area of a triangle given its base and height. The area is calculated using the formula A = (base * height) / 2, where "base" is the length of the triangle's base and "height" is the perpendicular distance from the base to the opposite vertex.
        /// </summary>
        /// <param name="baseTriangle"></param>
        /// <param name="heightTriangle"></param>
        /// <returns></returns>
        public double calculateArea(double baseTriangle, double heightTriangle);

        Task<TriangleModel> Create(TriangleModel triangleModel);

        //obtener todos - R
        Task<IEnumerable<TriangleModel>> GetAll();

        //Rrad by Id
        Task<TriangleModel?> GetById(int id);

        //Update
        Task<TriangleModel?> Update(int id, TriangleModel triangleModel);

        //Delete
        Task<bool> Delete(int id);

    }
}
