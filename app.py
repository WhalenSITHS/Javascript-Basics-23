def isValid(email, password):
    if "@" not in email:
        return "Not valid email"
    if not isinstance(email, str) or not isinstance(password, str):
        return "Error: email and password must be strings" 
    

    return {'email':email, 'password':password}
print(isValid("test@gmail.com", "test"))


def add(x,y):
    return x + y

z = add(4,5)