using Microsoft.AspNetCore.Mvc;
using Modelo.ResponseEntity;
using System.Collections;
using System.Reflection.Metadata.Ecma335;
using webApi_Jimena.Interface;
using webApi_Jimena.Models;
using webApi_Jimena.RequestEntity;
using webApi_Jimena.Service;

namespace webApi_Jimena.Controller
{
    [ApiController]
    [Route("api/[controller]")] //ruta base
    public class CircleController : ControllerBase{

        private readonly IcircleService _circleService;

        /// <summary>
        /// Resolves the dependencies for the CircleController by accepting an instance of IcircleService through constructor injection. This allows the controller to utilize the circle service for handling requests related to circle calculations, such as calculating the area and perimeter of a circle based on the provided radius.
        /// </summary>
        /// <param name="circleService"></param>
        public CircleController(IcircleService circleService)
        {
            _circleService = circleService;
        }


        /// <summary>
        /// Calculate the area of a circle based on the radius provided in the CircleRequest object.
        /// </summary>
        /// <param name="circle"></param>
        /// <returns></returns>
        [HttpPost("area-circle")]
        public ActionResult<CircleResponse> CalculateAreaCircle([FromBody] CircleRequest circle) {
            //validar datos
            if (circle.Radius <= 0) {
                return BadRequest("El radio no puede ser igual a cero");
            }

            double resultAreaCircle = _circleService.calculateAreaCircle(circle.Radius);

            return Ok(new CircleResponse{ Area = resultAreaCircle });
        }


        /// <summary>
        /// Calculates the perimeter of a circle based on the radius provided in the CircleRequest object.
        /// </summary>
        /// <param name="circle"></param>
        /// <returns></returns>
        [HttpPost("perimeter-circle")]
        public ActionResult<CircleResponse> CalculatePerimeterCircle([FromBody] CircleRequest circle)
        {
            //validar datos
            if (circle.Radius <= 0)
            {
                return BadRequest("El radio no puede ser igual a cero");
            }
            double resultPerimeterCircle = _circleService.calculatePerimeterCircle(circle.Radius);

            return Ok(new CircleResponse{ Perimeter = resultPerimeterCircle });
        }
        
        [HttpPost("/CreateCircle")]
        public async Task<CircleModel> Create([FromBody] CircleModel circleModel)
        {
            return await _circleService.Create(circleModel);
        }

        [HttpGet("/GetAllCircle")]
        public async Task<IEnumerable> GetAll()
        {
            return await _circleService.GetAll();
        }

        [HttpGet("GetByIdCircle/{id}")]
        public async Task<CircleModel> GetById(int id) 
        {
            return await _circleService.GetById(id);
        }

        [HttpPut("UpdateCircle/{id}")]
        public async Task<CircleModel> Update(int id, [FromBody] CircleModel circleModel)
        {
            return await _circleService.Update(id, circleModel);
        }

        [HttpDelete("/DeleteCircle/{id}")]
        public async Task<bool> Delete(int id) { 
            return await _circleService.Delete(id);
        }

    }

        
    
}

