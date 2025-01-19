using System.Data;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using Shop_Desktop_App;
using Shop_Desktop_App.Data;



namespace Shop_Desktop_App
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();

        }

        public void btnLogin_Click(object sender, RoutedEventArgs e)
        {

            string email = txtEmail.Text;
            string password = pwdPassword.Password;

            using (var dbContext = new ShopDbContext())
            {
                var user = dbContext.Users
                    .FirstOrDefault(u => u.Email == email  && u.Password == password);

                if (user != null)
                {
                    string role = rbAdmin.IsChecked == true ? "Admin" : "User";

                    if (role != user.Role)
                    {
                        MessageBox.Show("Incorrect role selected.", "Login Failed", MessageBoxButton.OK, MessageBoxImage.Error);
                        return;
                    }

                    MessageBox.Show($"Welcome {role}!", "Login Successful", MessageBoxButton.OK, MessageBoxImage.Information);

                    HomePage homePage = new HomePage();
                    homePage.Show();
                    Close();
                }
                else
                {
                    MessageBox.Show("Invalid email, phone number, or password.", "Login Failed", MessageBoxButton.OK, MessageBoxImage.Error);
                }
            }

        }

        public void btnSignUp_Click(object sender, RoutedEventArgs e)
        {
            MainFrame.Navigate(new Uri("SignUp.xaml", UriKind.Relative));

        }

        private void MainFrame_Navigated(object sender, NavigationEventArgs e)
        {

        }
    }
}
