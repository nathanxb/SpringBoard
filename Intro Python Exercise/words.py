def print_upper_words(words):
    """Takes list of words and prints uppercase version on individual lines"""

    for word in words:
        print(word.upper())


print_upper_words(["Hello", "hOw", "are", "YOU"])
print("""should be:
    HELLO
    HOW
    ARE
    YOU
    """)


def print_upper_e_words(words):
    """Takes list of words and prints uppercase version on individual lines
        BUT, only if the word starts with "e" or "E"  """

    for word in words:
        if word.startswith("e") or word.startswith("E"):
            print(word.upper())


print_upper_e_words(["Earth", "python", "elephant", "key"])
print("""should be:
    EARTH
    ELEPHANT
    """)


def print_upper_by_letter(words, must_start_with):
    """Takes list of words and prints uppercase version on individual lines
        BUT, only if the word starts with passed in letter"""

    for word in words:
        for letter in must_start_with:
            if word.startswith(letter):
                print(word.upper())
                break  # break prevents having to iterate over each letter in every word if the letter is found


print_upper_by_letter(["hello", "hey", "goodbye", "yo", "yes"],
                      must_start_with={"h", "y"})
print("""should be:
    HELLO
    HEY
    YO
    YES
""")
