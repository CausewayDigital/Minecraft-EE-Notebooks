Answers:



Buffy's House:
#Try using agent.move agent.give and agent.place to solve the problem
agent.move("up")
for _ in range(3):
   agent.give("brick_block", 64, 1)
   for _ in range(4):
      for _ in range(4):
         agent.place(1, "down")
         agent.move("forward")
      agent.place(1, "down")
      agent.turn("right")
   agent.move("up")