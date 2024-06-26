using KolosMW.Dtos;
using KolosMW.Models;

namespace KolosMW.Services
{
    public class MouseService : IMouseService
    {
        private readonly List<Mouse> _mouses = new List<Mouse>()
        {
            new Mouse { ID = 1, DPI = 100, Model = "A4Tech" },
            new Mouse { ID = 2, DPI = 100, Model = "Razer" },
            new Mouse { ID = 3, DPI = 100, Model = "SteelSeries" },
            new Mouse { ID = 4, DPI = 100, Model = "Logitech" },
            new Mouse { ID = 5, DPI = 100, Model = "HyperX" }
        };
        public void AddMouse(MouseRequestDto dto)
        {
            int maxId = _mouses.Max(x => x.ID);
            _mouses.Add(new Mouse
            {
                ID = maxId + 1,
                Model = dto.Model,
                DPI = dto.DPI
            });
        }

        public void DeleteMouse(int id)
        {
            var mouse = _mouses.Find(m => m.ID == id);
            if (mouse != null)
            {
                _mouses.Remove(mouse);
            }
        }

        public IEnumerable<MouseResponseDto> GetMouses()
        {
            return _mouses.Select(m => new MouseResponseDto
            {
                ID = m.ID,
                DPI = m.DPI,
                Model = m.Model,
            });
        }
    }
}
