using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using Shop_Desktop_App.Data;
using MySql.Data.MySqlClient;


namespace Shop_Desktop_App
{
    /// <summary>
    /// Interaction logic for SignUp.xaml
    /// </summary>
    public partial class SignUp : Page
    {
        public SignUp()
        {
            InitializeComponent();
        }

        private void btnSignUp_Click(object sender, RoutedEventArgs e)
        {
            if (ValidateSignUp())
            {
                try
                {
                    // Connection string to connect to MySQL
                    string connectionString = "Server=localhost;Database=signup_desktop;User=root;Password=Hashi@1234;";

                    // Using MySqlConnection for direct database access
                    using (var connection = new MySql.Data.MySqlClient.MySqlConnection(connectionString))
                    {
                        connection.Open();

                        // Check if the email already exists
                        string checkEmailQuery = "SELECT COUNT(*) FROM Users WHERE Email = @Email";
                        using (var command = new MySql.Data.MySqlClient.MySqlCommand(checkEmailQuery, connection))
                        {
                            command.Parameters.AddWithValue("@Email", txtEmail.Text);
                            int emailExists = Convert.ToInt32(command.ExecuteScalar());
                            if (emailExists > 0)
                            {
                                MessageBox.Show("The email is already registered. Please use another email.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                                return;
                            }
                        }

                        // Insert the new user into the database
                        string insertQuery = "INSERT INTO Users (Email, PhoneNumber, Password, Role) VALUES (@Email, @PhoneNumber, @Password, @Role)";
                        using (var command = new MySql.Data.MySqlClient.MySqlCommand(insertQuery, connection))
                        {
                            // Determine the role based on the selected radio button
                            string role = rbAdmin.IsChecked == true ? "Admin" : "User";

                            // Add parameters
                            command.Parameters.AddWithValue("@Email", txtEmail.Text);
                            command.Parameters.AddWithValue("@PhoneNumber", pnPhoneNumber.Text);
                            command.Parameters.AddWithValue("@Password", pwdPassword.Password);
                            command.Parameters.AddWithValue("@Role", role);

                            // Execute the query
                            command.ExecuteNonQuery();
                        }
                    }

                    MessageBox.Show("Sign-up successful! Redirecting to the home page.", "Success");

                    // Navigate to the home page
                    HomePage homepage = new HomePage();
                    homepage.Show();

                   
                }
                catch (Exception ex)
                {
                    MessageBox.Show($"An error occurred during sign-up: {ex.Message}", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                }
            }
            else
            {
                MessageBox.Show("Sign-up failed. Please check your input.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        private bool ValidateSignUp()
        {
            // Basic validation logic
            string email = txtEmail.Text;
            string phoneNumber = pnPhoneNumber.Text;
            string password = pwdPassword.Password;

            if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(phoneNumber) || string.IsNullOrEmpty(password))
            {
                MessageBox.Show("Email, phone number, and password are required.", "Validation Error", MessageBoxButton.OK, MessageBoxImage.Error);
                return false;
            }

            if (!long.TryParse(phoneNumber, out _))
            {
                MessageBox.Show("Invalid phone number format.", "Validation Error", MessageBoxButton.OK, MessageBoxImage.Error);
                return false;
            }

            if (password.Length < 6)
            {
                MessageBox.Show("Password must be at least 6 characters long.", "Validation Error", MessageBoxButton.OK, MessageBoxImage.Error);
                return false;
            }

            return true;
        }
    }
}
