namespace Formel1Api.Controllers;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Formel1Api.Contexts;
using Formel1Api.Models;

[ApiController]
[Route("api/[controller]")]
public class RacesController : ControllerBase
{
    private readonly F1Context f1Context;

    public RacesController(F1Context _f1Context)
    {
        f1Context = _f1Context;
    }

    [HttpGet]
    public async Task<ActionResult<Race>> Get()
    {
        try
        {
            List<Race> races = await f1Context.Races.ToListAsync();
            if(races !=null)
            {
                return Ok(races);
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
    public async Task<ActionResult<Race>> Get(int id)
    {
        try
        {
            Race? chosenRace = await f1Context.Races.FindAsync(id);
            if(chosenRace != null)
            {
                return Ok(chosenRace);
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
    [Route("[action]/{winnerName}")]
    public async Task<ActionResult<Race>> Get (string winnerName)
    {
        try
        {
            Race? chosenWinner = await f1Context.Races.FindAsync(winnerName);
            if(chosenWinner!= null)
            {
                return Ok(chosenWinner);
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

    [HttpPost]
    public async Task<ActionResult<Race>> Post(Race newRace)
    {
        try
        {
            f1Context.Races.Add(newRace);
            await f1Context.SaveChangesAsync();
            return Ok(); 
            /* CreatedAtAction("Get", new {id = newRace.Id}, newRace); */
        }
        catch
        {
            return StatusCode(500);
        }
    }

    
    [HttpPut]
    public async Task<IActionResult> Put(Race updatedRace)
    {
        try
        {
            f1Context.Entry(updatedRace).State = EntityState.Modified;
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
            Race? race = await f1Context.Races.FindAsync(id);
            if(race!= null){
                f1Context.Races.Remove(race);
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