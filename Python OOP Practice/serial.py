"""Python serial number generator."""


class SerialGenerator:
    """Machine to create unique incrementing serial numbers.

    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """

    def __init__(self, start=0):
        """Create new generator, starts at start(100 by default)"""

        self.start = start
        self.next = start

    def __repr__(self):
        """New Representation"""

        return f"<SerialGenerator start ={self.start} next={self.next}>"

    def generate(self):
        """Generates Serial"""

        self.next += 1
        return self.next - 1

    def reset(self):
        """Reset serial number to start number"""

        self.next = self.start
