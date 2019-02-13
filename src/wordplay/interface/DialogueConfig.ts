import ActionConfig from './ActionConfig';

export default interface DialogueConfig {
  /** 对话名称 */
  name: string,
  /** 旁白 */
  narration?: string,
  /** 字幕 */
  caption?: string,
  /** 持续时长 */
  duration?: number,
  /** 行为 */
  actions?: ActionConfig[],
}