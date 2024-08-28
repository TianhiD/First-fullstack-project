namespace Formel1Api.Controllers;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Formel1Api.Contexts;
using Formel1Api.Models;

[ApiController]
[Route("api/[controller]")]
public class TeamsController : ControllerBase
{
    private readonly F1Context f1Context;
    public TeamsController(F1Context _f1Context)
    {
        f1Context = _f1Context;
    }

    [HttpGet]
    public async Task<ActionResult<Team>> Get()
    {
        try
        {
            List<Team> teams = await f1Context.Teams.ToListAsync();
            if(teams !=null)
            {
                return Ok(teams);
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
    public async Task<ActionResult<Team>> Get(int id)
    {
        try
        {
            Team? chosenTeam = await f1Context.Teams.FindAsync(id);
            if(chosenTeam != null)
            {
                return Ok(chosenTeam);
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
    [Route("[action]/{manufacturer}")]
    public async Task<ActionResult<Team>> GetCar(string manufacturer)
    {
        try
        {
            Team? chosenManufacturer = await f1Context.Teams.FindAsync(manufacturer);
            if(chosenManufacturer!= null)
            {
                return Ok(chosenManufacturer);
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
    public async Task<ActionResult> Post(Team newTeam)
    {
        try
        {
            f1Context.Teams.Add(newTeam);
            await f1Context.SaveChangesAsync();
            return Ok();
            /* CreatedAtAction("Get", new {id = newTeam.Id}, newTeam); */
        }
        catch
        {
            return StatusCode(500);
        }
    }


    [HttpPut]
    public async Task<IActionResult> Put(Team editedTeam)
    {
        try
        {
            f1Context.Entry(editedTeam).State = EntityState.Modified;
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
            Team? team = await f1Context.Teams.FindAsync(id);
            if(team!= null){
                f1Context.Teams.Remove(team);
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