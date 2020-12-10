import fileinput

data = [int(x) for x in list(fileinput.input())]
# starts at 0
data.append(0)
# Last number is 3 more than max
data.append(max(data) + 3)
data = sorted(data)
plus1 = 0
plus3 = 0

for i in range(len(data) - 1):
    d = data[i + 1] - data[i]
    if d == 1:
        plus1 += 1
    elif d == 3:
        plus3 += 1

PATHS = {}


def find_path(start):
    last = len(data)
    if start == last - 1:
        return 1
    if start in PATHS:
        return PATHS[start]
    ans = 0
    for index in range(start + 1, last if start + 4 > last else start + 4):
        if data[index] - data[start] <= 3:
            ans += find_path(index)
    PATHS[start] = ans
    return ans


print(plus1 * plus3)
print(find_path(0))
