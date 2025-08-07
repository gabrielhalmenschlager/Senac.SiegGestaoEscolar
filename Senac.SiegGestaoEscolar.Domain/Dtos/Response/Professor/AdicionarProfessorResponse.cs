using System.ComponentModel.DataAnnotations;

namespace Senac.SiegGestaoEscolar.Domain.Dtos.Response.Professor;

public class AdicionarProfessorResponse
{
    public long Id { get; set; }

    public string Nome { get; set; }
}
