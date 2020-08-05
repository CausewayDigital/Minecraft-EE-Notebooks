def mark_diamond(direction: str):
    if direction is not "forward":
        say("Direction can only be forward")
        raise Exception("Direction can oly be forward")
    if ore_detector("forward") is not "air":
        agent.place(2, "up")
    else:
        say("Unable to detect a block!")
        raise Exception("Unable to detect block")
        
def mark_bin(direction: str):
    if direction is not "forward":
        say("Direction can only be forward")
        raise Exception("Direction can oly be forward")
    if ore_detector("forward") is not "air":
        agent.place(1, "up")
    else:
        say("Unable to detect a block!")
        raise Exception("Unable to detect block")

def check_ore(direction: str):
    block = agent.inspect(direction)
    if block == "light_gray_terracotta":
        return "diamond_ore"
    elif block == "orange_terracotta":
        return "iron_ore"
    else:
        return block

@user-code
