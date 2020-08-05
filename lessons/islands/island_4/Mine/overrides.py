import time

def check_ore(direction: str):
    block = agent.inspect(direction)
    block_data = agent.inspect_data(direction)
    if block == "stained_hardened_clay":
        if block_data["data"] == 3:
            return "diamond_ore"
        else:
            return "dirt"
    else:
        return block

def mark_diamond(direction: str):
    if direction is not "forward":
        say("Direction can only be forward")
        raise Exception("Direction can oly be forward")
    if check_ore("forward") is not "air":
        agent.place(2, "up")
    else:
        say("Unable to detect a block!")
        raise Exception("Unable to detect block")
        
def mark_bin(direction: str):
    if direction is not "forward":
        say("Direction can only be forward")
        raise Exception("Direction can oly be forward")
    if check_ore("forward") is not "air":
        agent.place(1, "up")
    else:
        say("Unable to detect a block!")
        raise Exception("Unable to detect block")

@user-code
    time.sleep(0.5)