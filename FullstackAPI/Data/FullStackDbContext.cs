using System;
using fullstack.API.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic; // For IEnumerable<>
using Microsoft.Extensions.Logging; // For ILogger<>

namespace fullstack.API.Data
{
	public class FullStackDbContext :DbContext
	{

		public FullStackDbContext(DbContextOptions options) : base(options)
		{

		}

		public DbSet<Employee> Employees { get; set; }


		
	}
}

