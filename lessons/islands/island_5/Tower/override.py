def draw_square(size: int):
    for direction in ["forward","right","back","left"]:
        for position in range(0,size):
            agent.place(1,"down")
            agent.move(direction)

@user-code

# agent.teleport([1017,159,80], [1017,159,76])
# build_tower()

# Tower A
agent.teleport([1026,159,71], [1026,159,66])
build_tower()

# Tower B
agent.teleport([1008,159,71], [1008,159,66])
build_tower()