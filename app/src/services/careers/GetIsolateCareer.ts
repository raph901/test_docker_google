import { gql, useQuery } from '@apollo/client';
import appoloClient from '@/lib/AppoloClient/AppoloClient';

export type Career = {
	title: string,
	tags: string[],
	content: string,
	responsabilities: string,
	qualifications: string,
	otherkeyattributes: string
}

type Data = {
	posts: {
		nodes: [{
			title: string,
			career: {
				tag1: string,
				tag2: string,
				tag3: string,
				content: string,
				responsabilities: string,
				qualifications: string,
				otherkeyattributes: string
			}
		}]
	}
}

export const GET_CAREER_BY_TITLE_GQL = gql`
    query GetCareerByTitle($title: String!) {
        posts(where: {categoryName: "career", title: $title}) {
            nodes {
                title,
                career {
                    tag1,
                    tag2,
                    tag3,
                    content,
                    responsabilities,
                    qualifications,
                    otherkeyattributes
                }
            }
        }
    }
`;

const GetCareerByTitle = (title: string) => {
	const {data} = useQuery(GET_CAREER_BY_TITLE_GQL, {client: appoloClient, variables: {title: title}});
	const _data: Data = data as Data;
	const career: Career = {
		title: "",
		tags: [],
		content: "",
		responsabilities: "",
		qualifications: "",
		otherkeyattributes: ""
	};

	if(_data) {
		_data.posts.nodes.forEach((node) => {
			career.title = node.title;
			career.content = node.career.content;
			career.responsabilities = node.career.responsabilities;
			career.qualifications = node.career.qualifications;
			career.otherkeyattributes = node.career.otherkeyattributes;
			career.tags = [node.career?.tag1, node.career?.tag2, node.career?.tag3]
		})
	}

	return career;
}

export default GetCareerByTitle;
