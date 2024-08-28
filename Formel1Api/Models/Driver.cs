namespace Formel1Api.Models;

using Formel1Api.Interfaces;

public class Driver : IDriver
{
    public int? Id { get; set; }
    public string? Name { get; set; }
    public int Age { get; set; }
    public string? Nationality { get; set; }
    public string? Image { get; set; }
}