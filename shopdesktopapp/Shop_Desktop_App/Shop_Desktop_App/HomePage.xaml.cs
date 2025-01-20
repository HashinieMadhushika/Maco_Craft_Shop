using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Windows;
using System.Windows.Controls;
using MySql.Data.MySqlClient;
using Shop_Desktop_App;

namespace Shop_Desktop_App
{
    public partial class HomePage : Window
    {
        public static ObservableCollection<User> Users { get; set; } = new ObservableCollection<User>();

        public HomePage()
        {
            InitializeComponent();

        }

        public HomePage(string loggedInEmail, string loggedInRole, string loggedInPhoneNumber)
        {
           
            LoadUserData();
            MessageBox.Show($"Welcome {loggedInRole} ({loggedInEmail})!", "Login Successful", MessageBoxButton.OK, MessageBoxImage.Information);

        }

        private void LoadUserData()
        {
            try
            {
                // MySQL connection string
                string connectionString = "Server=localhost;Database=signup_desktop;User=root;Password=Hashi@1234;";
                using (var connection = new MySqlConnection(connectionString))
                {
                    connection.Open();

                    // Query to get all users (or a filtered list if needed)
                    string query = "SELECT Email, Role, PhoneNumber, 'Active' AS Status FROM Users";
                    using (var command = new MySqlCommand(query, connection))
                    {
                        var reader = command.ExecuteReader();
                        var userList = new List<User>();

                        while (reader.Read())
                        {
                            userList.Add(new User
                            {
                                Email = reader.GetString("Email")??string.Empty,
                                Role = reader.GetString("Role")??string.Empty,
                                Status = reader.GetString("Status"),
                                PhoneNumber = reader.GetString("PhoneNumber") ?? string.Empty,
                                Password = "N/A" // We don't need to display the password
                            });
                        }

                        // Bind the user list to the DataGrid
                        Users.Clear();
                        foreach (var user in userList)
                        {
                            Users.Add(user);
                        }

                        UserTable.ItemsSource = Users;
                    }
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Error loading user data: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }


        private void AddUser_Click(object sender, RoutedEventArgs e)
        {
            UserTable.CommitEdit(DataGridEditingUnit.Row, true);
            Users.Add(new User { Email = "New User", Role = "User", Status = "Only Signup", PhoneNumber = "N/A", Password = "default" });
        }

        private void UpdateUser_Click(object sender, RoutedEventArgs e)
        {
            UserTable.CommitEdit(DataGridEditingUnit.Row, true);

            if (UserTable.SelectedItem is User selectedUser)
            {
                selectedUser.Email = "Updated User"; // Example modification
            }
            else
            {
                MessageBox.Show("Please select a user to update.");
            }
        }

        private void DeleteUser_Click(object sender, RoutedEventArgs e)
        {
            UserTable.CommitEdit(DataGridEditingUnit.Row, true);

            if (UserTable.SelectedItem is User selectedUser)
            {
                Users.Remove(selectedUser);
            }
            else
            {
                MessageBox.Show("Please select a user to delete.");
            }
        }
    }



    public class User
        {
            public string? Email { get; set; }
            public string? Role { get; set; }
            public string? Status { get; set; }
            public string? PhoneNumber { get; set; }
            public string? Password { get; set; }
        }

    }

