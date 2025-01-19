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
                // Determine role based on checkbox
                string role = rbAdmin.IsChecked == true ? "Admin" : "User";

                // Add user to user management table
                var newUser = new User
                {
                    Name = txtEmail.Text, // Assuming txtEmail is used for the username
                    Role = role,
                    Status = "Active",
                    PhoneNumber = pnPhoneNumber.Text,
                    Password = pwdPassword.Password // Capture the password
                };

                HomePage.Users.Add(newUser); // Assuming Users is a public static collection in HomePage

                MessageBox.Show("Sign-up successful! Redirecting to login page.", "Success", MessageBoxButton.OK, MessageBoxImage.Information);

                // Navigate back to login or home page
                HomePage homepage = new HomePage();
                homepage.Show();
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

            return true;
        }
       
    }
}
