using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webapi_project.Models
{
    public class Character
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public uint Bounty { get; set; }
        public Crew PirateCrew { get; set; }
        public string DevilFruit { get; set; }
        public string ImageUrl { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime DateCreated { get; set; }
    }
}