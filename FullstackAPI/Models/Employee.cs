using System;
namespace fullstack.API.Models
{
	public class Employee
	{
		public Guid Id { get; set; }
        public string Name { get; set; }
        public long Email { get; set; }
        public long Phone { get; set; }
        public long Salary { get; set; }
        public string Department { get; set; }



    }
}

