import { apiCall } from '../utils/networking';

// Record<key, value> Key is a string and value is any
const cachedMessageRecordArrays: Record<string, any> = {};

export async function getChannelMessages(teamId: string, channelId: string) {
  let cached = cachedMessageRecordArrays[channelId];
  if (typeof cached === 'undefined')
    cached = cachedMessageRecordArrays[channelId] = apiCall(
      `teams/${teamId}/channels/${channelId}/messages`,
    );
  return await cached;
}
