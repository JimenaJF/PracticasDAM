namespace Modelo.ResponseEntity
{
    public class CircleResponse
    {
        /// <summary>
        /// Gets or sets the unique identifier for the entity.
        /// </summary>
        public Guid id { get; set; }

        /// <summary>
        /// Gets or sets the color value for the circle.
        /// </summary>
        public  string color { get; set; }

        /// <summary>
        /// Gets or sets the radius of the circle.
        /// </summary>
        public double Perimeter { get; set; }

        public double Area { get; set; }
    }
}
