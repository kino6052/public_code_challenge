export const generateUniqueId = (): string => `\
${Math.round(Math.random() * 10000)}-\
${Math.round(Math.random() * 10000)}-\
${Math.round(Math.random() * 10000)}-\
${Math.round(Math.random() * 10000)}`;
