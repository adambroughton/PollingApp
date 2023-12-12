var builder = WebApplication.CreateBuilder(args);
var  MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy  =>
                      {
                          policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod().SetIsOriginAllowed(origin => true);
                      });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors(MyAllowSpecificOrigins);

app.MapGet("/polldata", () =>
{
    PollData[] polls = new PollData[]
    {
        new PollData(142456, "What is your favourite programming language?", "Python", 3, "Javascript", 4, "C#", 2, "React", 0, 9),
        new PollData(222266, "What OS do you prefer?", "MacOS", 7, "Windows", 5, "Linux", 8, "Other", 2, 22),
        new PollData(333333, "What is your favorite color?", "Red", 6, "Blue", 3, "Green", 5, "Yellow", 1, 15),
        new PollData(444444, "Which is your preferred programming framework?", "Angular", 5, "Vue", 3, "Spring", 7, "Django", 3, 18),
        new PollData(555555, "What type of music do you enjoy?", "Rock", 10, "Pop", 6, "Hip Hop", 5, "Electronic", 4, 25),
        new PollData(666666, "What is your favorite season?", "Spring", 3, "Summer", 4, "Fall", 3, "Winter", 2, 12),
        new PollData(777777, "Which social media platform do you use the most?", "Facebook", 12, "Twitter", 8, "Instagram", 7, "LinkedIn", 3, 30),
        new PollData(888888, "What is your preferred method of transportation?", "Car", 5, "Bicycle", 3, "Public Transit", 4, "Walking", 2, 14),
        new PollData(999999, "What is your favorite book genre?", "Mystery", 7, "Science Fiction", 5, "Romance", 6, "Fantasy", 2, 20),
        new PollData(101010, "Which programming paradigm do you prefer?", "Object-Oriented", 6, "Functional", 4, "Procedural", 3, "Event-Driven", 2, 15),
        new PollData(111111, "What is your favorite sport?", "Soccer", 15, "Basketball", 8, "Tennis", 3, "Golf", 2, 28),
        new PollData(121212, "How do you take your coffee?", "Black", 3, "With Cream", 5, "With Sugar", 2, "I don't drink coffee", 0, 10),
    };
    return polls;
})
.WithName("GetPollData")
.WithOpenApi();

app.UseAuthorization();

app.MapControllers();

app.Run();

record PollData(
    int PollID,
    string PollQuestion,
    string PollAnswer1,
    int Ans1Votes,
    string PollAnswer2,
    int Ans2Votes,
    string PollAnswer3,
    int Ans3Votes,
    string PollAnswer4,
    int Ans4Votes,
    int PollTotalResponses
);
