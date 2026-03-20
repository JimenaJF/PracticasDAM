namespace webApi_Jimena.Interface
{
    public interface IpalindromeService
    {
        /// <summary>
        /// Determines whether the specified string is a palindrome.
        /// </summary>
        /// <param name="input">The string to evaluate for palindrome status. Can be null or empty.</param>
        /// <returns>true if the input string reads the same backward as forward; otherwise, false.</returns>
        public bool IsPalindrome(string input);
    }
}
