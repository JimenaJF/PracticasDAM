namespace BlazorApp_Jimena.IApiService
{
    public interface INumberService
    {
        public Task<bool> GetPrimeNumber(int number);
        public Task<int> GetSmallestNumber(List<int> number);

        public Task<int> GetBiggestNumber(List<int> number);

        public Task<List<int>> GetSortedNumbers(List<int> n);
    }
}
