import fileinput

data = [list((i[0], int(i[1:]))) for i in list(fileinput.input())]

# points
x = 0
y = 0
# direction
# 0 = n, 1 = e, 2 = s, 3 = w
d = 1

# for row in data
for r in data:
    # command
    c = r[0]
    # number
    n = r[1]
    if c == "F":
        # east
        if d == 1:
            x += n
        # west
        elif d == 3:
            x -= n
        # north
        elif d == 0:
            y += n
        # south
        else:
            y -= n
    elif c == "R":
        d = (d + 1 * (n / 90)) % 4
    elif c == "L":
        # 3 * number of positions is one less than full rotation per position
        d = (d + 3 * (n / 90)) % 4
    elif c == "E":
        x += n
    elif c == "W":
        x -= n
    elif c == "N":
        y += n
    else:
        y -= n

print(abs(x) + abs(y))

data = [list((i[0], int(i[1:]))) for i in list(fileinput.input())]

# points
x = 0
y = 0
# direction
# 0 = n, 1 = e, 2 = s, 3 = w
d = 1
# way points
wx = 10
wy = 1

for r in data:
    c = r[0]
    n = r[1]
    if c == "F":
        x += n * wx
        y += n * wy
    elif c == "R":
        for _ in range(int(n / 90)):
            wx, wy = wy, -wx
    elif c == "L":
        for _ in range(int(n / 90)):
            wx, wy = -wy, wx
    elif c == "E":
        wx += n
    elif c == "W":
        wx -= n
    elif c == "N":
        wy += n
    else:
        wy -= n

print(abs(x) + abs(y))
