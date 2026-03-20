using webApi_Jimena.Interface;

namespace webApi_Jimena.Service
{
    public class NumberService: InumberService
    {
        public NumberService()
        {
        }

        /// <summary>
        /// Returns a new list containing the elements of the input list sorted in ascending order.
        /// </summary>
        /// <remarks>The original list is not modified. The returned list contains the same elements as
        /// the input, sorted by value.</remarks>
        /// <param name="numbers">The list of integers to sort. Cannot be null.</param>
        /// <returns>A new list of integers sorted in ascending order. If the input list is empty, returns an empty list.</returns>
        public List<int> sortNumbers(List<int> numbers)
        {
            return numbers.OrderBy(n => n).ToList();

        }


        /// <summary>
        /// Returns the largest integer value in the specified list.
        /// </summary>
        /// <remarks>If the list is empty or null, an exception is thrown. This method uses the default
        /// comparer for integers.</remarks>
        /// <param name="numbers">A list of integers to search for the largest value. Cannot be null or empty.</param>
        /// <returns>The largest integer value found in the list.</returns>
        public int getBiggestNumber(List<int> numbers)
        {
            return numbers.Max();
        }

        /// <summary>
        /// Returns the smallest integer value in the specified list.
        /// </summary>
        /// <param name="numbers">A list of integers to search for the smallest value. Cannot be null or empty.</param>
        /// <returns>The smallest integer value found in the list.</returns>
        public int getSmallestNumber(List<int> numbers)
        {
            return numbers.Min();
        }


        /// <summary>
        /// Determines whether the specified integer is a prime number.
        /// </summary>
        /// <remarks>A prime number is a natural number greater than 1 that has no positive divisors other
        /// than 1 and itself. This method returns false for numbers less than or equal to 1.</remarks>
        /// <param name="number">The integer value to test for primality.</param>
        /// <returns>true if the specified number is prime; otherwise, false.</returns>
        public bool isPrimeNumber(int number)
        {
            if(number <= 1) return false;
            
            for (int i = 2; i <= Math.Sqrt(number); i++)
            {
                if (number % i == 0)
                {
                    return false; // Se encontro divisor, no es primo
                }
            }
            return true;

        }
    }


}
