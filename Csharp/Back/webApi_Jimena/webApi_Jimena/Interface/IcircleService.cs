namespace webApi_Jimena.Interface
{
    /// <summary>
    /// Provides methods for calculating the area and perimeter of a circle based on its radius.
    /// </summary>
    public interface IcircleService
    {
        /// <summary>
        /// Calculates the area of a circle given its radius (R). The area is calculated using the formula A = π * R^2, where π is a mathematical constant approximately equal to 3.14159.
        /// </summary>
        /// <param name="R"></param>
        /// <returns></returns>
        public double calculateAreaCircle(double R);

        /// <summary>
        /// Calculates the perimeter (circumference) of a circle given its radius (R). The perimeter is calculated using the formula P = 2 * π * R, where π is a mathematical constant approximately equal to 3.14159.
        /// </summary>
        /// <param name="R"></param>
        /// <returns></returns>
        public double calculatePerimeterCircle(double R);
    }
}
