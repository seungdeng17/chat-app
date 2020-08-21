const users = [];

const addUser = ({ id, name, channel }) => {
    const existingUser = users.find((user) => user.channel === channel && user.name === name);

    if (!name || !channel) return { error: '이름과 채널을 입력하세요.' };
    if (existingUser) return { error: '채널에 중복된 이름이 있어요.' };

    const user = { id, name, channel };
    users.push(user);

    return { user };
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) return users.splice(index, 1)[0];
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInChannel = (channel) => users.filter((user) => user.channel === channel);

module.exports = { addUser, removeUser, getUser, getUsersInChannel };