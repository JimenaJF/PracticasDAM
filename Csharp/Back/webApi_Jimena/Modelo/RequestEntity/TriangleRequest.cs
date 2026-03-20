namespace Modelo.RequestEntity
{
    public class TriangleRequest
    {
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
