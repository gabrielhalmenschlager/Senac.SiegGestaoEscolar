using System.Text.Json.Serialization;

namespace Senac.SiegGestaoEscolar.Domain.Dtos.Erro;

public class ErroResponse
{
    public string Mensagem { get; set; }


    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]

    public string Codigo { get; set; }
}
