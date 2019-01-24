interface FrameConfig {
  name?: string,
  narration?: string,
  caption?: string,
  duration?: number,
  actions?: string[],
  actionsGoTo?: string[],
}

interface ChapterConfig {
  name?: string,
  title?: string,
  subTitle?: string,
  backgroundMusic?: string,
  backgroundImage?: string,
  duration?: number,
  transition?: string,
  frames?: FrameConfig[],
}

interface WordPlayConfig {
  name?: string,
  author?: string,
  title?: string,
  subTitle?: string, 
  backgroundMusic?: string,
  backgroundImage?: string,
  duration?: number,
  chapters?: ChapterConfig[],
}

/**
 * 
 * @param config
 */
export default function parse(config: WordPlayConfig) {
  console.log(config);
}

export function paramExist(obj: object, param: string) {
  return !!obj[param];
}