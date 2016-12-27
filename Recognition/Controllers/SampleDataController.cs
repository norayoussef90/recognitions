using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Recognition.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {

        [HttpGet("[action]")]
        public RecognitionList RecentRecognitions()
        {
            var lst = new List<Recognition>
            {
                new Recognition{ Id = 1, BadgeDescription = "Badge Description", EmployeeName = "Mark", BadgeTitle = "Hard Work",  DepartmentName = "HR", EmployeePhotoUrl = "" },
                new Recognition{ Id = 2, BadgeDescription = "Badge Description", EmployeeName = "Mark", BadgeTitle = "Hard Work",  DepartmentName = "HR", EmployeePhotoUrl = "" },
                new Recognition{ Id = 3, BadgeDescription = "Badge Description", EmployeeName = "Mark", BadgeTitle = "Hard Work",  DepartmentName = "HR", EmployeePhotoUrl = "" },
            };

            var obj = new RecognitionList
            {
                Interval = "Q3 2016: Jun - Aug 2016",
                Recognitions = lst
            };
            
            return obj;
        }

        public class RecognitionList
        {
            public string Interval;
            public List<Recognition> Recognitions;
        }
        public class Recognition {
            public int Id;

            public string EmployeeName;
            public string DepartmentName;
            public string EmployeePhotoUrl;

            public string BadgeTitle;
            public string BadgeDescription;
        }

        //-------------------------------------------------------------
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }
    }
}
