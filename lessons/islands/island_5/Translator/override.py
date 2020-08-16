import time

@user-code

list_of_numbers = [3, 4, 0, 6, 2, 1]

for bit in list_of_numbers:
    block = agent.inspect_data("forward")
    num = decode(block)
    say("DECODED #" + str(num))
    if num != bit:
        say("Incorect bit given!")
        raise Exception("Incorect bit! Please fix your function")
        break
    else:
        world.summon("snow_golem", [1007,150,132])
    time.sleep(1)
        
world.summon("snow_golem", [1014,148,132])