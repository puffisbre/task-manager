import {Task} from '../models/Task.ts';

const getTasks = async () => {
    return Task.find().lean();
}

export default getTasks;