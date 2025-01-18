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
            // Implement signup logic here
            // Validate email, password, confirm password, etc.
            // If successful, navigate to the home page
            HomePage homePage = new HomePage();
            homePage.Show();
        }
        private bool ValidateSignUp()
        {
            // Implement your actual validation logic here
            // For example:
            string email = txtEmail.Text;
            string password = pwdPassword.Password;
            // int phonenumber = pnphonenumber.Number;

            // Check if email is valid, passwords match, etc.
            // ...

            return true; // Replace with actual validation result
        }
    }
}
