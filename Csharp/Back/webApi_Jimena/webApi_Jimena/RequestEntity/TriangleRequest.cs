namespace webApi_Jimena.RequestEntity
{
    public class TriangleRequest
    {
        public int id { get; set; }
        /// <summary>
        /// Gets or sets the base transaction rate used for calculations.
        /// </summary>
        public required double BaseTr { get; set; }

        /// <summary>
        /// Gets or sets the height value for the transformation.
        /// </summary>
        public required double HeightTr { get; set; }
       


    }
}
