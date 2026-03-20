using BlazorApp_Jimena;
using BlazorApp_Jimena.IApiService;
using BlazorApp_Jimena.Service;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;

var builder = WebAssemblyHostBuilder.CreateDefault(args);


builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

//http para llamar a la api
builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

//registramos el servicio de la api
builder.Services.AddScoped<ITriangleService, TriangleApi>(); 
builder.Services.AddScoped<ICircleService ,CircleApi>();
builder.Services.AddScoped<IPalindromeService, PalindromeApi>();
builder.Services.AddScoped<INumberService, Number>();
builder.Services.AddScoped<IBook, BookApi>();


await builder.Build().RunAsync();
