using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using webapi_project.DTOs.Character;
using webapi_project.Services.CharacterService;

namespace webapi_project.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CharacterController : ControllerBase
    {
        private readonly ICharacterService _characterService;

        public CharacterController(ICharacterService characterService)
        {
            _characterService = characterService;
        }

        [HttpGet("GetAll")]
        public async Task<ActionResult<ServiceResponse<List<GetCharacterDto>>>> Get()
        {
            return Ok(await _characterService.GetAllCharacters());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ServiceResponse<GetCharacterDto>>> GetCharacter(int id)
        {
            var character = await _characterService.GetCharacterById(id);
            if (character.Data == null)
            {
                character.Success = false;
                character.Message = "Character not found :(";
                return NotFound(character);
            }
            return Ok(character);
        }

        [HttpPost]
        public async Task<ActionResult<ServiceResponse<GetCharacterDto>>> PostCharacter(AddCharacterDto character)
        {
            var newCharacter = await _characterService.AddCharacter(character);
            return Ok(newCharacter);
        }

        [HttpPut]
        public async Task<ActionResult<ServiceResponse<GetCharacterDto>>> PutCharacter(UpdateCharacterDto character)
        {
            var updatedCharacter = await _characterService.UpdateCharacter(character);
           if(updatedCharacter.Data == null)
           {
                updatedCharacter.Message = "Character not found";
               return NotFound(updatedCharacter);
           }
            return Ok(updatedCharacter);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<ServiceResponse<List<GetCharacterDto>>>> DeleteCharacter(int id)
        {
            var response = await _characterService.DeleteCharacter(id);
            if(response.Data == null)
            {
                return NotFound(response);
            }
            return Ok(response);
        }


    }
}