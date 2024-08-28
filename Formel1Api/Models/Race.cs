namespace Formel1Api.Models;

using Formel1Api.Interfaces;

public class Race : IRace 
{
    public int Id {get; set;}
    public string? WinnerName {get; set;}
    public double WinnerTime {get; set;}
    public string? GrandPrix {get; set;}
    public int NumberOfLaps {get; set;}
    //public string? Manufacturer { get; set; }
    //public string? WinnerDate { get; set; }
}