   M S B A M L   `   `   `  ����O  Kmscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e0891&clr-namespace:System;assembly=mscorlibSystem  5   	   K GShop_Desktop_App, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null3clr-namespace:Shop_Desktop_AppShop_Desktop_App 5   	   !   Shop_Desktop_App.MainWindow   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   6sys&clr-namespace:System;assembly=mscorlib     5   	   0localclr-namespace:Shop_Desktop_App     5   	     � Title$  
MainWindow��5	   	   $	��450��6   $	��800��6)   ���	#FF5F365F � 	Resources 5       �� 
TargetType �� Property �� Value��%T   '��       �� 5   
   " ��6   .�5      ��  � ��
 �   �6+   5      5      .��5      � ��5   
   �� 5       �� ImageSource$T NC:\Users\Hashinie\Desktop\Shop\Maco_Craft_Shop\shopfrontend\src\Images/Im2.jpg��6    j� Stretch$ UniformToFill=�5       � ColumnDefinitions 5   
   �� 5      $��* �6   �� 5      $
��Auto �6    � RowDefinitions 5   
   �� 5       $��* �6   �� 5!      $
��Auto �6   .+�5(   
   �� $��
Maco Craft��6   $	��150(�6&   $
��Bold"�65   ���#bc6c25$��Center=�6\   $��0,170,10,20q�6y   �� 5)   
   $)��#Crafting joy, One stitch at a time.��6   $��32(�6?   $
��Bold"�6M   $��
0,30,10,20q�6_   ���#bc6c25$��Center=�6�   �� 5,   
   $��1��6   $��0��6!   $��20q�6.   ���#fefae0	 �� CornerRadius$	 40��5-      
 �� Padding$
 20q�6#   $��Center=�60   ._�5/      �� $��1��6   $��0��6)   $��20q�66   $��Center=�6B   .+�50      �� $��Welcome!��6   $��60(�6,   $
��Bold"�6:   $��0,0,0,20q�6L   �� 51      $��Please enter your details��6   $��24(�6=   $��0,0,0,20q�6L   �� 53      $��Enter your email : ��6   $��18(�67   $��0,0,0,0q�6F   �� 54      -   5         ��Name$ txtEmail��54      $��18(�6,   $��0,0,0,20q�6:   �� 56      $��Enter your password : ��6   $��18(�6:   $��0,0,0,0q�6H   G� 57      -   5         G�Name$ pwdPassword��57      $��18(�63   $��0,0,0,10q�6A   	� 59      -   5         	�Name$ rbAdmin��59      $��Admin��6/    	� 	GroupName$ UserType��6?   $��24(�6T   	� 5:      -   5        $ rbUser��5:      $
��User��6.   $ UserType��6=    d� 	IsChecked$
 TrueY�6R   $��24(�6c   �� 5=      -   5         ��Name$ btnLogin��5=      $��Login��6+   $��18(�6;   $	��100��6I   $��	0,20,0,10q�6U   ���#bc6c256   �� 5?      $��Don't have an account?��6   $��18(�6:   $��0,0,0,0q�6I   �� 5@      -   5        $ 	btnSignUp��5@      $��18(�6,   $��Sign Up��6;   $	��100��6M   $��	0,10,0,10q�6Y   ���#bc6c25 � Cursor$
 Hand��6�   5A      5B       � 5E   	   -   5        $��	MainFrame��5E        � NavigationUIVisibility$ Hidden=�6    5G      5H      