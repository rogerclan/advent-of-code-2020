import fileinput

data = [int(x) for x in list(fileinput.input())]


def find_sum(deep):
    for i in range(len(data)):
        x = data[i]
        for j in range(i + 1, len(data)):
            y = data[j]
            if deep:
                for k in range(j + 1, len(data)):
                    z = data[k]
                    if x + y + z == 2020:
                        print(x * y * z)
                        break
            else:
                if x + y == 2020:
                    print(x * y)
                    break


find_sum(False)
find_sum(True)
