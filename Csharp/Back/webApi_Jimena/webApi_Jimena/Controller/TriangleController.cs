using Microsoft.AspNetCore.Mvc;
using webApi_Jimena.Interface;
using webApi_Jimena.RequestEntity;
using webApi_Jimena.ResponseEntity;
using webApi_Jimena.Models;

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
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var List = await _service.GetAll();
                return Ok(List);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error al obtener los registros: {ex.Message}");
            }
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
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                bool deleted = await _service.Delete(id);

                if (!deleted)
                    return NotFound("No se encontró el registro a eliminar");

                return Ok($"Registro {id} eliminado correctamente.");
            }
            catch (Exception ex)
            {
                return BadRequest($"Error al eliminar el registro: {ex.Message}");
            }
        }
        [HttpPost("/Create")]
        public async Task<IActionResult> Create([FromBody] TriangleModel triangleModel)
        {
            try
            {
                double area = _service.calculateArea(triangleModel.BaseTr, triangleModel.HeightTr);

                triangleModel.Area = area;
                triangleModel.Timestamp = DateTime.UtcNow;

                var result = await _service.Create(triangleModel);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error al crear el registro: {ex.Message}");

            }
        }
    }
}
