using webApi_Jimena.Data;
using webApi_Jimena.Interface;
using webApi_Jimena.Models;
using Microsoft.EntityFrameworkCore;

namespace webApi_Jimena.ServiceTriangle
{
    /// <summary>
    /// Class that implements the ItriangleService interface, which provides a method to calculate the area of a triangle based on its base and height.
    /// </summary>
    public class TriangleService: ItriangleService
    {
        private readonly AppDbContext _context;

        public TriangleService(AppDbContext context)
        {
            _context = context;
        }



        /// <summary>
        /// Initializes a new instance of the TriangleService class.
        /// </summary>
        /// <param name="baseTriangle"></param>
        /// <param name="heightTriangle"></param>
        /// <returns></returns>
        public double calculateArea(double baseTriangle, double heightTriangle)
        {
            return (baseTriangle * heightTriangle) / 2.0;
        }

        public async Task<TriangleModel> Create(TriangleModel triangleModel)
        {
            try
            {


                triangleModel.Area = calculateArea(triangleModel.BaseTr, triangleModel.HeightTr);
                triangleModel.Timestamp = DateTime.UtcNow;

                _context.TriangleCalculations.Add(triangleModel);
                await _context.SaveChangesAsync();

                return triangleModel;
            }
            catch (Exception e)
            {
                throw new Exception("error al crear un triangulo" + e.StackTrace);
            }

        }

        public async Task<bool> Delete(int id)
        {
                var model = await _context.TriangleCalculations.FindAsync(id);

                if (model == null)
                    return false;

                _context.TriangleCalculations.Remove(model);
                await _context.SaveChangesAsync();

                return true;
            
        }

        public async Task<IEnumerable<TriangleModel>> GetAll()
        {
            return await _context.TriangleCalculations.ToListAsync();
        }

        public async Task<TriangleModel?> GetById(int id)
        {
            return await _context.TriangleCalculations.FindAsync(id);
        }

        public async Task<TriangleModel?> Update(int id, TriangleModel triangleModel)
        {
            try
            {

                var existing = await _context.TriangleCalculations.FindAsync(id);

                if (existing == null)
                    return null;

                existing.BaseTr = triangleModel.BaseTr;
                existing.HeightTr = triangleModel.HeightTr;
                existing.Area = calculateArea(triangleModel.BaseTr, triangleModel.HeightTr);
                existing.Timestamp = DateTime.UtcNow;

                await _context.SaveChangesAsync();
                return existing;
            }
            catch (Exception e) {
                throw new Exception("error al actualizar un triangulo" + e.StackTrace);

            }
        }
    }
}

