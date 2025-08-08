using System.ComponentModel.DataAnnotations;

namespace Senac.SiegGestaoEscolar.Domain.Dtos.Response.Professores;

public class AdicionarProfessorResponse
{
    public long Id { get; set; }

    public string Nome { get; set; }
}
