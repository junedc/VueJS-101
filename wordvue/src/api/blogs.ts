import {Post} from "@/models/blog/Post";
import {api} from "@/utils/api";

export const blogs = async (): Promise<Post[]> =>
{
    return api.get('blogposts');
};
