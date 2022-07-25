"""Word Finder: finds random words from a dictionary."""

from random import choice


class WordFinder:
    """Finds random words from dictionary
    >>> wf = WordFinder("test_words.txt")
    3 words read

    >>> wf.random() in ["cat", "dog", "bird"]
    True

    >>> wf.random() in ["cat", "dog", "bird"]
    True

    >>> wf.random() in ["cat", "dog", "bird"]
    True


    """

    def __init__(self, file):
        """Instantiated reading file, lists words, prints out number of words read"""
        word_file = open(file)

        self.words = self.parse(word_file)

        print(f"{len(self.words)} words read")

    def __repr__(self):
        """Show Representation"""
        return f"<WordFinder is looking at a document with {len(self.words)} words >"

    def parse(self, word_file):
        """Parses the file with words and returns list"""
        return [w.strip() for w in word_file]

    def random(self):
        """Returns random word from list of words"""

        return choice(self.words)


class SpecialWordFinder(WordFinder):
    """This is a wordfinder that will exclude comments and blank lines
    >>> special_wf = SpecialWordFinder("blank_comments.txt")
    4 words read

    >>> special_wf.random() in ["word", "another", "test", "hello"]
    True

    >>> special_wf.random() in ["word", "another", "test", "hello"]
    True

    >>> special_wf.random() in ["word", "another", "test", "hello"]
    True
    """

    def parse(self, word_file):
        """Parse file of words to create a list, while ignoring blank lines and comments"""

        return [w.strip() for w in word_file
                if w.strip() and not w.startswith("#")]
