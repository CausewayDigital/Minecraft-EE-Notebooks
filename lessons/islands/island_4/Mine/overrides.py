def mark_iron(direction: str):
    if direction is not "forward":
        say("Direction can only be forward")
        raise Exception("Direction can oly be forward")
    if ore_detector("forward") == "iron_ore"
        agent.place(1, "up")
    else:
        say("Block infront of agent is not iron ore!")
        raise Exception("Block infront of agent is not iron ore")

def mark_diamond(direction: str):
    if direction is not "forward":
        say("Direction can only be forward")
        raise Exception("Direction can oly be forward")
    if ore_detector("forward") == "diamond_ore"
        agent.place(1, "up")
    else:
        say("Block infront of agent is not diamond ore!")
        raise Exception("Block infront of agent is not diamond ore")

def ore_detector(direction: str):
    block = agent.inspect(direction)
    if block == "light_gray_terracotta":
        return "diamond_ore"
    elif block == "orange_terracotta":
        return "iron_ore"
    else:
        return block

@user-code
