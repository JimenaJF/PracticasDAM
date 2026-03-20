using webApi_Jimena.Interface;

namespace webApi_Jimena.Service
{
    public class PalindromeService : IpalindromeService
    {

        /// <summary>
        /// Determines whether the specified string is a palindrome, ignoring spaces.
        /// </summary>
        /// <remarks>The comparison is case-sensitive and ignores only space characters. Other whitespace
        /// or punctuation is considered in the evaluation.</remarks>
        /// <param name="input">The string to evaluate for palindrome status. Cannot be null.</param>
        /// <returns>true if the input string is a palindrome when spaces are ignored; otherwise, false.</returns>
        public bool IsPalindrome(string input)
        {


            string cleaned = input.ToLower().Replace(" ", string.Empty).Replace(",", string.Empty);


            for (int i = 0, j = cleaned.Length-1; i <j; j--, i++ ){
                if (cleaned[i] != cleaned[j]) { 
                    return false;
                }
            }
            return true;

        }
    }
}
