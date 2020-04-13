import antigravity

inp = int(input("maxline number: "))

i = 1
outer = inp
while outer > 0 :
    while i <= outer:
        print("*", end = '')
        i += 1
    i = 1
    outer -= 1
    print()

for outer in range(inp+1, 1, -1):
    for i in range(1, outer):
        print("*", end = "")
    print()   
    