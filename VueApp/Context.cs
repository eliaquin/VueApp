namespace VueApp
{
    using System;
    using System.Data.Entity;
    using System.Linq;

    public class Context : DbContext
    {
        // Your context has been configured to use a 'Context' connection string from your application's 
        // configuration file (App.config or Web.config). By default, this connection string targets the 
        // 'VueApp.Context' database on your LocalDb instance. 
        // 
        // If you wish to target a different database and/or database provider, modify the 'Context' 
        // connection string in the application configuration file.
        public Context()
            : base("name=Context")
        {
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Formulario>()
                .ToTable("Formularios")
                .Property(x => x.Nombre)
                .HasMaxLength(50);
            base.OnModelCreating(modelBuilder);
        }

        public virtual DbSet<Formulario> Formularios { get; set; }
    }

    public class Formulario
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public DateTime Fecha { get; set; }
        public bool EnCarrera { get; set; }
    }
}