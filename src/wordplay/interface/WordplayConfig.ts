import ChapterConfig from './ChapterConfig';

export default interface WordPlayConfig {
  /** 游戏名称 */
  name: string,
  /** 游戏作者 */
  author: string,
  /** 游戏标题 */
  title: string,
  /** 游戏子标题 */
  subTitle?: string, 
  /** 开场背景音乐 */
  backgroundMusic?: string,
  /** 开场背景图片 */
  backgroundImage?: string,
  /** 结束语 */
  conclusion: string,
  /** 章节 */
  chapters?: ChapterConfig[],
}