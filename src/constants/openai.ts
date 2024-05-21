export const OPENAI_API_KEY = 'x-openai-apikey';
export const OPENAI_END_POINT = 'x-openai-endpoint';

interface OPENAI_MODEL {
  /**
   * 最大 Token 数
   */
  maxToken: number;
  /**
   * 模型名称
   */
  name: string;
}

/**
 * OpenAI 模型列表
 */
export const OPENAI_MODEL_LIST: OPENAI_MODEL[] = [
  // GPT 3.5: https://platform.openai.com/docs/models/gpt-3-5
  {
    maxToken: 16_385,
    name: 'gpt-3.5-turbo-1106',
  },
  {
    maxToken: 4096,
    name: 'gpt-3.5-turbo',
  },
  {
    maxToken: 16_385,
    name: 'gpt-3.5-turbo-16k',
  },
  {
    maxToken: 4096,
    name: 'gpt-3.5-turbo-instruct',
  },
  // GPT 4.0 https://platform.openai.com/docs/models/gpt-4-and-gpt-4-turbo
  {
    maxToken: 128_000,
    name: 'gpt-4-1106-preview',
  },
  {
    maxToken: 128_000,
    name: 'gpt-4-vision-preview',
  },
  {
    maxToken: 8192,
    name: 'gpt-4',
  },
  {
    maxToken: 32_768,
    name: 'gpt-4-32k',
  },
  {
    maxToken: 8192,
    name: 'gpt-4-0613',
  },
  {
    maxToken: 32_768,
    name: 'gpt-4-32k-0613',
  },
  {
    maxToken: 128_000,
    name: 'gemini-1.5-flash-latest',
  },
  {
    maxToken: 128_000,
    name: 'Creative-g4t-offline-vision',
  },
  {
    maxToken: 128_000,
    name: 'bing',
  },
  {
    maxToken: 128_000,
    name: 'concise',
  },
  {
    maxToken: 128_000,
    name: '海螺(网长图识音合)',
  },
  {
    maxToken: 128_000,
    name: '跃问(联网识长)',
  },
  {
    maxToken: 128_000,
    name: '智谱(网画识长)',
  },
  {
    maxToken: 128_000,
    name: 'claude-3-haiku-20240307',
  },
  {
    maxToken: 128_000,
    name: 'deepseek_chat',
  },
  {
    maxToken: 128_000,
    name: '通义(画图识长)',
  },
  {
    maxToken: 128_000,
    name: '星火(画图识长)',
  },
  {
    maxToken: 128_000,
    name: 'kimi(识图长文)',
  },
  {
    maxToken: 128_000,
    name: 'command-r-plus',
  },
];
