import random

# Exercise 1 : What are you learning ?
# Write a function called display_message() that prints one sentence telling everyone what you are learning in this course.
# Call the function, and make sure the message displays correctly.

def display_message(subject):
    return print(f'In this course we are learning {subject}.')

display_message('Python')

# Exercise 2: What’s your favorite book ?
# Write a function called favorite_book() that accepts one parameter called title.
# The function should print a message, such as "One of my favorite books is <title>".
# For example: “One of my favorite books is Alice in Wonderland”
# Call the function, make sure to include a book title as an argument when calling the function.

def favorite_book(title):
    return print(f'One of my favorite books is {title}.')

favorite_book('The Hitchhiker\'s Guide to the Galaxy')

# Exercise 3 : Some Geography
# Write a function called describe_city() that accepts the name of a city and its country as parameters.
# The function should print a simple sentence, such as "<city> is in <country>".
# For example “Reykjavik is in Iceland”
# Give the country parameter a default value.
# Call your function.

def describe_city(city, country = 'Israel'):
    return print(f'{city} is in {country}')

describe_city('Tel Aviv')
describe_city('Moscow', 'Russia')

# Exercise 4 : Random
# Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100. Use the random module.
# Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.

def random_game(num:int):
    num_r = random.randint(1,100)
    if num == num_r:
        return print('Success!')
    else:
        return print(f'Fail! Correct number: {num_r}, you guessed: {num}')

while True:
    x = int(input('Give me a number from 1 to 100: '))
    if x in range(1, 101):
        random_game(x)
        break
    else: 
       print('Not a number from 1 to 100. Give me another: ')

# Exercise 5 : Let’s create some personalized shirts !
# Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
# The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
# Call the function make_shirt().
# Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
# Make a large shirt with the default message
# Make medium shirt with the default message
# Make a shirt of any size with a different message.
# Bonus: Call the function make_shirt() using keyword arguments.

def make_shirt(size = 'L', message = 'I love Python'):
    return print(f'The size of the shirt is {size} and the text is "{message}"')

make_shirt()
make_shirt('M')
make_shirt('S','I went to Tel-Aviv and all I got was this lousy t-shirt')
make_shirt(size='XXL', message='Women love me, fish fear me')

# Exercise 6 : Magicians…
# Using this list of magician’s names
# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
# Create a function called show_magicians(), which prints the name of each magician in the list.
# Write a function called make_great() that modifies the original list of magicians by adding the phrase "the Great" to each magician’s name.
# Call the function make_great().
# Call the function show_magicians() to see that the list has actually been modified.

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians(names:list):
    for name in names:
        print(name)

show_magicians(magician_names)

def make_great(names:list) -> list:
    names_great = []
    for name in names:
        names_great.append(name + ' the Great')
    return(names_great)

great_magician_names = make_great(magician_names)
show_magicians(great_magician_names)

# Exercise 7 : Temperature Advice
# Create a function called get_random_temp().
# This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
# Test your function to make sure it generates expected results.

# Create a function called main().
# Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
# Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”

# Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
# - below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
# - between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
# - between 16 and 23
# - between 24 and 32
# - between 32 and 40

# Change the get_random_temp() function:
# Add a parameter to the function, named ‘season’.
# Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season, eg. if season is ‘winter’, temperatures should only fall between -10 and 16.
# Now that we’ve changed get_random_temp(), let’s change the main() function:
# Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly. Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
# Use the season as an argument when calling get_random_temp().

# Bonus: Give the temperature as a floating-point number instead of an integer.
# Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). Determine the season according to the month.

def get_random_temp() -> int:
    while True:
        month = int(input('What is the number of the current month? '))
        if month not in range(1, 13):
            print('Not a valid month number! Try again')
        else: 
            break
    if month in range(3, 6):
        season = 'spring'
        temp = random.randint(5, 20)
    elif month in range(6, 9):
        season = 'summer'
        temp = random.randint(18, 40)
    elif month in range(9, 12):
        season = 'autumn'
        temp = random.randint(-2, 18)
    else:
        season = 'winter'
        temp = random.randint(-10, 5)
    return(temp, season)

def main():
    current_temp, current_season = get_random_temp()
    print(f'It\'s {current_season}. The temperature right now is {current_temp} degrees Celsius.')
    if current_temp < 0:
        print('Brrr, that\'s freezing! Wear some extra layers today.')
    elif 0 <= current_temp < 16:
        print('Quite chilly! Don\'t forget your coat.')
    elif 16 <= current_temp < 23:
        print('Not too hot, maybe put on a shirt.')
    elif 23 <= current_temp < 32:
        print('Nice and warm, wear something light.')
    else:
        print('Wow, it\'s super hot! Cover your head and don\'t forget to drink water.')

main()

# Exercise 8 : Star Wars Quiz
# This project allows users to take a quiz to test their Star Wars knowledge.
# The number of correct/incorrect answers are tracked and the user receives different messages depending on how well they did on the quiz.
# Create a function that asks the questions to the user, and check his answers. Track the number of correct, incorrect answers. Create a list of wrong_answers
# Create a function that informs the user of his number of correct/incorrect answers.
# Bonus : display to the user the questions he answered wrong, his answer, and the correct answer.
# If he had more then 3 wrong answers, ask him to play again.

starwars = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def score(data:list, answers_correct:int, answers_wrong:int, questions_wrong:list):
    print(f'You got {answers_correct}/{len(data)} answers correct and {answers_wrong}/{len(data)} answers wrong.')
    if answers_wrong > 0:
        print('Here\'s what you got wrong:')
        for item in questions_wrong:
            print(f"Question: {item['question']}\nCorrect answer: {item['correct answer']}\nYour answer: {item['wrong answer']}")

def quiz(data:list):
    user_answer = ''
    answers_correct = 0
    answers_wrong = 0
    questions_wrong = []
    for item in data:
        user_answer = input(item['question']+ '\n')
        if user_answer.lower() == item['answer'].lower():
            answers_correct += 1
        else:
            answers_wrong += 1
            wrong = {'question': item['question'], 'correct answer': item['answer'], 'wrong answer': user_answer}
            questions_wrong.append(wrong)
            if answers_wrong > 3:
                try_again = input('Too many wrong answers! Would you like to try again? ')
                if try_again.lower() == 'yes' or try_again.lower() == 'y':
                    quiz(data)
                    return
                else:
                    break
    score(data, answers_correct, answers_wrong, questions_wrong)

quiz(starwars)