import fileinput

data = list(fileinput.input())
arrive_time = int(data[0])
buses = [int(x) for x in data[1].split(",") if x != "x"]

# (time, bus)
best_bus = (None, 0)
for bus in buses:
    t = bus - (arrive_time % bus)
    if best_bus[0] is None or best_bus[0] > t:
        best_bus = (t, bus)

print(best_bus[0] * best_bus[1])

buses = ["x" if x == "x" else int(x) for x in data[1].split(",")]
bus_to_offset = {bus: -i % bus for i, bus in enumerate(buses) if bus != "x"}
# list of bus numbers large to small
bus_numbers = list(reversed(sorted(bus_to_offset)))
# Offset of the bus time
offset = bus_to_offset[bus_numbers[0]]
bus = bus_numbers[0]
for next_bus in bus_numbers[1:]:
    while offset % next_bus != bus_to_offset[next_bus]:
        offset += bus
    bus *= next_bus

print(offset)
