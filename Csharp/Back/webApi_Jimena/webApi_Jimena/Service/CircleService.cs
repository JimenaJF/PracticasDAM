using Microsoft.EntityFrameworkCore;
using webApi_Jimena.Data;
using webApi_Jimena.Interface;
using webApi_Jimena.Models;

namespace webApi_Jimena.Service
{
    /// <summary>
    /// class that implements the IcircleService interface, which provides methods to calculate the area and perimeter of a circle based on its radius (R).
    /// </summary>
    public class CircleService: IcircleService
    {
       
        private readonly AppDbContext _context;

        public CircleService(AppDbContext context)
        {
            _context = context; 
        }
        

        /// <summary>
        /// Method to calculate the area of a circle given its radius (R). The area is calculated using the formula A = π * R^2, where π is a mathematical constant approximately equal to 3.14159.
        /// </summary>
        /// <param name="R"></param>
        /// <returns></returns>
        public double calculateAreaCircle(double R) {
            return Math.PI * Math.Pow(R, 2);
        }

        /// <summary>
        /// Method to calculate the perimeter (circumference) of a circle given its radius (R). The perimeter is calculated using the formula P = 2 * π * R, where π is a mathematical constant approximately equal to 3.14159.
        /// </summary>
        /// <param name="R"></param>
        /// <returns></returns>
        public double calculatePerimeterCircle(double R) {
            return 2 * Math.PI * R;
        }

        //CRUD
        public async Task<CircleModel> Create(CircleModel circleModel)
        {
            try
            {
                circleModel.Area = calculateAreaCircle(circleModel.Radius);
                circleModel.Perimeter = calculatePerimeterCircle(circleModel.Perimeter);

                circleModel.Timestamp = DateTime.UtcNow;

                _context.CircleCalculations.Add(circleModel);
                await _context.SaveChangesAsync();
                return circleModel;

            }
            catch (Exception e)
            {
                throw new Exception("error al crear el circulo" + e.StackTrace);
            }
        }
        

        public async Task<bool> Delete(int id)
        {
            var model = await _context.CircleCalculations.FindAsync(id);
            if (model == null) 
            {
                return false;
                
            }
            _context.CircleCalculations.Remove(model);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<IEnumerable<CircleModel>> GetAll()
        {
            var circle= await _context.CircleCalculations.ToListAsync();
            return circle;
        }

        public async Task<CircleModel?> GetById(int id)
        {
            var circle =  await _context.CircleCalculations.FindAsync(id);
            return circle;
        }

        public async Task<CircleModel?> Update(int id, CircleModel circleModel)
        {
  
            try
            {
                var existing = await _context.CircleCalculations.FindAsync(id);
                if (existing == null)
                {
                    return null;
                }
                existing.Color = circleModel.Color;
                existing.Radius = circleModel.Radius;
                existing.Area = calculateAreaCircle(circleModel.Radius);
                existing.Perimeter= calculatePerimeterCircle(circleModel.Radius);
                existing.Timestamp = DateTime.UtcNow;
                await _context.SaveChangesAsync();
                return existing;

            } catch (Exception e) {
                throw new Exception("Error al actualizar el circulo" + e.StackTrace);
            }
         
        }
    }
}
