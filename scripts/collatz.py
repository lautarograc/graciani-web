def collatz_conjecture(n):
    while n > 1:
        print(n, end=' ')
        if (n % 2) == 1:
            n = 3 * n + 1
        elif (n % 2) != 1:
            n = n/2
    print(1, end='')

n=34
collatz_conjecture()