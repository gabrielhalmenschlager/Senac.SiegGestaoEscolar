using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Senac.SiegGestaoEscolar.Domain.Repositories;
using Senac.SiegGestaoEscolar.Domain.Services.Alunos;
using Senac.SiegGestaoEscolar.Domain.Services.Cursos;
using Senac.SiegGestaoEscolar.Domain.Services.Professores;
using Senac.SiegGestaoEscolar.Infra.Data.DataBaseConfiguration;
using Senac.SiegGestaoEscolar.Infra.Data.Repositories;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("PermitirLocalhost5173",
        policy =>
        {
            policy.WithOrigins("http://localhost:5173")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

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

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new() { Title = "Gerenciamento Veiculo", Version = "v1" });

    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        Scheme = "bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Description = "Insira o token JWT no formato: {seu_token}"
    });

    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            Array.Empty<string>()
        }
    });
});

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = "https://identityserver-api.onrender.com",
            ValidAudience = "https://identityserver-api.onrender.com",
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("V3ry$3cr3tK3y!Sh0uldB3Long&Random"))
        };
    });

builder.Services.AddAuthorization();

var app = builder.Build();

// Usa a política CORS que criamos
app.UseCors("PermitirLocalhost5173");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
