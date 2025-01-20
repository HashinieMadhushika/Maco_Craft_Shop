using System;
using System.Windows;
using MySql.Data.MySqlClient;
using Shop_Desktop_App;
namespace Shop_Desktop_App
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        public void btnLogin_Click(object sender, RoutedEventArgs e)
        {
            string email = txtEmail.Text??string.Empty;
            string password = pwdPassword.Password??string.Empty;

            // MySQL Connection string
            string connectionString = "Server=localhost;Database=signup_desktop;User=root;Password=Hashi@1234;";

            try
            {
                using (var connection = new MySqlConnection(connectionString))
                {
                    connection.Open();

                    // Check if the email and password match a user in the database
                    string query = "SELECT * FROM Users WHERE Email = @Email AND Password = @Password";
                    using (var command = new MySqlCommand(query, connection))
                    {
                        command.Parameters.AddWithValue("@Email", email);
                        command.Parameters.AddWithValue("@Password", password);

                        using (var reader = command.ExecuteReader())
                        {
                            if (reader.Read()) // If a matching user is found
                            {
                                string role = reader["Role"].ToString()??string.Empty;
                                string phoneNumber = reader["PhoneNumber"].ToString() ?? string.Empty;

                                // Ensure the selected role matches the database role
                                if ((rbAdmin.IsChecked == true && role != "Admin") || (rbUser.IsChecked == true && role != "User"))
                                {
                                    MessageBox.Show("Incorrect role selected.", "Login Failed", MessageBoxButton.OK, MessageBoxImage.Error);
                                    return;
                                }

                                // Login success
                                MessageBox.Show($"Welcome {role}!", "Login Successful", MessageBoxButton.OK, MessageBoxImage.Information);

                                // Pass user details to HomePage
                                HomePage homePage = new HomePage(email, role, phoneNumber);
                                homePage.Show();
                                Close();
                            }
                            else
                            {
                                MessageBox.Show("Invalid email, phone number, or password.", "Login Failed", MessageBoxButton.OK, MessageBoxImage.Error);
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show($"An error occurred: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        // SignUp Button Click Handler
        public void btnSignUp_Click(object sender, RoutedEventArgs e)
        {
            // Navigate to the SignUp page when the SignUp button is clicked
            MainFrame.Navigate(new Uri("SignUp.xaml", UriKind.Relative));
        }
    }
}
