using System.Text.Json.Serialization;

namespace webapi_project.Models
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum Crew
    {
        StrawHat,
        Heart,
        BigMom,
        Whitebeard,
        Blackbeard,
        Revolutionary,
        Marines,
        Donquixote,
        Roger,
        RedHair,
        Beast 
    }
}