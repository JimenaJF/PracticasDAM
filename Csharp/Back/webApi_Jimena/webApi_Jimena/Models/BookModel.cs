namespace webApi_Jimena.Models
{
    public class BookModel
    {
        public int id { set; get; }
        public string title { get; set; }
        public string author { get; set; }
        public int pageCount { get; set; }
        public DateTime Timestamp { get; set; }

    }
}
