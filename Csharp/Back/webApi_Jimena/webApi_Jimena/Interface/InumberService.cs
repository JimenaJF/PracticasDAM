namespace webApi_Jimena.Interface
{
    public interface InumberService
    {
        /// <summary>
        /// Sorts the specified list of integers in ascending order and returns a new sorted list.
        /// </summary>
        /// <param name="numbers">The list of integers to sort. Cannot be null.</param>
        /// <returns>A new list containing the sorted integers in ascending order. If the input list is empty, returns an empty
        /// list.</returns>
        public List<int> sortNumbers(List<int> numbers);

        /// <summary>
        /// Returns the largest integer value in the specified list of numbers.
        /// </summary>
        /// <remarks>If multiple elements have the same largest value, the first occurrence is returned.
        /// This method does not modify the input list.</remarks>
        /// <param name="numbers">A list of integers to search for the largest value. Cannot be null or empty.</param>
        /// <returns>The largest integer found in the list.</returns>
        public int getBiggestNumber(List<int>numbers);

        /// <summary>
        /// Returns the smallest integer value from the specified list of numbers.
        /// </summary>
        /// <param name="numbers">A list of integers to search for the smallest value. Cannot be null or empty.</param>
        /// <returns>The smallest integer value found in the list.</returns>
        public int getSmallestNumber(List<int> numbers);

        /// <summary>
        /// Determines whether the specified number is a prime number.
        /// </summary>
        /// <remarks>A prime number is a natural number greater than 1 that has no positive divisors other
        /// than 1 and itself. Negative numbers, zero, and one are not considered prime.</remarks>
        /// <param name="number">The integer value to test for primality.</param>
        /// <returns>true if the specified number is prime; otherwise, false.</returns>
        public bool isPrimeNumber(int number);
    }
}
