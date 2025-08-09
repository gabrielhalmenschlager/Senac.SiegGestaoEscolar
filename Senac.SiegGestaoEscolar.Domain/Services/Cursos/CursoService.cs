using Senac.SiegGestaoEscolar.Domain.Dtos.Request.Cursos;
using Senac.SiegGestaoEscolar.Domain.Dtos.Response.Cursos;
using Senac.SiegGestaoEscolar.Domain.Repositories;

namespace Senac.SiegGestaoEscolar.Domain.Services.Cursos
{
    public class CursoService : ICursoService
    {
        private readonly ICursoRepository _cursoRepository;

        public CursoService(ICursoRepository cursoRepository)
        {
            _cursoRepository = cursoRepository;
        }

        public async Task<IEnumerable<ObterTodosCursosResponse>> ObterTodosCursos()
        {
            var cursos = await _cursoRepository.ObterTodosCursos();

            return cursos.Select(c => new ObterTodosCursosResponse
            {
                Id = c.Id,
                Nome = c.Nome,
                CategoriaCurso = c.CategoriaCurso.ToString(),
                Valor = c.Valor,
                Ativo = c.Ativo
            });
        }

        public async Task<ObterCursoDetalhadoResponse> ObterCursoDetalhado(long id)
        {
            var curso = await _cursoRepository.ObterCursoDetalhado(id);
            ValidarSeCursoExiste(curso, id);

            return new ObterCursoDetalhadoResponse
            {
                Id = curso.Id,
                Nome = curso.Nome,
                Descricao = curso.Descricao,
                DataCriacao = curso.DataCriacao,
                CategoriaCurso = curso.CategoriaCurso.ToString(),
                Valor = curso.Valor,
                CargaHoraria = curso.CargaHoraria,
                ProfessorId = curso.ProfessorId,
                Ativo = curso.Ativo
            };
        }

        public async Task<AdicionarCursoResponse> AdicionarCurso(AdicionarCursoRequest adicionarCursoRequest)
        {
            bool categoriaValida = Enum.TryParse(adicionarCursoRequest.CategoriaCurso, ignoreCase: true, out CategoriaCurso categoria);
            ValidarSeCategoriaExiste(categoriaValida, adicionarCursoRequest.CategoriaCurso);

            var curso = new Curso
            {
                Nome = adicionarCursoRequest.Nome,
                Descricao = adicionarCursoRequest.Descricao,
                DataCriacao = adicionarCursoRequest.DataCriacao,
                CategoriaCurso = categoria,
                Valor = adicionarCursoRequest.Valor,
                CargaHoraria = adicionarCursoRequest.CargaHoraria,
                ProfessorId = adicionarCursoRequest.ProfessorId,
                Ativo = true
            };

            long idCursoResponse = await _cursoRepository.AdicionarCurso(curso);

            return new AdicionarCursoResponse
            {
                Id = idCursoResponse
            };
        }

        public async Task AtualizarCurso(long id, AtualizarCursoRequest atualizarCursoRequest)
        {
            bool categoriaValida = Enum.TryParse(atualizarCursoRequest.CategoriaCurso, ignoreCase: true, out CategoriaCurso categoria);
            ValidarSeCategoriaExiste(categoriaValida, atualizarCursoRequest.CategoriaCurso);

            var curso = await _cursoRepository.ObterCursoDetalhado(id);
            ValidarSeCursoExiste(curso, id);

            curso.Descricao = atualizarCursoRequest.Descricao;
            curso.CategoriaCurso = categoria;
            curso.Valor = atualizarCursoRequest.Valor;
            curso.CargaHoraria = atualizarCursoRequest.CargaHoraria;
            curso.ProfessorId = atualizarCursoRequest.ProfessorId;
            curso.Ativo = atualizarCursoRequest.Ativo;

            await _cursoRepository.AtualizarCurso(id, curso);
        }

        public async Task DeletarCurso(long id)
        {
            var curso = await _cursoRepository.ObterCursoDetalhado(id);
            ValidarSeCursoExiste(curso, id);

            await _cursoRepository.DeletarCurso(id);
        }

        private void ValidarSeCursoExiste(Curso curso, long id)
        {
            if (curso == null)
                throw new Exception($"Curso com ID {id} não encontrado.");
        }

        private void ValidarSeCategoriaExiste(bool categoriaExiste, string categoria)
        {
            if (!categoriaExiste)
                throw new Exception($"Categoria '{categoria}' não existe.");
        }
    }
}