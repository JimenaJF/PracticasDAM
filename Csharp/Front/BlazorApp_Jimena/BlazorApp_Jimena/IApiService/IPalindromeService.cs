namespace BlazorApp_Jimena.IApiService
{
    public interface IPalindromeService
    {
        public Task<bool> IsPalindrome(string input);
    }
}
