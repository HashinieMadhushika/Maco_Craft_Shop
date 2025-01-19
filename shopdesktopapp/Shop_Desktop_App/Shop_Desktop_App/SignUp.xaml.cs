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
                using (var dbContext = new ShopDbContext())
                {
                    // Determine role based on radio button
                    string role = rbAdmin.IsChecked == true ? "Admin" : "User";

                    // Create a new User object
                    var newUser = new User
                    {
                        Email = txtEmail.Text,
                        PhoneNumber = pnPhoneNumber.Text,
                        Password = pwdPassword.Password,
                        Role = role
                    };

                    // Add user to the database
                    dbContext.Users.Add(newUser);
                    dbContext.SaveChanges();
                }

                MessageBox.Show("Sign-up successful! Redirecting to login page.", "Success");


                MessageBox.Show("Sign-up successful! Redirecting to login page.", "Success");

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
