import DialogueConfig from './DialogueConfig';

export default interface ChapterConfig {
  /** 章节名称 */
  name: string,
  /** 章节标题 */
  title: string,
  /** 章节子标题 */
  subTitle?: string,
  /** 章节背景音乐 */
  backgroundMusic?: string,
  /** 章节背景图片 */
  backgroundImage?: string,
  /** 持续时间 */
  duration?: number,
  /** 换场时间 */
  transition?: string,
  /** 对白 */
  dialogues: DialogueConfig[],
}
