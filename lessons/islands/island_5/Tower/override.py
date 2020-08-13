def draw_square(size: int):
    for direction in ["forward","right","back","left"]:
        for position in range(0,size):
            agent.place(1,"down")
            agent.move(direction)

@user-code

build_tower()