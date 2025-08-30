namespace Senac.SiegGestaoEscolar.Domain.Dtos.Response.Alunos;

public class ObterAlunoDetalhadoResponse
{
    public long Id { get; set; }

    public string Nome { get; set; }

    public string Sobrenome { get; set; }

    public DateTime DataDeNascimento { get; set; }

    public string Email { get; set; }

    public string Telefone { get; set; }

    public DateTime DataMatricula { get; set; }

    public bool Ativo { get; set; }

    public IEnumerable<CursoResponse> Cursos { get; set; } 
}

public class CursoResponse
{
    public long Id { get; set; }

    public string Nome { get; set; }

    public string CategoriaCurso { get; set; }
}