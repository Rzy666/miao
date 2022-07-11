/**
 * 游戏参数
 */

/**
 * canvas参数
 */
CANVAS_WIDTH = 350;
CANVAS_HEIGHT = 500;
canvas = document.getElementById('canvas');
context = canvas.getContext('2d');
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
LEFT = canvas.getBoundingClientRect().left;
TOP = canvas.getBoundingClientRect().top;


/**
 * 图形参数
 */
BOX_SIZE = 25; //每个小方块25x25
M = 20; //游戏区 M X N 每列M个box
N = 10; //游戏区 M X N 每行N个box
K = 14; //界面总宽14格
BOARD_WIDTH = 0.5 * CANVAS_HEIGHT; //游戏区宽
BOARD_HEIGHT = CANVAS_HEIGHT; //游戏区高
SIDEBAR_WIDTH = CANVAS_WIDTH - BOARD_WIDTH; //侧边栏宽
SIDEBAR_HEIGHT = CANVAS_HEIGHT; //侧边栏高
//7种基本方块
BLANK = 0;
I = 1;
O = 2;
T = 3;
S = 4;
Z = 5;
J = 6;
L = 7;
FORMS = [0, 2, 1, 4, 2, 2, 4, 4]; //每种图形的form数
SCORES = [0, 100, 300, 600, 1000]; //SCORES[i]表示一次消除i行时的得分
//颜色表
//COLORS = ['gray', 'cyan', 'yellow', 'purple', 'green', 'red', 'blue', 'orange'];

/**
 * 时间参数
 */
INTERVAL = 200; //每200ms下落一格