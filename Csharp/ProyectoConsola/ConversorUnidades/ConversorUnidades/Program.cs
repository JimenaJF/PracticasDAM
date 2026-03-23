class Program
{
    static void Main(String[] args)
    {
        while (true)
        {
            Console.Clear();
            Console.WriteLine("==============================================");
            Console.WriteLine("Seleccione que tipo de operacion desea realizar: ");
            Console.WriteLine("==============================================");
            Console.WriteLine("1. Conversion de Km a Millas.");
            Console.WriteLine("2. Conversion de grados Celsius a Fahrenheit.");
            Console.WriteLine("3. Conversion de Kg a libras.");
            Console.WriteLine("4. Conversion de litros a galones.");
            Console.Write("Ingrese opcion (1-4): ");

            int choice;
            bool validChoice = int.TryParse(Console.ReadLine(), out choice);

            if (!validChoice || choice < 1 || choice > 4) 
            {
                continue;
            }
            switch (choice) 
            {
                case 1: convertKmToMiles();
                    break;
                case 2: convertCelsiusToFahrenheit();
                    break;
                case 3: convertKgToPounds();
                    break;
                case 4:convertlitersToGallons();
                    break;
                default:
                    Console.WriteLine("Opción no válida.");
                    Console.ReadKey();
                    break;

            }

        }

    }

    public static void convertKmToMiles()
    {
        string input = "";

        while (true)
        {
            Console.WriteLine("Ingrese los Km o escriba 'exit' para salir: ");
            input = Console.ReadLine();

            if (input.ToLower() == "exit")
            {
                Console.WriteLine("Saliendo del programa...");
                break;
            }

            if (double.TryParse(input, out double km))
            {
                double miles = km * 0.6214;
                Console.WriteLine("Valor en millas: " + miles + " millas");
            }
            else
            {
                Console.WriteLine("Entrada invalida. Por favor ingrese un número o 'exit''.");
            }

            Console.WriteLine("Presione una tecla para continuar...");
            Console.ReadKey();
            Console.Clear();
        }
    }


    public static void convertCelsiusToFahrenheit()
    {


        string input = "";
        while (true)
        {
            Console.WriteLine("Ingrese los Celsius que desee convertir o escriba 'exit' para salir: ");
            input = Console.ReadLine();
            if (input.ToLower() == "exit")
            {
                Console.WriteLine("Saliendo del programa...");
                break;
            }

            if (double.TryParse(input, out double celsius)) 
            {
                double fahrenheit = (celsius * 1.8) + 32;
                Console.WriteLine("Valor en Fahrenheit: " + fahrenheit + " fahrenheit");

            }
            else 
            {
                Console.WriteLine("Entrada invalida. Por favor introduzca un valor numerico o 'exit'. ");
            }
            Console.WriteLine("Presione un tecla para continuar...");
            Console.ReadKey();
            Console.Clear();
        }

    }
    public static void convertKgToPounds()
    {
        String input = "";

        while (true) 
        {
            Console.WriteLine("Ingrese la cantidad de kilos o escriba 'exit' para salir: ");
            input = Console.ReadLine();

            if (input.ToLower() =="exit")
            {
                Console.WriteLine("Saliendo del programa...");
                break;
            }

            if (double.TryParse(input, out double kg))
            {
                double pounds = kg * 2.20462;
                Console.WriteLine("Valor en libras: " + pounds + " libras");

            }
            else {
                Console.WriteLine("Entrada invalida. Por favor introduzca un valor numerico o 'exit'. ");

            }
      
            Console.WriteLine("Presione un tecla para continuar...");
            Console.ReadKey();
            Console.Clear();
        }

        
    }
    public static void convertlitersToGallons()
    {
        String input = "";
        while (true)
        {
            Console.WriteLine("Ingrese la cantidad de litros: ");
            input= Console.ReadLine();

            if (input.ToLower() == "exit") {
                Console.WriteLine("Saliendo del programa...");
                break;
            }

            if (double.TryParse(input, out double liters))
            {
                double gallons = liters / 3.785;
                Console.WriteLine("Valor en galones: " + gallons + "  galones");

            }
            else
            {
                Console.WriteLine("Entrada invalida. Por favor introduzca un valor numerico o 'exit'. ");
            }

              
            Console.WriteLine("Presione una tecla para continuar...");
            Console.ReadKey();
            Console.Clear();
        }

        
    }
}

