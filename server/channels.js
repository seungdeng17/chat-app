const channels = new Map();

const addChannel = (channel, data) => channels.set(channel, data.length);

const removeChannel = (channel, data) => {
    if (!data) return channels.delete(channel);
    channels.set(channel, data.length);
}

const getChannels = () => channels;

module.exports = { addChannel, removeChannel, getChannels };