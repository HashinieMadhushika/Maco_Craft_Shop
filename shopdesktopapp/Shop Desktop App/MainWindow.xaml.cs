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

            HomePage homePage = new HomePage();
            homePage.Show();

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
