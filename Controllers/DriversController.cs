namespace Formel1Api.Controllers;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Formel1Api.Contexts;
using Formel1Api.Models;

[ApiController]
[Route("api/[controller]")]
public class DriversController : ControllerBase
{
    private readonly F1Context f1Context;

    public DriversController(F1Context _f1Context)
    {
        f1Context = _f1Context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Driver>>> Get()
    {
        try
        {
            List<Driver> drivers = await f1Context.Drivers.ToListAsync();

            if (drivers !=null)
            {
                drivers.ForEach(driver =>
                {
                    driver.Image = $"images/drivers/{driver.Image}";
                });

                return Ok(drivers);
            }
            else
            {
                return NotFound();
            }
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Driver>> Get(int id)
    {
        try
        {
            Driver? chosenDriver = await f1Context.Drivers.FindAsync(id);
            
            if (chosenDriver != null)
            {
                return Ok(chosenDriver);
            }
            else
            {
                return NotFound();
            }
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpGet]
    [Route("[action]/{name}")]
    public async Task<ActionResult<Driver>> GetName(string name)
    {
        try
        {

            Driver ? chosenDriverName = await f1Context.Drivers.FindAsync(name);

            if(chosenDriverName!= null)
            {
                return Ok(chosenDriverName);
            }
            else
            {
                return NotFound();
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error: {ex.Message}");
            Console.WriteLine($"StackTrace: {ex.StackTrace}");
            return StatusCode(500);
        }
    }

    
    [HttpPost]
    public async Task<IActionResult> Post(Driver newDriver)
    {
        try
        {

            f1Context.Drivers.Add(newDriver);
            await f1Context.SaveChangesAsync();
            return CreatedAtAction("Get", new {id = newDriver.Id}, newDriver);

            
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpPut]
    public async Task<IActionResult> Put(Driver editedDriver)
    {
        try
        {
            f1Context.Entry(editedDriver).State = EntityState.Modified;
            await f1Context.SaveChangesAsync();
            return NoContent();
        }
        catch
        {
            return StatusCode(500);
        }
        
    }
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        try
        {
            Driver? driver = await f1Context.Drivers.FindAsync(id);
            if(driver != null){
                f1Context.Drivers.Remove(driver);
                await f1Context.SaveChangesAsync();
                return NoContent();
            }
            else
            {
                return NotFound();
            }
            
        }
        catch
        {
            return StatusCode(500);
        }
        
    }
}