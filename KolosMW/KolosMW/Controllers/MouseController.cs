using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using KolosMW.Services;
using KolosMW.Dtos;

namespace KolosMW.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MouseController : ControllerBase
    {
        private readonly IMouseService _service;

        public MouseController(IMouseService service)
        {
            _service = service;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var results = _service.GetMouses();
            return Ok(results);
        }

        [HttpPost]
        public ActionResult AddMouse(MouseRequestDto dto)
        {
            _service.AddMouse(dto);
            return Ok();
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteMouse(int id)
        {
            _service.DeleteMouse(id);
            return NoContent();
        }
    }
}
