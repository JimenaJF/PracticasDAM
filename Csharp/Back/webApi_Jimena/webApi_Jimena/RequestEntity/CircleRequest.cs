namespace webApi_Jimena.RequestEntity
{
    public class CircleRequest
    {
        /// <summary>
        /// Gets or sets the color value.
        /// </summary>
        public required  string Color { get; set; }

        /// <summary>
        /// Gets or sets the radius of the shape.
        /// </summary>
        public required double Radius { get; set; }
    }
}
