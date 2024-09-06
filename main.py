import time
from snake import Snake
from food import Food
from scoreboard import ScoreBoard
from turtle import Screen

# set up screen, its dimensions, background color, and title
screen = Screen()
screen.setup(width=600, height=600)
screen.bgcolor("black")
screen.title("The Snake Game")
screen.tracer(0)

snake = Snake()
food = Food()
score_board = ScoreBoard()


screen.listen()
screen.onkey(snake.up, "Up")
screen.onkey(snake.down, "Down")
screen.onkey(snake.left, "Left")
screen.onkey(snake.right, "Right")

game_is_on = True
while game_is_on:
    screen.update()
    time.sleep(0.1)

    # Detect collision with food
    if snake.snake_head.distance(food) < 20:
        food.refresh()
        snake.extend()
        score_board.update_score()

    # Detect collision with wall
    if snake.snake_head.xcor() > 280 or snake.snake_head.xcor() < -280 or snake.snake_head.ycor() > 280 or snake.snake_head.ycor() < -280:
        score_board.reset()
        snake.reset()

    # Detect collision with tail
    for i in snake.snake_segments[1:]:
        if snake.snake_head.distance(i) < 10:
            score_board.reset()
            snake.reset()
    snake.move()























screen.exitonclick()
