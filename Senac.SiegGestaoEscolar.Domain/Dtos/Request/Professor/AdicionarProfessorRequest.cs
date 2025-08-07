using System.ComponentModel.DataAnnotations;

namespace Senac.SiegGestaoEscolar.Domain.Dtos.Request.Professor;

public class AdicionarProfessorRequest
{
    [Required]
    public string Nome { get; set; }

    [Required]
    public string Sobrenome { get; set; }

    [Required]
    public DateTime DataDeNascimento { get; set; }

    [Required]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    public string Telefone { get; set; }

    [Required]
    public Formacao Formacao { get; set; }

    [Required]
    public DateTime DataContratacao { get; set; }

    [Required]
    public bool Ativo { get; set; }
}
