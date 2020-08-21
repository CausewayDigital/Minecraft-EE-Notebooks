import time

def translate_data(block: str) -> int:
    data_dict = {
        "A": 1,
        "B": 2,
        "C": 3,
        "D": 4,
        "E": 5,
        "F": 6,
        "G": 7,
        "H": 8,
        "I": 9
    }
    return data_dict.get(block, 0)

@user-code


list_of_numbers = [3, 4, 0, 6, 2, 1]
# This dict holds all the 
variable_dict = {
        1: "A",
        2: "B",
        3: "C",
        4: "D",
        5: "E",
        6: "F",
        7: "G",
        8: "H",
        9: "I":
    }
    
for bit in list_of_numbers:
    block = variable_dict.get(agent.inspect_data("forward"), "Z")
    num = decode(block)
    if num == None:
        raise Exception("No number given! Please fix your function, or Reset Bit Input and try again.")
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