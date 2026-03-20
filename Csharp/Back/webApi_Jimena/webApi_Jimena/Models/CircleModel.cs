namespace webApi_Jimena.Models
{
    public class CircleModel
    {
        public int id { get; set; }
        public required string Color { get; set; }

           
        public required double Radius { get; set; }
  
        public double Area { get; set; }

        public double Perimeter { get; set; }
        public DateTime Timestamp { get; set; }

    }

}

