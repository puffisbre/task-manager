import {User} from '../models/User.ts';

const getUsers = async () => {
    return User.find().lean();
}

export default getUsers;