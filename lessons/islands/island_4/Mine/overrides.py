def found_iron(direction: str):
    if direction is not "forward":
        say("Direction can only be 'forward'")
        raise Exception("Direction can oly be 'forward'")
    if agent.inspect("forward") == "iron_ore"
        agent.move("up")
        agent.place(1, "forward")
        agent.move("down")
    else:
        say("Block infront of agent isn't iron ore!)
        raise Exception("Block infront of agent isn't iron ore")
        
def found_diamond(direction: str):
    if direction is not "forward":
        say("Direction can only be 'forward'")
        raise Exception("Direction can oly be 'forward'")
    if agent.inspect("forward") == "diamond_ore"
        agent.move("up")
        agent.place(1, "forward")
        agent.move("down")
    else:
        say("Block infront of agent isn't diamond ore!)
        raise Exception("Block infront of agent isn't diamond ore")