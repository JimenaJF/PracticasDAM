using Microsoft.AspNetCore.Mvc;
using webApi_Jimena.Interface;
using webApi_Jimena.RequestEntity;
using webApi_Jimena.ResponseEntity;
using webApi_Jimena.Models;
using System.Collections;

namespace webApi_Jimena.controllerTriangle
{
    [ApiController]
    [Route("api/[controller]")] //ruta base
    public class TriangleController : ControllerBase
    {
        //variable nueva para el contexto de la bd
        private readonly ItriangleService _service;

        public TriangleController(ItriangleService itriangleService)
        {
            _service = itriangleService;
        }


        /// <summary>
        /// Calculate the area of a triangle given its base and height.
        /// </summary>
        /// <param name="triangulo"></param>
        /// <returns></returns>
        [HttpPost("area-triangle")]
        public ActionResult<TriangleResponse> CalculateAreaTriangle([FromBody] TriangleRequest triangulo)
        {
            //validar datos
            if (triangulo.BaseTr <= 0 || triangulo.HeightTr <= 0)
            {
                return BadRequest("La base y la altura deben ser mayores a cero");
            }

            //hacemos uso de la funcion que ya teniamos en el servicio
            double resultadoArea = _service.calculateArea(triangulo.BaseTr, triangulo.HeightTr);

            //devolvemos el resultado
            return Ok(new TriangleResponse { Area = resultadoArea });
        }


        [HttpGet("/GetAll")]
        public async Task<IEnumerable> GetAll()
        {
            return await _service.GetAll();
        }

        [HttpGet("/GetById/{id}")]
        public async Task<IActionResult> GetById(int id)
        {

            try
            {
                var model = await _service.GetById(id);
                if (model == null)
                    return NotFound();
                return Ok(model);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error al obtener el registro: {ex.Message}");
            }
        }

        [HttpPut("/Update/{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] TriangleModel triangleModel)
        {
            try
            {
                var updated = await _service.Update(id, triangleModel);

                if (updated == null)
                    return NotFound("No se encontro el registro a actualizar");

                return Ok(updated);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error al actualizar el registro: {ex.Message}");
            }

        }

        [HttpDelete("/Delete/{id}")]
        public async Task<bool> Delete(int id)
        {
            try
            {
                bool deleted = await _service.Delete(id);

                if (!deleted)
                    throw new Exception("error al borrar el circulo");

                return true;
            }
            catch (Exception ex)
            {
                throw new Exception (ex.StackTrace);
            }
        }
        [HttpPost("/Create")]
        public async Task<TriangleModel> Create([FromBody] TriangleModel triangleModel)
        {
           return await _service.Create(triangleModel);
        }
    }
}
