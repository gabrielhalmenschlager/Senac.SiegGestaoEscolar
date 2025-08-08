using Senac.SiegGestaoEscolar.Domain.Repositories;
using Senac.SiegGestaoEscolar.Domain.Services.Aluno;
using Senac.SiegGestaoEscolar.Domain.Services.Curso;
using Senac.SiegGestaoEscolar.Domain.Services.Professor;
using Senac.SiegGestaoEscolar.Infra.Data.DataBaseConfiguration;
using Senac.SiegGestaoEscolar.Infra.Data.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddScoped<IDbConnectionFactory>(_ =>
    new DbConnectionFactory(
        "Server=(localdb)\\MSSQLLocalDB; Database=sieg_gestao_escolar; Trusted_Connection=True;")
    );

builder.Services.AddScoped<IAlunoService, AlunoService>();
builder.Services.AddScoped<IAlunoRepository, AlunoRepository>();

builder.Services.AddScoped<IProfessorService, ProfessorService>();
builder.Services.AddScoped<IProfessorRepository, ProfessorRepository>();

builder.Services.AddScoped<ICursoService, CursoService>();
builder.Services.AddScoped<ICursoRepository, CursoRepository>();

builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
