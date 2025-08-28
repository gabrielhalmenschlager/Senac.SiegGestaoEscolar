using Senac.SiegGestaoEscolar.Domain.Dtos.Request.Alunos;
using Senac.SiegGestaoEscolar.Domain.Dtos.Response.Alunos;
using Senac.SiegGestaoEscolar.Domain.Repositories;

namespace Senac.SiegGestaoEscolar.Domain.Services.Alunos
{
    public class AlunoService : IAlunoService
    {
        private readonly IAlunoRepository _alunoRepository;
        private readonly ICursoRepository _cursoRepository;

        public AlunoService(IAlunoRepository alunoRepository, ICursoRepository cursoRepository)
        {
            _alunoRepository = alunoRepository;
            _cursoRepository = cursoRepository;
        }

        public async Task<IEnumerable<ObterTodosAlunosResponse>> ObterTodosAlunos()
        {
            var alunos = await _alunoRepository.ObterTodosAlunos();

            return alunos.Select(a => new ObterTodosAlunosResponse
            {
                Id = a.Id,
                Nome = a.Nome,
                Sobrenome = a.Sobrenome,
                Email = a.Email,
                Telefone = a.Telefone,
                Ativo = a.Ativo
            });
        }

        public async Task<ObterAlunoDetalhadoResponse> ObterAlunoDetalhado(long id)
        {
            var aluno = await _alunoRepository.ObterAlunoDetalhado(id);
            ValidarSeAlunoExiste(aluno, id);

            return new ObterAlunoDetalhadoResponse
            {
                Id = aluno.Id,
                Nome = aluno.Nome,
                Sobrenome = aluno.Sobrenome,
                DataDeNascimento = aluno.DataDeNascimento,
                Email = aluno.Email,
                Telefone = aluno.Telefone,
                DataMatricula = aluno.DataMatricula,
                Ativo = aluno.Ativo
            };
        }

        public async Task<AdicionarAlunoResponse> AdicionarAluno(AdicionarAlunoRequest adicionarAlunoRequest)
        {
            var aluno = new Aluno
            {
                Nome = adicionarAlunoRequest.Nome,
                Sobrenome = adicionarAlunoRequest.Sobrenome,
                DataDeNascimento = adicionarAlunoRequest.DataDeNascimento,
                Email = adicionarAlunoRequest.Email,
                Telefone = adicionarAlunoRequest.Telefone,
                DataMatricula = adicionarAlunoRequest.DataMatricula,
                Ativo = true
            };

            long idAlunoResponse = await _alunoRepository.AdicionarAluno(aluno);

            return new AdicionarAlunoResponse
            {
                Id = idAlunoResponse
            };
        }

        public async Task AtualizarAluno(long id, AtualizarAlunoRequest atualizarAlunoRequest)
        {
            var aluno = await _alunoRepository.ObterAlunoDetalhado(id);
            ValidarSeAlunoExiste(aluno, id);

            aluno.Email = atualizarAlunoRequest.Email;
            aluno.Telefone = atualizarAlunoRequest.Telefone;
            aluno.Ativo = atualizarAlunoRequest.Ativo;

            await _alunoRepository.AtualizarAluno(aluno);
        }

        public async Task DeletarAluno(long id)
        {
            var aluno = await _alunoRepository.ObterAlunoDetalhado(id);
            ValidarSeAlunoExiste(aluno, id);

            await _alunoRepository.DeletarAluno(id);
        }

        private void ValidarSeAlunoExiste(Aluno aluno, long id)
        {
            if (aluno == null)
                throw new Exception($"Aluno com ID {id} não encontrado.");
        }

        public async Task<int> ObterTotalAlunos()
        {
            return await _alunoRepository.ObterTotalAlunos();
        }

        public async Task VincularAlunoCurso(VincularAlunoRequest vincularAlunoRequest)
        {
            var aluno = await _alunoRepository.ObterAlunoDetalhado(vincularAlunoRequest.IdAluno);
            if (aluno == null)
                throw new Exception($"Aluno com ID {vincularAlunoRequest.IdAluno} não encontrado.");

            if (!aluno.Ativo)
                throw new Exception($"Aluno com ID {vincularAlunoRequest.IdAluno} está inativo e não pode ser vinculado a um curso.");

            var curso = await _cursoRepository.ObterCursoDetalhado(vincularAlunoRequest.IdCurso);
            if (curso == null)
                throw new Exception($"Curso com ID {vincularAlunoRequest.IdCurso} não encontrado.");

            if (!curso.Ativo)
                throw new Exception($"Curso com ID {vincularAlunoRequest.IdCurso} está inativo e não pode receber novos alunos.");

            await _alunoRepository.VincularAlunoCurso(vincularAlunoRequest.IdAluno, vincularAlunoRequest.IdCurso);
        }
    }
}
