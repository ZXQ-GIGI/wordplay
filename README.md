# wordplay

A word game engine developed with ts.


## Configuration Instructions 


| key | value | description | defaultValue | required |
| ----|-------| ----------- | ------------ | -------- |
| author | string | 游戏作者 | '' | true |
| title | string | 游戏标题 | 'Wordplay' | true |
| subTitle | string| 游戏子标题 | null | false |
| backgroundMusic | string| 游戏开始界面背景音乐| null | false |
| backgroundImage | string| 游戏开始界面背景图片| null | false |
| conclusion | string | 游戏结束语| '' | true |
| chapters | [Chapter](#chapter)[] | 游戏章节 | '' | true |

- <span id='chapter'>Chapter</span>

| key | value | description | defaultValue | required |
| ----|-------| ----------- | ------------ | -------- |
| name | string | 章节名称, 作为key值, 唯一 | 'Chapter 1' | true |
| title | string| 章节标题 | '' | true |
| subTitle | string | 章节子标题 | null | false |
| backgroundMusic | string | 章节背景音乐 | null | false |
| backgroundImage | string | 章节背景图片 | null | false |
| duration | number | 持续时间 | 1 | false |
| transition | string | 换场时间 | 1 | false | 
| dialogues | [Dialogue](#dialogue)[] | 对白 | [] | true |

- <span id='dialogue'>Dialogue</span>

| key | value | description | defaultValue | required |
| ----|-------| ----------- | ------------ | -------- |
| name | string | 对白名称, 作为key值, 唯一 | 'Chapter 1' | true |
| narration | string | 旁白音效 | '' | true |
| caption | string| 旁白字幕 | '' | true |
| backgroundImage | string | 对白背景图片 | null | false |
| actions | [Action](#action)[] | 操作行为 | [] | false |

- <span id='action'>Action</span> 

| key | value | description | defaultValue | required |
| ----|-------| ----------- | ------------ | -------- |
| type | string | 操作类型, 值属于'next','jump','end' | next | true |
| name | string | 显示内容 | ''| true |
| jump | string | 跳转旁白name值 | '' | 当type为<font color="#0f0">jump</font>时为true, 其他为false |


## TODO

- [ ] Styles
- [ ] Configuration interface


