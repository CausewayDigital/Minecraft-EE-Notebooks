if(agent.inspect("down") == "dirt"):
    agent.move("up")
    agent.till("down")
    agent.give("wheat seeds", 64, 1)
    agent.place(1, "down")
    agent.move("forward")
    agent.move("down")