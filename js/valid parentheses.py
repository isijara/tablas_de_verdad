import sys
test_cases = open(sys.argv[1], 'r')
stack = []
opening = [ '(', '{', '[']
closing = [ ')', '}', ']']

for test in test_cases:
    chars = test.strip()

    #chars = list(test)
    for c in chars:
        if( c in closing and len(stack) == 0):
            print False
        else if( c in closing )

test_cases.close()
