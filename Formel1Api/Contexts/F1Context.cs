namespace Formel1Api.Contexts;

using Formel1Api.Models;
using Microsoft.EntityFrameworkCore;

public class F1Context : DbContext
{
    public F1Context(DbContextOptions<F1Context> options):base(options){}
    public DbSet<Driver> Drivers {get; set;}
    public DbSet<Team> Teams {get; set;}
    public DbSet<Race> Races {get; set;}
}