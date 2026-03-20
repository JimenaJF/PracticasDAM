using Microsoft.AspNetCore.Mvc;
using webApi_Jimena.Interface;

namespace webApi_Jimena.Controller
{
    [ApiController]
    [Route("api/[controller]")] //ruta base
    public class PalindromeController: ControllerBase
    {
        private readonly IpalindromeService _palindromeService;

        public PalindromeController(IpalindromeService palindromeService)
        {
            _palindromeService = palindromeService;
        }

        /// <summary>
        /// Determines whether the specified input string is a palindrome and returns the result in the response.
        /// </summary>
        /// <param name="input">The string to evaluate for palindrome status. Cannot be null or empty.</param>
        /// <returns>An HTTP 200 response containing an object with the palindrome result if the input is valid; otherwise, an
        /// HTTP 400 response if the input is null or empty.</returns>

        [HttpPost("palindrome-input")]
        public IActionResult isPalindrome([FromBody] string input) { 
            
            //validation

            if(string.IsNullOrEmpty(input)) {
                return BadRequest("Input no puede ser vacio");
            }

            bool resultPalindrome = _palindromeService.IsPalindrome(input);
            return Ok(resultPalindrome);

        }
    }
}
