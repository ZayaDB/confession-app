from wifipasswords import Wifipasswords
passwords=Wifipasswords().get_passwords()
connected_passwords=Wifipasswords().get_currently_connected_passwords()
print(passwords)
print(connected_passwords)
