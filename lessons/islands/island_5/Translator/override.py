import time

@user-code


list_of_numbers = [3, 4, 0, 6, 2, 1]

for bit in list_of_numbers:
    block = agent.inspect_data("forward")
    num = decode(block)
    if num == None:
        raise Exception("No input! Please fix your function, or Reset Bit Input and try again.")
        break
    say("Decoded bit as : {}".format(int(num)))
    if num != bit:
        say("Incorrect bit given!")
        raise Exception("Incorrect bit! Please fix your function, or Reset Bit Input and try again.")
        break
    else:
        world.summon("snow_golem", [1007,150,132])
        say("Loading Next Bit")
    time.sleep(1)
        
world.summon("snow_golem", [1014,148,132])