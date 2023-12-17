using System.Net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Data.Sqlite;
using Newtonsoft.Json;

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
    var results = new List<object>();

                using (var connection = new SqliteConnection("Data Source=polldata.db"))
                {
                    connection.Open();

                    using (var command = connection.CreateCommand())
                    {
                        command.CommandText = "SELECT * FROM PollData";

                        using (var reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                var values = new Dictionary<string, object>();

                                for (int i = 0; i < reader.FieldCount; i++)
                                {
                                    values[reader.GetName(i)] = reader.GetValue(i);
                                }

                                results.Add(values);
                            }
                        }
                    }
                }

                return JsonConvert.SerializeObject(results);
})
.WithName("GetPollData")
.WithOpenApi();

app.MapPost("/addpolldata", ([FromBody] PollData Data) =>
{

    using(var connection = new SqliteConnection("Data Source=polldata.db")){
    connection.Open();

        using(var command = connection.CreateCommand()){
            command.CommandText = $@"
                INSERT INTO PollData (PollQuestion, PollAnswer1, Ans1Votes, PollAnswer2, Ans2Votes, PollAnswer3, Ans3Votes, PollAnswer4, Ans4Votes, PollTotalResponses)
                VALUES
                    ('{Data.PollQuestion}', '{Data.PollAnswer1}', {Data.Ans1Votes}, '{Data.PollAnswer2}', {Data.Ans2Votes}, '{Data.PollAnswer3}', {Data.Ans3Votes}, '{Data.PollAnswer4}', {Data.Ans4Votes}, {Data.PollTotalResponses});

                    
                ";
            command.ExecuteNonQuery();
            return "complete";
        }; 
    }
});

app.MapPost("/uservote", ([FromBody] PollVoteRequest Data) =>
{

    using(var connection = new SqliteConnection("Data Source=polldata.db")){
    connection.Open();

        using(var command = connection.CreateCommand()){
            string field;
        
            switch(Data.UsersAnswer){
                case "PollAnswer1": 
                    field = "Ans1Votes";
                    break;
                case "PollAnswer2": 
                    field = "Ans2Votes";
                    break;
                case "PollAnswer3": 
                    field = "Ans3Votes";
                    break;
                case "PollAnswer4": 
                    field = "Ans4Votes";
                    break;
                default:
                    return Results.BadRequest("UsersAnswer Invalid");
            };
            command.CommandText = $@"
                UPDATE PollData
                SET {field} = {field} + 1
                WHERE PollId = {Data.PollID};
                    
                ";
            command.ExecuteNonQuery();
            return Results.Ok("complete"); 
        }; 
    }
});

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

record PollVoteRequest(
    int PollID,
    string UsersAnswer
);
