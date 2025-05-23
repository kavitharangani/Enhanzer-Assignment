var builder = WebApplication.CreateBuilder(args);

// Register the BookService
builder.Services.AddSingleton<BookApi.Services.BookService>();

builder.Services.AddControllers();

var app = builder.Build();

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
