using KolosMW.Dtos;

namespace KolosMW.Services
{
    public interface IMouseService
    {
        public void AddMouse(MouseRequestDto dto);
        public void DeleteMouse(int id);
        public IEnumerable<MouseResponseDto> GetMouses();
    }
}
