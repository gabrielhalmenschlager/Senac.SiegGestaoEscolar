using System.Data;

namespace Senac.SiegGestaoEscolar.Infra.Data.DataBaseConfiguration;

public interface IDbConnectionFactory
{
    IDbConnection CreateConnection();
}
