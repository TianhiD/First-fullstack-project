namespace Formel1Api.Controllers;

using Formel1Api.Models;
using Microsoft.AspNetCore.Mvc;


[ApiController]
[Route("api/[controller]")]
public class ImageUploadController : ControllerBase
{
    private readonly IWebHostEnvironment hosting;

    public ImageUploadController(IWebHostEnvironment _hosting)
    {
        hosting = _hosting;
    }

    [HttpGet]
    public string Get()
    {
        return "Contact success: ImageUploadController";
    }


    [HttpPost]
    public IActionResult SaveImage(IFormFile file)
    {
        try
        {
            if (file == null || file.Length == 0)
            {
                return BadRequest("File not provided or empty.");
            }

            string webRootPath = hosting.WebRootPath;
            string absolutePath = Path.Combine($"{webRootPath}/images/drivers/{file.FileName}");

            using(var fileStream = new FileStream(absolutePath, FileMode.Create))
            {
                file.CopyTo(fileStream);
            }

            return Ok(new { success = true, filename = file.FileName });
        }
        catch(Exception ex)
        {
        // Log the exception message
        Console.WriteLine(ex.Message);
        return StatusCode(500, new { success = false, message = "Internal server error" });
        }   
        
    }
}
        


    

