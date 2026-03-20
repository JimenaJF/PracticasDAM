using Microsoft.AspNetCore.Mvc;
using webApi_Jimena.Interface;
using webApi_Jimena.Service;

namespace webApi_Jimena.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class NumberController : ControllerBase
    {

        private readonly InumberService _inumberService;

        public NumberController(InumberService inumberService)
        {
            _inumberService = inumberService;
        }

        /// <summary>
        /// Sorts a list of integers in ascending order and returns the sorted result.
        /// </summary>
        /// <param name="nums">The list of integers to be sorted. Cannot be null or empty.</param>
        /// <returns>An HTTP 200 response containing the sorted list of integers in the response body. Returns HTTP 400 if the
        /// input list is null or empty.</returns>
        [HttpPost("sorted-numbers")]
        public IActionResult SortedNumbers([FromBody] List<int> nums)
        {
            // validar datos
            if (nums == null || nums.Count == 0)
            {
                return BadRequest("La lista de numeros no puede estar vacia");
            }

            List<int> sortedNumbers = _inumberService.sortNumbers(nums);

            return Ok(sortedNumbers);
        }


        /// <summary>
        /// Finds the largest integer in the specified list and returns it in the response.
        /// </summary>
        /// <param name="nums">The list of integers to evaluate. Must not be null or empty.</param>
        /// <returns>An HTTP 200 response containing an object with the largest number found in the input list, under the
        /// property 'BiggestNumber'.</returns>
        /// <exception cref="ArgumentException">Thrown if nums is null or empty.</exception>
        [HttpPost("biggest-numbers")]
        public IActionResult biggestNumber([FromBody] List<int> nums)
        {

            // validar datos
            if (nums == null || nums.Count == 0)
            {
                throw new ArgumentException("La lista de numeros no puede estar vacia");
            }

            int biggestNumResult = _inumberService.getBiggestNumber(nums);

            //devolver el resultado
            return Ok(biggestNumResult);


        }


        /// <summary>
        /// Finds the smallest integer in the provided list and returns it in the response.
        /// </summary>
        /// <param name="nums">The list of integers to evaluate. Must not be null or empty.</param>
        /// <returns>An HTTP 200 response containing an object with the smallest number found in the list.</returns>
        /// <exception cref="ArgumentException">Thrown if nums is null or contains no elements.</exception>
        
        [HttpPost("smallest-number")]
        public IActionResult smallestNumber([FromBody] List<int> nums)
        {
            // validar datos
            if (nums == null || nums.Count == 0)
            {
                throw new ArgumentException("La lista de numeros no puede estar vacia");
            }
            int smallestNumResult = _inumberService.getSmallestNumber(nums);

            //devolver el resultado
            return Ok(smallestNumResult);

        }


        /// <summary>
        /// Determines whether the specified number is a prime number.
        /// </summary>
        /// <param name="num">The integer value to check for primality. Must be zero or positive.</param>
        /// <returns>An HTTP 200 response containing an object with a boolean property, IsPrimeNumber, set to <see
        /// langword="true"/> if the specified number is prime; otherwise, <see langword="false"/>.</returns>
        /// <exception cref="ArgumentException">Thrown when <paramref name="num"/> is negative.</exception>
        [HttpPost("is-prime-number")]
        public IActionResult isPrimeNumber([FromBody] int num)
        {
            // validar datos
            if (num < 0)
            {
                throw new ArgumentException("El numero no puede ser negativo");
            }
            bool isPrimeNumResult = _inumberService.isPrimeNumber(num);
           
            //devolver el resultado
            return Ok(isPrimeNumResult);
        }

    }
}
