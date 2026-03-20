using webApi_Jimena.Interface;

namespace webApi_Jimena.Service
{
    /// <summary>
    /// class that implements the IcircleService interface, which provides methods to calculate the area and perimeter of a circle based on its radius (R).
    /// </summary>
    public class CircleService: IcircleService
    {
        /// <summary>
        /// Initializes a new instance of the CircleService class.
        /// </summary>
        public CircleService()
        {
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
    }
}
