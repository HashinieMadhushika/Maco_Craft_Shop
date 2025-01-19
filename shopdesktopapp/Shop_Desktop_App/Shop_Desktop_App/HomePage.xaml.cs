using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Windows;
using System.Windows.Controls;
using Shop_Desktop_App;

namespace Shop_Desktop_App
{
    public partial class HomePage : Window
    {
        public static ObservableCollection<User> Users { get; set; } = new ObservableCollection<User>();

        public HomePage()
        {
            InitializeComponent();

            // Bind the Users collection to the DataGrid
            UserTable.ItemsSource = Users;
        }

        private void AddUser_Click(object sender, RoutedEventArgs e)
        {
            UserTable.CommitEdit(DataGridEditingUnit.Row, true);
            Users.Add(new User { Name = "New User", Role = "User", Status = "Only Signup", PhoneNumber = "N/A", Password = "default" });
        }

        private void UpdateUser_Click(object sender, RoutedEventArgs e)
        {
            UserTable.CommitEdit(DataGridEditingUnit.Row, true);

            if (UserTable.SelectedItem is User selectedUser)
            {
                selectedUser.Name = "Updated User"; // Example modification
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
        public string Name { get; set; }
        public string Role { get; set; }
        public string Status { get; set; }
        public string PhoneNumber { get; set; }
        public string Password { get; set; }
    }
}
