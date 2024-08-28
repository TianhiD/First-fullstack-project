namespace Formel1Api.Models;

using Formel1Api.Interfaces;

public class Team : ITeam
{
    public int Id { get; set; }
    public string? Manufacturer { get; set; }
    public string? CarImage { get; set; }
    public string? Driver1 { get; set; }
    public string? Driver2 { get; set; }
}