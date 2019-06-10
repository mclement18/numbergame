import random

def evaluate_guess(secret_number, attempts):
    user_guess = input("Enter a number: ")
    try:
        guess = int(user_guess)
    except ValueError as error:
        print("Only integer numbers are accepted.")
        print("Try again!")
        quit()
    if guess < secret_number:
        print("The secret number is bigger!")
        success = False
    elif guess > secret_number:
        print("The secret number is smaller!")
        success = False
    elif guess == secret_number:
        print("Congratulation! You found the secret number in " + str(attempts) + " attempts!")
        success = True
    return success



print("Welcome in the guess the number game!")
print("You have to find the secret number which is between 1 and 100.")
secret_number = random.randint(1, 100)
attempts = 0

while True:
    attempts += 1
    success = evaluate_guess(secret_number, attempts)
    if success:
        break

print("Try again!")
