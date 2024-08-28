namespace Formel1Api.Interfaces;

public interface IRace 
{
    public int Id {get; set;}
    public string? WinnerName {get; set;}
    public double WinnerTime {get; set;}
    public string? GrandPrix {get; set;}
    public int NumberOfLaps {get; set;}
    
    // legge inn i databasen
    //public string? Manufacturer { get; set; }
    //public string? WinnerDate { get; set; }
}