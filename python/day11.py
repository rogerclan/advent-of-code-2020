import fileinput
from copy import deepcopy

seating_chart = [list(i.strip()) for i in list(fileinput.input())]

rows_len = len(seating_chart)
seats_len = len(seating_chart[0])


def seat_check(row, seat, manifest, writable_chart, max_occupied, see_someone):
    occupied = 0
    if manifest[row][seat] == ".":
        return False
    for cr in [-1, 0, 1]:
        for cs in [-1, 0, 1]:
            if not (cr == 0 and cs == 0):
                rr = row + cr
                ss = seat + cs
                if see_someone:
                    while 0 <= rr < rows_len and 0 <= ss < seats_len and manifest[rr][ss] == ".":
                        rr = rr + cr
                        ss = ss + cs
                if 0 <= rr < rows_len and 0 <= ss < seats_len and manifest[rr][ss] == "#":
                    occupied += 1
    if manifest[row][seat] == "L" and occupied == 0:
        writable_chart[row][seat] = "#"
        return True
    elif manifest[row][seat] == "#" and occupied >= max_occupied:
        writable_chart[row][seat] = "L"
        return True
    else:
        return False


def manifest_check(manifest, max_occupied, see_someone):
    writable_chart = deepcopy(manifest)
    changes = False
    for row in range(rows_len):
        for seat in range(seats_len):
            if seat_check(row, seat, manifest, writable_chart, max_occupied, see_someone):
                changes = True
    return changes, deepcopy(writable_chart)


def count_taken(manifest):
    filled_seats = 0
    for row in range(rows_len):
        for seat in range(seats_len):
            if manifest[row][seat] == "#":
                filled_seats += 1
    print(filled_seats)


def check_rules(max_occupied, see_someone):
    manifest = deepcopy(seating_chart)
    while True:
        changes, updated_manifest = manifest_check(manifest, max_occupied, see_someone)
        manifest = updated_manifest
        if not changes:
            break
    count_taken(manifest)


check_rules(4, False)
check_rules(5, True)
