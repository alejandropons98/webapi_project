using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webapi_project.DTOs.Character
{
    public class AddCharacterDto
    {
        public string Name { get; set; }
        public uint Bounty { get; set; }
        public Crew PirateCrew { get; set; }
        public string DevilFruit { get; set; }

    }
}