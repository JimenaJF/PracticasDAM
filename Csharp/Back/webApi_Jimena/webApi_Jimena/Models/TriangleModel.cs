namespace webApi_Jimena.Models
{
	public class TriangleModel
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
		public double Area { get; set; }

		public DateTime Timestamp { get; set; }


	}
}
