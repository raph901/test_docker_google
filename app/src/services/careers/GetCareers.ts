import { gql, useQuery } from '@apollo/client';
import appoloClient from '@/lib/AppoloClient/AppoloClient';

type Career = {
	title: string,
	tags: string[],
	link: string,
}

type Data = {
	posts: {
		nodes: [{
			title: string,
			career: {
				tag1: string,
				tag2: string,
				tag3: string,
				link: string
			}
		}]
	}
}

const GET_CAREERS_GQL = gql`{
    posts(where: {categoryName: "career"}) {
        nodes {
            title,
            career {
                tag1,
                tag2,
                tag3,
                link
            }
        }
    }
}`;

const GetCareers = () => {
	const {data} = useQuery(GET_CAREERS_GQL, {client: appoloClient});
	const _data: Data = data as Data;
	const careers: Career[] = [];

	if(_data) {
		_data.posts.nodes.forEach((node) => {
			careers.push({
				title: node.title,
				tags: [node.career?.tag1, node.career?.tag2, node.career?.tag3],
				link: node.career.link
			});
		});
	}

	return careers;
}

export default GetCareers;
