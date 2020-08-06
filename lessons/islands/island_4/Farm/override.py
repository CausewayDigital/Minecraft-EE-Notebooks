def check_flower(direction: str):
    block = agent.inspect(direction)
    block_data = agent.inspect_data(direction)
    if block == "red_flower":
        if block_data["data"] == 0:
            return "red_flower"
        elif block_data["data"] == 1:
            return "blue_orchid"
        elif block_data["data"] == 2:
            return "allium"
        elif block_data["data"] == 3:
            return "houstonia"
        elif block_data["data"] == 4:
            return "red_tulip"
        elif block_data["data"] == 5:
            return "orange_tulip"
        elif block_data["data"] == 6:
            return "white_tulip"
        elif block_data["data"] == 7:
            return "pink_tulip"
        elif block_data["data"] == 8:
            return "oxeye_daisy"
        elif block_data["data"] == 9:
            return "cornflower"
        elif block_data["data"] == 10:
            return "lilyOfTheValley"
        
        