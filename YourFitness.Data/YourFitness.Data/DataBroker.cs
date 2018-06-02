using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using YourFitness.Data.Models;

namespace YourFitness.Data
{
    public class DatabaBroker
    {
        private string _ConnectionString = "";
        
        public DatabaBroker()
        {

        }

        public List<Exercise> GetAll(int id)
        {
            List<Exercise> list = new List<Exercise>();
            var ds = new DataSet();
            var command = new SqlCommand("select e.[name] from Exercise.Exercise e join Exercise.ExerciseType et on e.[type_id] = et.[type_id] where e.[type_id] = @id");
            command.Parameters.AddRange(new SqlParameter[]
            {
                    new SqlParameter("id", id)
            });

            using (var c = GetConnectionInstance())
            {
                var da = new SqlDataAdapter();

                c.Open();
                command.Connection = c;
                da.SelectCommand = command;
                da.Fill(ds);
            }

            foreach (DataRow item in ds.Tables[0].Rows)
            {
                list.Add(new Exercise { name = item["name"].ToString()});
            }
            return list;

        }

        private SqlConnection GetConnectionInstance()
        {
            return new SqlConnection(_ConnectionString);
        }

    }
}