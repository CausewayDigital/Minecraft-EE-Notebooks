def on_chat_jump(hight):
    say("You said jump!")
    user.teleport(from_me(0, hight, 0))


#Bellow is override code, above is user's code
import time
def on_player_message(message, sender, receiver, message_type):
    split_message = message.split(" ")
    if split_message[0] in ["Jump", "JUMP", "jump"]:
        if len(split_message) >= 2:
            pram1 = split_message[1]
        else:
            pram1 = 0
        chat_say_jump(pram1)
        time.sleep(1)
        